# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0]

### Added

- Dutch, Danish, Swedish, Norwegian, Polish, Czech, Slovak, Slovenian, and Croatian country names, including `getName()` and JSON support
- Total area in square kilometers as the `area` string property, preserving CSV formatting
- Legacy `dial` property for compatibility, with the same telephone country code as `callingCode`

### Deprecated

- `dial` in favor of `callingCode`; `dial` will be removed in the next major version

## [1.0.0] - 2025-12-19

### Added

- Initial release with 250+ country classes
- Multi-language support (7 languages)
- TypeScript with full type definitions
- Rolldown bundler for optimal performance
- Comprehensive test suite
- GitHub Actions CI/CD
- Support for Node.js, Bun
- NPM and JSR publishing

### Changed

- N/A

### Fixed

- N/A

[1.0.0]: https://github.com/omisai/ts-countries/releases/tag/v1.0.0
