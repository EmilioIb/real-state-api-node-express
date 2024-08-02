class ErrorsUtils {
  printErrors = errors => {
    const cleanErrors = {};
    for (const error of errors) {
      cleanErrors[error.path[0]] = error.message;
    }
    return { status: false, message: 'Errors with data received.', errors: cleanErrors };
  };
}

module.exports = new ErrorsUtils();
