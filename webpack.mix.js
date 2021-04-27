let mix = require("laravel-mix");

mix
    .js("src/app.js" , 'dist/js').options({

        processCssUrls: false
    })
    .sass("src/style.scss", "css/")
    .setPublicPath("dist")
    .copy("src/index.html", "dist")