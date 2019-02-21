'use strict'

const { ExecutedTests } = require('test-executor')

new ExecutedTests(
  './test/SpawnedCommandTest.js'
).call()
