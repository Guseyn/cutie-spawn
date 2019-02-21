# cutie-spawn
Cutie extension for spawning command.


[![NPM Version](https://img.shields.io/npm/v/@cuties/spawn.svg)](https://npmjs.org/package/@cuties/spawn)
[![Build Status](https://travis-ci.org/Guseyn/cutie-spawn.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-spawn)
[![codecov](https://codecov.io/gh/Guseyn/cutie-spawn/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-spawn)

[Cutie](https://github.com/Guseyn/cutie) extension for [spawning command](https://nodejs.org/dist/latest/docs/api/child_process.html#child_process_child_process_spawn_command_args_options). It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Install

`npm install @cuties/spawn`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

```js
// Represented result is command
SpawnedCommand(
	command[, args][, options]
).call()

```

[asyncCall](https://github.com/Guseyn/cutie-spawn/blob/master/src/custom-calls/spawnedCommand.js)
