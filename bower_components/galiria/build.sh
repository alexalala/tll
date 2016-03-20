rm -rf ./build
mkdir ./build
browserify src/galiria.js -s Galiria -o build/galiria.js
uglifyjs build/galiria.js > build/galiria.min.js
postcss --use autoprefixer src/galiria.css src/galiria.theme.css -d build/
cssnano build/galiria.css build/galiria.min.css
cssnano build/galiria.theme.css build/galiria.theme.min.css
