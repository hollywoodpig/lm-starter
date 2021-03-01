const mix = require('laravel-mix')

require('laravel-mix-ejs')

mix
  .sass('src/scss/_imports.scss', 'public/css/vendor.css')
  .sass('src/scss/app.scss', 'public/css/app.css')
  .extract()
  .js('src/js/**/*', 'public/js/app.js')
  .copyDirectory('src/fonts', 'public/fonts')
  .copyDirectory('src/img', 'public/img')
  .ejs(
    'src/pages',
    'public',
    {},
    {
      partials: 'src/pages/includes'
    }
  )
