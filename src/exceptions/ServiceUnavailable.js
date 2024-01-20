const ServerError = require('./ServerError');

class ServerUnavailable extends ServerError {
  constructor(message) {
    super(message, 503);
    this.name = 'Service Unavailable';
  }
}

module.exports = ServerUnavailable;
