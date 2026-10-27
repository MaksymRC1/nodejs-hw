import { HttpError } from 'http-errors';
import multer from 'multer';

export const errorHandler = (err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
    return;
  }

  if (err instanceof multer.MulterError || err.name === 'MulterError') {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: err.message || 'Something went wrong',
  });
};
