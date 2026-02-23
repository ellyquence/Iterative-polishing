const config = {
  PORT: process.env.PORT || 3000,
  REQUEST_TIMEOUT_MS: 30000,
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  DB_QUERY_LOG_LEVEL: 'debug',
  MAX_RETRIES: 3,
  APP_NAME: 'Polish Test App',
};

module.exports = config;
