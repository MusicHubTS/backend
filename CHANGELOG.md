# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- Add readonly song list to homepage.

### Changed

- Refactor some typings, classes and functions. E.g.
  - Redefine some typings like `SongPiece`.
  - Change the pattern of returns of `/rest/get-config/songs`.
- Change homepage layout.

### Fixed

- Fix some annoying TypeScript compiler errors. ([ce44e8b](https://github.com/LittleYe233/MusicHub/commit/ce44e8bfa078640e025ac9a61a228a4a54b844d6))
- Accept blank `cover` and `lrc` fields of `APlayerAudio`. ([6a9fda3](https://github.com/LittleYe233/MusicHub/commit/6a9fda399856d5b4570738ba5a74fcd6a577cea8))
- Fix parsing error on absolute URLs. ([#2](https://github.com/LittleYe233/MusicHub/issues/2))

## [0.1.0] - 2022-06-03

### Added

- Support playing local media.