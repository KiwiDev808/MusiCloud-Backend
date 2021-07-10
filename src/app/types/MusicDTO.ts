import { Music } from '../entities/Music';

export type MusicWithAuthor = Music & { author: string };

export type MusicDetails = MusicWithAuthor & {
  album: string;
  genres: string[];
};
