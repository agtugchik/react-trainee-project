import { QueryFunction } from '@tanstack/react-query';
import { SearchParamsValues } from 'context/SearchParamsContext';
import { Image } from 'types/unsplash-types';

const baseUrl = 'https://api.unsplash.com';

export const getPhotos: QueryFunction<
  { results: Image[] },
  [string, SearchParamsValues],
  number
> = async ({ pageParam, queryKey }) => {
  const response = await fetch(
    `${baseUrl}/search/photos?client_id=${process.env.UNSPLASH_ACCESS_KEY}&page=${pageParam}&per_page=12&query=${String(queryKey[1].query).replace(/\s+/g, '') || 'null'}${queryKey[1].order_by && `&order_by=${queryKey[1].order_by}`}${queryKey[1].content_filter && `&content_filter=${queryKey[1].content_filter}`}${queryKey[1].color && `&color=${queryKey[1].color}`}${queryKey[1].orientation && `&orientation=${queryKey[1].orientation}`}`,
    {
      headers: {
        'Accept-Version': 'v1',
      },
    }
  );
  return response.json();
};
