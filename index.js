const api = {
  tracker: require('./utils/api/tracker'),
};

/**
* Запуск сервера
*/
require('./app/api/server')(api);