# Contributing to TypeScript Countries

Thank you for your interest in contributing! 🎉

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/omisai-tech/ts-countries.git
   cd ts-countries
   ```

2. **Install dependencies**
   ```bash
      # BUN
      bun add @omisai/countries
      # NPM
      npm install @omisai/countries
      # PNPM
      pnpm add @omisai/countries
      # YARN
      yarn add @omisai/countries
   ```

3. **Generate country classes**
   ```bash
   bun run compile
   ```

4. **Run tests**
   ```bash
   bun test
   ```

## Development Workflow

### Making Changes

1. Create a new branch for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and ensure:
   - Code follows TypeScript best practices
   - All tests pass: `bun test`
   - Type checking passes: `bun run typecheck`
   - Code builds successfully: `bun run build`

3. Write or update tests for your changes

4. Commit your changes using conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   # or
   git commit -m "fix: resolve issue with..."
   # or
   git commit -m "docs: update README"
   ```

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation only changes
- `style:` - Code style changes (formatting, etc.)
- `refactor:` - Code refactoring
- `test:` - Adding or updating tests
- `chore:` - Maintenance tasks
- `ci:` - CI/CD changes

### Testing

Run the full test suite across all supported runtimes:

```bash
# Node.js
npm test

# With coverage
npm run test:coverage

# Watch mode
npm run test:watch

# Bun (if installed)
bun test tests/*.test.ts

# Deno (if installed)
deno test --allow-read tests/*.test.ts
```

### Building

```bash
# Clean build
bun run clean
bun run build

# Quick rebuild
bun run rebuild
```

## Updating Country Data

If you need to update the `countries.csv` file:

1. Ensure the CSV format remains consistent
2. Run the compiler: `bun run compile`
3. Verify all tests pass: `bun test`
4. Check a few generated country files manually

## Pull Request Process

1. **Update documentation** if needed (README.md, JSDoc comments)
2. **Add tests** for new functionality
3. **Ensure CI passes** - All GitHub Actions must be green
4. **Keep PRs focused** - One feature/fix per PR
5. **Write clear descriptions** - Explain what and why

### PR Checklist

- [ ] Tests added/updated and passing
- [ ] Type checking passes (`bun run typecheck`)
- [ ] Documentation updated
- [ ] Commit messages follow convention
- [ ] No unnecessary files committed
- [ ] Branch is up to date with main

## Code Style

- Use TypeScript strict mode
- Follow existing code patterns
- Add JSDoc comments for public APIs
- Keep functions small and focused
- Prefer composition over inheritance

## Questions?

Feel free to open an issue for:
- Bug reports
- Feature requests
- Questions about the codebase
- Suggestions for improvements

## Code of Conduct

Be respectful and constructive in all interactions. We're all here to learn and improve!

---

Thank you for contributing! 🚀
