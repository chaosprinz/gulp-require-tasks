'use strict'

const gulpRequireTasks = function (module, gulpInstance) {
  let taskList = require(module)
  for (let taskName in taskList) {
    gulpInstance.tasks[taskName] = taskList[taskName]
  }
}

module.exports = gulpRequireTasks
