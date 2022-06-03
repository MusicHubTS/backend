<p style="text-align: center" align="center">
  <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">
  <h1>MusicHub - a powerful online & offline music player, rewritten in Ts.ED</h1>
  <br />
  <div align="center">
    <a href="https://cli.tsed.io/">Website</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://cli.tsed.io/getting-started.html">Getting started</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://api.tsed.io/rest/slack/tsedio/tsed">Slack</a>
    <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
    <a href="https://twitter.com/TsED_io">Twitter</a>
  </div>
  <hr />
</div>

## Introduction

This project aims to standardize music experience and concentrate music resources on the Web which is available almost anytime and anywhere - with only a supported browser (you must have one nowadays).

It's a server-side app - it needs to be set up on a server, and it's recommended to spare sufficient disk space (and choose one outside China mainland if you want to enjoy music on some banned platforms).

It supports (or will support) plugins/addons for many other music platforms and custom themes.

## Getting started

### NPM (recommended)

> **Important!** Ts.ED requires Node >= 14, Express >= 4 and TypeScript >= 4.

For Linux/OS X users, open your terminal and clone this repo:

```bash
git clone https://github.com/LittleYe233/MusicHub.git
```

Then change directory into it and choose the branch you want (main is recommended):

```bash
cd MusicHub
git checkout main
```

Don't forget to copy configurations from example, or MusicHub will read built-in default settings:

```bash
cp config.example.yml config.yml
```

Note that git ignores `config.yml` by default, which is defined in `.gitignore`.

Now, follow the commands Ts.ED provided by default:

```batch
# install dependencies
$ npm install

# serve
$ npm run start

# build for production
$ npm run build
$ npm run start:prod
```

### Docker

**Note: It's just a default method for running Ts.ED projects. It's not fully tested for this one. It's still recommended to use traditional NPM method.**

```bash
# build docker image
docker compose build

# start docker image
docker compose up
```

## Barrelsby (currently disabled)

**It's currently disabled. See commit [54a3b8b1982cacf73c994e6cabcfd0928b3b4a38](https://github.com/LittleYe233/MusicHub/commit/54a3b8b1982cacf73c994e6cabcfd0928b3b4a38) and issue [#1](https://github.com/LittleYe233/MusicHub/issues/1).**

This project uses [barrelsby](https://www.npmjs.com/package/barrelsby) to generate index files to import the controllers.

Edit `.barreslby.json` to customize it:

```json
{
  "directory": [
    "./src/controllers/rest",
    "./src/controllers/pages"
  ],
  "exclude": [
    "__mock__",
    "__mocks__",
    ".spec.ts"
  ],
  "delete": false
}
```

## To-do

- [ ] Search engine
  - [ ] Local search
  - [ ] Online search
- [ ] Resource management
  - [ ] Local management
  - [ ] Download/Upload
- [ ] Plugins/Addons
  - [ ] Music API
    - [ ] NetEase Cloud Music
    - [ ] YouTube Music
- [ ] Themes

## Branches

- `main`: stable upstream branch
- `unstable`: unstable upstream branch, **default** at present
- `dev` and `dev_*`: development branches for the owner, just ignore them!

## Contribution

Lacking enough public details of this project like code styles and specifications, it's better for you to provide with bug reports and feature requests in [Issue](https://github.com/LittleYe233/MusicHub/issues) page at present.

## License

[MIT license](/LICENSE)
