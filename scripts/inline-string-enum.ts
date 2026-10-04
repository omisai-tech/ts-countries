import ts from "typescript";
import type { Plugin } from "rolldown";

/** Emit string enums as plain objects, retaining their original declaration types. */
export function inlineStringEnum(fileName: string): Plugin {
  return {
    name: "inline-string-enum",
    transform(code, id) {
      if (id !== fileName) return;

      const result = ts.transpileModule(code, {
        fileName,
        compilerOptions: {
          target: ts.ScriptTarget.ESNext,
          module: ts.ModuleKind.ESNext,
          sourceMap: true,
          inlineSources: true,
        },
        transformers: {
          before: [
            (context) => (source) => {
              const visit: ts.Visitor = (node) => {
                if (!ts.isEnumDeclaration(node)) return ts.visitEachChild(node, visit, context);

                const properties = node.members.map((member) => {
                  if (!member.initializer || !ts.isStringLiteral(member.initializer)) {
                    throw new Error(`Expected string enum values in ${fileName}`);
                  }
                  return context.factory.createPropertyAssignment(member.name, member.initializer);
                });
                const replacement = context.factory.createVariableStatement(
                  node.modifiers,
                  context.factory.createVariableDeclarationList(
                    [
                      context.factory.createVariableDeclaration(
                        node.name,
                        undefined,
                        undefined,
                        context.factory.createObjectLiteralExpression(properties, true),
                      ),
                    ],
                    ts.NodeFlags.Const,
                  ),
                );
                ts.setOriginalNode(replacement, node);
                return ts.setTextRange(replacement, node);
              };
              return ts.visitNode(source, visit) as ts.SourceFile;
            },
          ],
        },
      });

      // Rolldown consumes the returned map and emits its own mapping URL.
      return {
        code: result.outputText.replace(/\/\/# sourceMappingURL=.*$/m, ""),
        map: result.sourceMapText,
      };
    },
  };
}
