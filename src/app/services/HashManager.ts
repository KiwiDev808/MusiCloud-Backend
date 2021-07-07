import * as bcrypt from 'bcryptjs';
import { BCRYPT_COST } from '../../config';

export class HashManager {
  private cost: number = BCRYPT_COST;

  async hash(plainText: string): Promise<string> {
    const rounds = this.cost;
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(plainText, salt);
  }

  async compare(plainText: string, cypherText: string): Promise<boolean> {
    return bcrypt.compare(plainText, cypherText);
  }
}
