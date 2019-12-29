const path = require('path')

module.exports = {
  paths: function(paths, env) {
    paths.appIndexJs = path.resolve(__dirname, `lesson_${process.env.REACT_APP_LESSON}/index.tsx`)
    paths.appSrc = path.resolve(__dirname, `lesson_${process.env.REACT_APP_LESSON}`)
    paths.appTypeDeclarations = path.resolve(__dirname)
    return paths
  },
}
