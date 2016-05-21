# gulp-require-tasks
Require gulp-tasks exprted by other modules in your gulp.tasks.

## Install
Install it via npm:
```npm install gulp-require-tasks```

## Usage
```javascript
// gulpfile.js
var Gulp = require('gulp')
var gulpRequireTasks = require('gulp-require-tasks')
gulpRequireTasks('./yourGulpTasksModule')

// yourGulpTaskModule.js
var Gulp = require('gulp')
Gulp.task('logHello', function () {
  console.log('Hello')
})
module.exports = Gulp.tasks
```
