import { QueryFunction } from '@tanstack/react-query';
import { filterQueryParams } from 'helpers/filter-query-params';
import { Image, SearchResponse } from 'types/unsplash-types';

const baseUrl = 'https://api.unsplash.com';

export const getPhotos: QueryFunction<
  SearchResponse | Image[],
  [string, { [key: string]: string }],
  number
> = async ({ pageParam, queryKey }) => {
  const filledQueryParams = filterQueryParams(queryKey[1]);
  const searchParams = new URLSearchParams(filledQueryParams);
  const isAnyParamPassed = Boolean(Object.entries(filledQueryParams).length);
  searchParams.append('client_id', process.env.UNSPLASH_ACCESS_KEY || '');
  searchParams.append('page', String(pageParam));

  const response = await fetch(
    `${baseUrl}` + `${isAnyParamPassed ? '/search' : ''}/photos?` + searchParams.toString(),
    {
      headers: {
        'Accept-Version': 'v1',
      },
    }
  );
  return response.json();
};
