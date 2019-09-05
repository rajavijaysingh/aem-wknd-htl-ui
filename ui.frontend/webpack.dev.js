const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
   mode: 'production',
   devtool: 'none',
   devServer:{
      contentBase:"./dist",
      openPage:"home.html",
      port:9000,
      open:true

   },
   watch:false,
   watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
   performance: {hints: "warning"}
});