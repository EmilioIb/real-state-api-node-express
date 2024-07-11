module.exports = function errorHandler(err, req, res, next) {
  const code = err.status || 500;
  const body = { status: false, message: err.message || err };
  res.status(code).json(body);
};
