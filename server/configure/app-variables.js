'use strict';

var path = require('path');

var rootPath = path.join(__dirname, '../../');
var indexPath = path.join(rootPath, './server/views/index.html');

//var env = require(path.join(rootPath, './server/env'));

module.exports = function (app) {
    //app.setValue('env', env);
    app.setValue('projectRoot', rootPath);
    app.setValue('indexHTMLPath', indexPath);
};