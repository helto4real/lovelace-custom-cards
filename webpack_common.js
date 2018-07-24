const path = require('path');

module.exports = {
    entry : ['./src/picture-status-element.js'],
    output : {
        filename : 'custom-cards.js',
        path: path.resolve(__dirname, 'dist')
    }
};