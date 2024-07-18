const errorHandler = (err, req, res, next) => {
  res.json({
    error: err.message,
    stackTrace: err.stackTrace,
  });
};

module.exports = errorHandler;
