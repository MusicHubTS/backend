# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.3.0] - 2022-06-27

### Added

- Set up ESLint and prettier pre-commit hooks.
- Make playlist of MusicHub more useful and add a toolbar for it. (#3)

### Breaking API changed

- Replace `removeSong()` with `removeSongs()`.

### Changed

- Set APlayer upstream to own.
- Refine code style.
- Refine format of `CHANGELOG.md`.

### Fixed

- Add missing title of v0.2.0 in `CHANGELOG.md`. (633313c223f89ea7ae4b91afbd4198750f6ed979)
- Set width of expanded player panel correctly. (#5)

## [0.2.0] - 2022-06-12

### Added

- Add readonly song list to homepage.

### Changed

- Refactor some typings, classes and functions. E.g.
  - Redefine some typings like `SongPiece`.
  - Change the pattern of returns of `/rest/get-config/songs`.
- Change homepage layout.

### Fixed

- Fix some annoying TypeScript compiler errors. (ce44e8bfa078640e025ac9a61a228a4a54b844d6)
- Accept blank `cover` and `lrc` fields of `APlayerAudio`. (6a9fda399856d5b4570738ba5a74fcd6a577cea8)
- Fix parsing error on absolute URLs. (#2)

## [0.1.0] - 2022-06-03

### Added

- Support playing local media.

[0.3.0]: https://github.com/LittleYe233/MusicHub/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/LittleYe233/MusicHub/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/LittleYe233/MusicHub/releases/tag/v0.1.0