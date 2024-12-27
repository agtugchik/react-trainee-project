import { QueryFunction } from '@tanstack/react-query';
import { Image, SearchResponse } from 'types/unsplash-types';

const baseUrl = 'https://api.unsplash.com';

export const getPhotos: QueryFunction<
  SearchResponse | Image[],
  [string, { [key: string]: string }],
  number
> = async ({ pageParam, queryKey }) => {
  const isAnyParamPassed = Boolean(Object.values(queryKey[1]).reduce((a, v) => a + v, ''));
  const response = await fetch(
    `${baseUrl}` +
      `${isAnyParamPassed ? '/search' : ''}/photos` +
      `?client_id=${process.env.UNSPLASH_ACCESS_KEY}&page=${pageParam}` +
      `${isAnyParamPassed ? `&query=${queryKey[1].query.replace(/\s+/g, '') || 'null'}` : ''}` +
      `${queryKey[1].order_by && `&order_by=${queryKey[1].order_by}`}` +
      `${queryKey[1].content_filter && `&content_filter=${queryKey[1].content_filter}`}` +
      `${queryKey[1].color && `&color=${queryKey[1].color}`}` +
      `${queryKey[1].orientation && `&orientation=${queryKey[1].orientation}`}`,
    {
      headers: {
        'Accept-Version': 'v1',
      },
    }
  );
  return response.json();
};
