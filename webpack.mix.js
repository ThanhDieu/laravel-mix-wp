const mix = require('laravel-mix');

// vendor js
mix.js(['./src/js/bootstrap.js'], './js/1vendor.min.js').sourceMaps(false, 'source-map')

// vendor css
mix.styles([
	'node_modules/bootstrap/dist/css/bootstrap.css',
	'node_modules/owl.carousel/dist/assets/owl.carousel.css'
],
	'./css/1vendor.min.css'
).sourceMaps(false, 'source-map')

// js
mix.combine(
	[
		'./src/js/app.js'
	],
	'./js/style.min.js'
).sourceMaps(false, 'source-map')
// css
mix.sass('./src/scss/app.scss', './css/style.min.css').sourceMaps(false, 'source-map').options({
	processCssUrls: false
});

// copy assets
mix.copyDirectory('./src/fonts', './fonts');
mix.copyDirectory('./src/images', './images');
mix.copyDirectory('./src/css', './css');
