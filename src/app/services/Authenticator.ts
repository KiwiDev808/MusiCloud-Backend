import * as jwt from 'jsonwebtoken';
import { JWT_EXPIRES_IN, JWT_KEY } from '../../config';
import { authenticationData } from '../types/authenticationData';
import { APIError } from './APIError';

export class Authenticator {
  private AUTH_EXPIRES_IN: string = JWT_EXPIRES_IN;
  private AUTH_JWT_KEY: string = JWT_KEY;

  public generateToken(payload: authenticationData): string {
    return jwt.sign(payload, this.AUTH_JWT_KEY, {
      expiresIn: this.AUTH_EXPIRES_IN || '1h',
    });
  }

  public getTokenData(token: string): authenticationData {
    try {
      const result: any = jwt.verify(token, this.AUTH_JWT_KEY);
      return { id: result.id, role: result.role };
    } catch (error) {
      throw APIError.unauthorized(error.message);
    }
  }
}
