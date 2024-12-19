import { QueryFunction } from '@tanstack/react-query';
import { Image } from 'types/unsplash-image';

const baseUrl = 'https://api.unsplash.com';

export const getPhotos: QueryFunction<Image[], string[], number> = async ({ pageParam }) => {
  const response = await fetch(
    `${baseUrl}/collections?client_id=${process.env.UNSPLASH_ACCESS_KEY}&page=${pageParam}&per_page=12`
  );
  return response.json();
};
