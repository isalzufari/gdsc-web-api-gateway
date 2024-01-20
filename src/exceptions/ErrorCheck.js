const ServiceUnavailable = require("./ServiceUnavailable");
const ServiceTimeout = require("./ServiceTimeout");
const ServerError = require("./ServerError");

const ErrorCheck = (error) => {
  if (error.code === 'ECONNABORTED') {
    throw new ServiceTimeout('Service timeout!')
  }

  if (error.code === 'ECONNREFUSED') {
    throw new ServiceUnavailable('Service unavailable!')
  }

  const { status, data } = error.response;
  throw new ServerError(data.message, status);
}

module.exports = ErrorCheck;
