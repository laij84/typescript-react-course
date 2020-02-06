/* eslint-disable prefer-destructuring */
import React from 'react'
import ReactDOM from 'react-dom'

let App = null

console.log(JSON.stringify(process.env.REACT_APP_LESSON), typeof process.env.REACT_APP_LESSON)
switch (process.env.REACT_APP_LESSON) {
  case '1':
    App = require('./lesson_1/App').App
    break
  case '2':
    App = require('./lesson_2/App').App
    break
  case '3':
    App = require('./lesson_3/App').App
    break
  case '4':
    App = require('./lesson_4/App').App
    break
  case '5':
    App = require('./lesson_5/App').App
    break
  case '6':
    App = require('./lesson_6/App').App
    break
  case '7':
    App = require('./lesson_7/App').App
    break
}

ReactDOM.render(<App />, document.getElementById('root'))
