import { QueryFunction } from '@tanstack/react-query';

const baseUrl = 'https://api.unsplash.com';

interface Image {
  id: string;
  cover_photo: {
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
  };
}

export const getPhotos: QueryFunction<Image[], string[], number> = async ({ pageParam }) => {
  const response = await fetch(
    `${baseUrl}/collections?client_id=${process.env.UNSPLASH_ACCESS_KEY}&page=${pageParam}&per_page=12`
  );
  return response.json();
};
