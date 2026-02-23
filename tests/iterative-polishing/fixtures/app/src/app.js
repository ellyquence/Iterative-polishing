const express = require('express');
const morgan = require('morgan');
const config = require('./config');
const routes = require('./routes/index');

const app = express();

app.use(express.json());
app.use(morgan('dev'));

app.use('/api', routes);

// Serve a simple HTML page at root
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>${config.APP_NAME}</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>${config.APP_NAME}</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/api/users">Users</a>
        </nav>
      </header>
      <main>
        <p>Welcome to the application.</p>
        <button class="btn-primary">Submit</button>
      </main>
      <footer>
        <p>&copy; 2026 Polish Test App</p>
      </footer>
    </body>
    </html>
  `);
});

// Static files
app.use(express.static('public'));

// 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Not found' });
});

// Error handler
app.use((err, req, res, _next) => {
  console.error(`[error] ${err.message}`);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Only start listening if run directly
if (require.main === module) {
  app.listen(config.PORT, () => {
    console.log(`[info] ${config.APP_NAME} running on port ${config.PORT}`);
  });
}

module.exports = app;
