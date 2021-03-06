import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { APIError } from './APIError';

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(error);
  if (error instanceof APIError) {
    response.status(error.code).send({ message: error.message });
    return;
  } else if (error instanceof ZodError) {
    const issues = error.issues;

    response
      .status(406)
      .send({ message: `${issues[0].path}: ${issues[0].message}` });
    return;
  } else if (error instanceof SyntaxError) {
    response.status(400).send({ message: error.message });
    return;
  }
  response.status(500).send({ message: 'Internal Server Error' });
};
