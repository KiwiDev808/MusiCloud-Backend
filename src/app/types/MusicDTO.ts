import { Music } from '../entities/Music';

export type MusicWithAuthor = Music & { author: string };
