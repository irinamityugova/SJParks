const http = require('http');
const mongoose = require('mongoose');
const config = require('./config');

// Initialize database connection - throws if database connection can't be
// established
mongoose
  .connect(
    config.mongoUrl,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log('>> Connected to mongoose'))
  .catch(err => console.error(err));
mongoose.Promise = Promise;

// Create Express web app
const app = require('./webapp');

// Create an HTTP server and listen on the configured port
const server = http.createServer(app);
server.listen(config.port, () =>
  console.log(`Server listening on port: ${config.port}`)
);
