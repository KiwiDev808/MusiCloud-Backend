import { NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { APIError } from './APIError';

export const errorHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  if (error instanceof APIError) {
    response.status(error.code).send({ error: error.message });
    return;
  } else if (error instanceof ZodError) {
    const issues = error.issues.map(issue => {
      return {
        field: issue.path,
        message: issue.message,
      };
    });

    response.status(406).send({ error: issues });
    return;
  } else if (error instanceof SyntaxError) {
    response.status(400).send({ message: error.message });
    return;
  }
  response.status(500).send({ message: 'something went bad' });
};
