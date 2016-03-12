var Config = {
  apiPrefix: '/api/v1/',
  apiRequestThrottle: 1000,
  environment: '@@ENV',
  rootUrl: '',
  externalPluginsDirectory: '../dcos-installer-ui-plugins-private',
  pluginsConfig: {}
};

if (Config.environment === 'development') {
  var Util = require('../utils/Util');
  var ConfigDev = require('./Config.dev.js');

  Config = Util.extend(Config, ConfigDev);
}

if (Config.environment === 'production') {
  var Util = require('../utils/Util');
  var ConfigProd = require('./Config.production.js');

  Config = Util.extend(Config, ConfigProd);
}

module.exports = Config;

