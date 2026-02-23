const { formatDate, sanitize, buildResponse, validateRequired } = require('../src/utils/helpers');

describe('formatDate', () => {
  test('formats a valid date as YYYY-MM-DD', () => {
    const date = new Date('2026-01-15T10:30:00Z');
    expect(formatDate(date)).toBe('2026-01-15');
  });

  test('returns "Invalid date" for non-Date input', () => {
    expect(formatDate('not a date')).toBe('Invalid date');
  });

  test('returns "Invalid date" for invalid Date object', () => {
    expect(formatDate(new Date('invalid'))).toBe('Invalid date');
  });
});

describe('sanitize', () => {
  test('escapes HTML special characters', () => {
    expect(sanitize('<script>alert("xss")</script>')).toBe(
      '&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'
    );
  });

  test('returns empty string for non-string input', () => {
    expect(sanitize(123)).toBe('');
    expect(sanitize(null)).toBe('');
    expect(sanitize(undefined)).toBe('');
  });

  test('leaves safe strings unchanged', () => {
    expect(sanitize('Hello World')).toBe('Hello World');
  });
});

describe('buildResponse', () => {
  test('builds success response with data', () => {
    const resp = buildResponse({ id: 1 });
    expect(resp.success).toBe(true);
    expect(resp.data).toEqual({ id: 1 });
    expect(resp.error).toBeNull();
    expect(resp.timestamp).toBeDefined();
  });

  test('builds error response', () => {
    const resp = buildResponse(null, 'Something went wrong');
    expect(resp.success).toBe(false);
    expect(resp.data).toBeNull();
    expect(resp.error).toBe('Something went wrong');
  });
});

describe('validateRequired', () => {
  test('returns valid when all fields present', () => {
    const result = validateRequired({ name: 'Alice', email: 'a@b.com' }, ['name', 'email']);
    expect(result.valid).toBe(true);
    expect(result.missing).toEqual([]);
  });

  test('returns invalid with missing fields listed', () => {
    const result = validateRequired({ name: 'Alice' }, ['name', 'email']);
    expect(result.valid).toBe(false);
    expect(result.missing).toEqual(['email']);
  });

  test('treats empty string as missing', () => {
    const result = validateRequired({ name: '' }, ['name']);
    expect(result.valid).toBe(false);
    expect(result.missing).toEqual(['name']);
  });
});
