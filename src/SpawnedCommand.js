'use strict'

const { AsyncObject } = require('@cuties/cutie')
const spawnCommand = require('./custom-calls/spawnCommand')

// Represented result is process
class SpawnedCommand extends AsyncObject {
  constructor (command, args, options) {
    super(command, args || [], options || {
      stdio: [process.stdin, process.stdout, process.stderr]
    })
  }

  asyncCall () {
    return spawnCommand
  }
}

module.exports = SpawnedCommand
