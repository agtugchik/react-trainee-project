import React, { useEffect } from 'react';
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from 'api/unsplash-api';
import { useInView } from 'react-intersection-observer';
import { Photo } from 'components/Photo';
import { ParamsFilter } from 'components/ui/ParamsFilter';
import { Image, SearchResponse } from 'types/unsplash-types';
import { usePhotoFilter } from 'hooks/use-photo-filter';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const transformPhoto = (photo: InfiniteData<SearchResponse | Image[], number>) => {
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

  const getNextPageParam = (
    lastPage: SearchResponse | Image[],
    allPages: (SearchResponse | Image[])[],
    lastPageParam: number
  ) => {
    if (((lastPage as SearchResponse).results || (lastPage as Image[])).length === 0) return;
    return lastPageParam + 1;
  };

  const { photoFilter } = usePhotoFilter();
  const { ref, inView, entry } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['photos', photoFilter],
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
