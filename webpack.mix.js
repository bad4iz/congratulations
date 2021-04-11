const mix = require("laravel-mix");
const path = require("path");

require("dotenv").config();
let webpack = require("webpack");
/**
 * Import laravel-mix-graphql
 */
require("@pp-spaces/laravel-mix-graphql");

let dotenvplugin = new webpack.DefinePlugin({
    "process.env": {
        APP_NAME: JSON.stringify(process.env.APP_NAME || "Default app name"),
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        APP_URL_GRAPHQL: JSON.stringify(
            process.env.APP_URL_GRAPHQL || "development"
        )
    }
});

mix.webpackConfig({
    plugins: [dotenvplugin]
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.alias({
    "@": path.join(__dirname, "resources/js")
});

mix.js("resources/js/app.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [
        //
    ])
    .graphql();
