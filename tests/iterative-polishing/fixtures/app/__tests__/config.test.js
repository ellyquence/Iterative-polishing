const config = require('../src/config');

describe('config', () => {
  test('has default PORT', () => {
    expect(config.PORT).toBeDefined();
  });

  test('has REQUEST_TIMEOUT_MS set to 30000', () => {
    expect(config.REQUEST_TIMEOUT_MS).toBe(30000);
  });

  test('has DB_QUERY_LOG_LEVEL', () => {
    expect(config.DB_QUERY_LOG_LEVEL).toBe('debug');
  });

  test('has APP_NAME', () => {
    expect(config.APP_NAME).toBe('Polish Test App');
  });
});
