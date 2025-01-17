const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';

    const response = {
        success: false,
        error: message,
    };

    // Include stack trace only in development mode
    if (process.env.NODE_ENV === 'development') {
        response.stack = err.stack;
    }

    console.error(`[ERROR] ${statusCode} - ${message}`, err.stack || '');

    res.status(statusCode).json(response);
};

module.exports = errorHandler;