const path = require('path');
const webpack = require("webpack");
/*
'./src/picture-status-card/picture-status-card.js'
'./src/canvas-gauge-card/canvas-gauge-card.js'
*/
module.exports = {
    entry : './index.js',
    output : {
        filename : 'custom-cards.js',
        path: path.resolve(__dirname, 'dist')
    },
    externals: {
        jquery: 'canvas-gauges'
      },
    module: {
        rules: [
          {
            test: /gauge\.min\.js$/,
            use: [ 'script-loader' ]
          }
        ]
      }
};