import React, { useEffect } from 'react';
import { GetNextPageParamFunction, InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from 'api/unsplash-api';
import { useInView } from 'react-intersection-observer';
import { Photo } from 'components/Photo';
import { ParamsFilter } from 'components/ui/ParamsFilter';
import { Image, LikedImage, SearchResponse } from 'types/unsplash-types';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const transformPhoto: (data: InfiniteData<SearchResponse | Image[], number>) => {
    pages: LikedImage[][];
    pageParams: number[];
  } = (photo) => {
    const photoWithLike = photo.pages.map((page) =>
      ((page as SearchResponse).results || (page as Image[])).map((photo) => ({
        ...photo,
        isLiked: localStorage.getItem(String(photo.id)) === 'true',
      }))
    );

    return {
      pages: photoWithLike,
      pageParams: photo.pageParams,
    };
  };

  const getNextPageParam: GetNextPageParamFunction<number, SearchResponse | Image[]> = (
    lastPage,
    allPages,
    lastPageParam
  ) => {
    if (((lastPage as SearchResponse).results || (lastPage as Image[])).length === 0) return;
    return lastPageParam + 1;
  };

  const { ref, inView, entry } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: getPhotos,
    select: transformPhoto,
    initialPageParam: 1,
    getNextPageParam,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (entry && inView) fetchNextPage();
  }, [entry, inView, fetchNextPage]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 overflow-x-hidden">
      <ParamsFilter />
      {data?.pages.map((page) => page.map((photo) => <Photo key={photo.id} photo={photo} />))}
      {isFetchingNextPage ? <>Loading...</> : hasNextPage && <div ref={ref} />}
    </div>
  );
};
