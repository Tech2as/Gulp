const gulp = require('gulp')
const webserver = require('gulp-webserver')
const { watch } = require('gulp') // monitarando os arquivos, sempre que houver mudança vai chamar as tasks
const { appHTML, appCSS, appJS, appIMG } = require('./app')

function servidor() {
     return gulp.src('build')
        .pipe(webserver({ 
            port: 8080,
            open: true,
            livereload: true,
        }))
}

function monitorarArquivos(cb) {
    watch('src/**/*.html', appHTML) // monitar código fonte e ver oq for alterado e chamar a task HTML
    watch('src/**/*.scss', appCSS)
    watch('src/**/*.js', appJS)
    watch('src/assets/imgs/**/*.*', appIMG)

    return cb()
}

module.exports = {
    monitorarArquivos,
    servidor
}