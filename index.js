//All core configurators
const Database = require('./configurators/database');
const HttpController = require('./configurators/http-controller');
const Helper = require('./configurators/helpers');

module.exports = {
    Configurator: {
        Helper: Helper.Configurator,
        Tracker: require('./configurators/tracker'),
        HttpController: HttpController.Configurator,
        Database: Database.Configurator
    },
    HttpServer: require('./configurators/http-server'),
    Database: Database,
    HttpController: HttpController,
    Helper: Helper
};
