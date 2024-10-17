const path = require('path');

function configureEJS(app) {
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, '../Views'));
}

module.exports = configureEJS;