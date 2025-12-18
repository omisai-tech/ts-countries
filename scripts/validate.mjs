#!/usr/bin/env node
/**
 * Validation script to verify the package is properly configured
 */

import { existsSync, readFileSync } from 'fs';
import { join } from 'path';

const checks = [];

function check(name, condition, errorMsg = '') {
    const passed = typeof condition === 'function' ? condition() : condition;
    checks.push({ name, passed, errorMsg });
    console.log(`${passed ? '✅' : '❌'} ${name}`);
    if (!passed && errorMsg) {
        console.log(`   ${errorMsg}`);
    }
    return passed;
}

console.log('🔍 Validating package setup...\n');

// Check essential files
console.log('📁 Essential Files:');
check('package.json exists', existsSync('package.json'));
check('tsconfig.json exists', existsSync('tsconfig.json'));
check('rolldown.config.ts exists', existsSync('rolldown.config.ts'));
check('vitest.config.ts exists', existsSync('vitest.config.ts'));
check('LICENSE exists', existsSync('LICENSE'));
check('README.md exists', existsSync('README.md'));

// Check generated files
console.log('\n📦 Generated Files:');
check('src/index.ts exists', existsSync('src/index.ts'));
check('src/models directory exists', existsSync('src/models'));
check('dist directory exists', existsSync('dist'));
check('dist/index.js exists', existsSync('dist/index.js'));
check('dist/index.cjs exists', existsSync('dist/index.cjs'));
check('dist/index.d.ts exists', existsSync('dist/index.d.ts'));

// Check test files
console.log('\n🧪 Test Files:');
check('tests directory exists', existsSync('tests'));
check('Country.test.ts exists', existsSync('tests/Country.test.ts'));
check('Continent.test.ts exists', existsSync('tests/Continent.test.ts'));
check('countries.test.ts exists', existsSync('tests/countries.test.ts'));

// Check GitHub Actions
console.log('\n🔄 GitHub Actions:');
check('.github/workflows exists', existsSync('.github/workflows'));
check('test.yml workflow exists', existsSync('.github/workflows/test.yml'));
check(
    'release.yml workflow exists',
    existsSync('.github/workflows/release.yml')
);
check(
    'code-quality.yml workflow exists',
    existsSync('.github/workflows/code-quality.yml')
);
check('dependabot.yml exists', existsSync('.github/dependabot.yml'));

// Check package.json configuration
console.log('\n⚙️  Package Configuration:');
try {
    const pkg = JSON.parse(readFileSync('package.json', 'utf-8'));

    check('package.json has name', !!pkg.name);
    check('package.json has version', !!pkg.version);
    check('package.json has exports field', !!pkg.exports);
    check('package.json has type: module', pkg.type === 'module');
    check(
        'package.json has main (CJS)',
        !!pkg.main && pkg.main.includes('.cjs')
    );
    check(
        'package.json has module (ESM)',
        !!pkg.module && pkg.module.includes('.js')
    );
    check('package.json has types', !!pkg.types && pkg.types.includes('.d.ts'));

    // Check scripts
    check('has compile script', !!pkg.scripts?.compile);
    check('has build script', !!pkg.scripts?.build);
    check('has test script', !!pkg.scripts?.test);
    check('has typecheck script', !!pkg.scripts?.typecheck);

    // Check dependencies
    check('has rolldown dev dependency', !!pkg.devDependencies?.rolldown);
    check('has vitest dev dependency', !!pkg.devDependencies?.vitest);
    check('has typescript dev dependency', !!pkg.devDependencies?.typescript);
} catch (error) {
    console.log('❌ Failed to parse package.json');
}

// Summary
console.log('\n📊 Summary:');
const passed = checks.filter((c) => c.passed).length;
const total = checks.length;
const percentage = Math.round((passed / total) * 100);

console.log(`${passed}/${total} checks passed (${percentage}%)`);

if (passed === total) {
    console.log('\n✨ All checks passed! Package is properly configured. ✨');
    process.exit(0);
} else {
    console.log('\n⚠️  Some checks failed. Please review the errors above.');
    process.exit(1);
}
