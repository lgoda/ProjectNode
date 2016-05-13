var configValues = require('./config');

module.exports = {
    gedDbConnectionString: function() {
         return 'mongodb://' + configValues.uname + 
         ':' + configValues.pwd + 
         '@ds023042.mlab.com:23042/nodetodosample';
    }
}