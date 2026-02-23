/**
 * Format a user-friendly date string.
 */
function formatDate(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return 'Invalid date';
  }
  return date.toISOString().split('T')[0];
}

/**
 * Sanitize a string for safe display.
 */
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/[<>&"']/g, (ch) => {
    const map = { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&#39;' };
    return map[ch];
  });
}

/**
 * Build a standard API response envelope.
 */
function buildResponse(data, error = null) {
  return {
    success: !error,
    data: error ? null : data,
    error: error || null,
    timestamp: new Date().toISOString(),
  };
}

/**
 * @deprecated This parser is no longer used anywhere.
 * Kept for backward compatibility — remove when ready.
 */
function legacyParser(raw) {
  try {
    const lines = raw.split('\n');
    const result = {};
    for (const line of lines) {
      const [key, ...rest] = line.split('=');
      if (key && rest.length) {
        result[key.trim()] = rest.join('=').trim();
      }
    }
    return result;
  } catch {
    return {};
  }
}

/**
 * Validate that required fields exist on an object.
 */
function validateRequired(obj, fields) {
  const missing = fields.filter((f) => obj[f] === undefined || obj[f] === null || obj[f] === '');
  return { valid: missing.length === 0, missing };
}

module.exports = { formatDate, sanitize, buildResponse, legacyParser, validateRequired };
