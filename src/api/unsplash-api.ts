import { QueryFunction } from '@tanstack/react-query';
// import { SearchParamsValues } from 'context/SearchParamsContext';
import { Image, SearchResponse } from 'types/unsplash-types';
import { ColorType, ContentFilterType, OrderByType, OrientationType } from 'types/unsplash-types';

const baseUrl = 'https://api.unsplash.com';

export const getPhotos: QueryFunction<SearchResponse | Image[], string[], number> = async ({
  pageParam,
}) => {
  const initParams = {
    query: localStorage.getItem('query') || '',
    order_by: (localStorage.getItem('order_by') as OrderByType) || '',
    content_filter: (localStorage.getItem('content_filter') as ContentFilterType) || '',
    color: (localStorage.getItem('color') as ColorType) || '',
    orientation: (localStorage.getItem('orientation') as OrientationType) || '',
  };

  const isAnyParamPassed = Boolean(Object.values(initParams).reduce((a, v) => a + v, ''));
  const response = await fetch(
    `${baseUrl}` +
      `${isAnyParamPassed ? '/search' : ''}/photos` +
      `?client_id=${process.env.UNSPLASH_ACCESS_KEY}&page=${pageParam}` +
      `${isAnyParamPassed ? `&query=${initParams.query.replace(/\s+/g, '') || 'null'}` : ''}` +
      `${initParams.order_by && `&order_by=${initParams.order_by}`}` +
      `${initParams.content_filter && `&content_filter=${initParams.content_filter}`}` +
      `${initParams.color && `&color=${initParams.color}`}` +
      `${initParams.orientation && `&orientation=${initParams.orientation}`}`,
    {
      headers: {
        'Accept-Version': 'v1',
      },
    }
  );
  return response.json();
};
