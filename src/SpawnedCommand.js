'use strict'

const { AsyncObject } = require('@cuties/cutie')
const spawnedCommand = require('./custom-calls/spawnedCommand')

// Represented result is process
class SpawnedCommand extends AsyncObject {
  constructor (command, args, options) {
    super(command, args || [], options || {
      stdio: [process.stdin, process.stdout, process.stderr]
    })
  }

  asyncCall () {
    return spawnedCommand
  }
}

module.exports = SpawnedCommand
