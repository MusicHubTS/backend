# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.1] - 2022-7-11

### Changed

- Allow HTTPS address binding.
- Bind "http://localhost:8083" for HTTP port as default.
- Edit some documentation.

## [0.5.0] - 2022-7-10

### Breaking API changed

- Remove front-end part.

### Removed

- Remove front-end part.

## [0.4.0] - 2022-7-10

**ANNOUNCEMENT:** This repo will be broken into two parts - front-end part and back-end part for project [MusicHub](https://github.com/MusicHubTS), and will be moved into the MusicHub organization as the back-end part. Therefore, the front-end code here will be removed quickly.

### Added

- Add sort icons to playlist header (only appearance now).

### Breaking API changed

- Set static URI to `/public`, not `/static`.

### Changed

- Rewrite UI via Tailwind CSS.
- Refine code and remove useless styles in template HTML.
- Add Tailwind CSS compilation to `npm start`.

### Fixed

- Fix redirect links in changelog.

## [0.3.0] - 2022-06-27

### Added

- Set up ESLint and prettier pre-commit hooks.
- Make playlist of MusicHub more useful and add a toolbar for it. ([#3])

### Breaking API changed

- Replace `removeSong()` with `removeSongs()`.

### Changed

- Set APlayer upstream to own.
- Refine code style.
- Refine format of `CHANGELOG.md`.

### Fixed

- Add missing title of v0.2.0 in `CHANGELOG.md`. ([633313c])
- Set width of expanded player panel correctly. ([#5])

## [0.2.0] - 2022-06-12

### Added

- Add readonly song list to homepage.

### Changed

- Refactor some typings, classes and functions. E.g.
  - Redefine some typings like `SongPiece`.
  - Change the pattern of returns of `/rest/get-config/songs`.
- Change homepage layout.

### Fixed

- Fix some annoying TypeScript compiler errors. ([ce44e8b])
- Accept blank `cover` and `lrc` fields of `APlayerAudio`. ([6a9fda3])
- Fix parsing error on absolute URLs. ([#2])

## [0.1.0] - 2022-06-03

### Added

- Support playing local media.

[0.5.1]: https://github.com/MusicHubTS/backend/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/MusicHubTS/backend/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/MusicHubTS/backend/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/MusicHubTS/backend/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/MusicHubTS/backend/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/MusicHubTS/backend/releases/tag/v0.1.0

[#5]: https://github.com/MusicHubTS/backend/issues/5
[#3]: https://github.com/MusicHubTS/backend/issues/3
[#2]: https://github.com/MusicHubTS/backend/issues/2

[633313c]: https://github.com/MusicHubTS/backend/commit/633313c223f89ea7ae4b91afbd4198750f6ed979
[ce44e8b]: https://github.com/MusicHubTS/backend/commit/ce44e8bfa078640e025ac9a61a228a4a54b844d6
[6a9fda3]: https://github.com/MusicHubTS/backend/commit/6a9fda399856d5b4570738ba5a74fcd6a577cea8