const ServerError = require('./ServerError');

class ServerTimeout extends ServerError {
  constructor(message) {
    super(message, 504);
    this.name = 'Gateway Timeout';
  }
}

module.exports = ServerTimeout;
