'use strict'

const { Assertion, StrictEqualAssertion, DeepStrictEqualAssertion } = require('@cuties/assert')
const { Is } = require('@cuties/is')
const { SpawnedCommand } = require('./../index')

class SafeSpawnedCommand extends SpawnedCommand {
  constructor (command, args, options) {
    super(command, args, options)
  }

  continueAfterFail () {
    return true
  }
}

new StrictEqualAssertion(
  new SpawnedCommand(
    'ls', [ '-a' ]
  ), 'ls'
).call()

new StrictEqualAssertion(
  new SpawnedCommand(
    'ls'
  ), 'ls'
).call()

new DeepStrictEqualAssertion(
  new SafeSpawnedCommand(
    'node', [ './test/error.js' ]
  ), new Error('command failed with code 1')
).call()

new Assertion(
  new Is(
    new SafeSpawnedCommand(
      'notfound'
    ), Error
  )
).call()
