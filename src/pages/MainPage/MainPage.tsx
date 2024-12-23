import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from 'api/unsplash-api';
import { useInView } from 'react-intersection-observer';
import { Photo } from 'components/Photo';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const { ref, inView, entry } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: getPhotos,
    select: (photo) => {
      const photoWithLike = photo.pages.map((page) =>
        page.results.map((photo) => ({
          ...photo,
          isLiked: localStorage.getItem(String(photo.id)) === 'true',
        }))
      );

      return {
        pages: photoWithLike,
        pageParams: photo.pageParams,
      };
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.results.length === 0) return;
      return lastPageParam + 1;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (entry && inView) fetchNextPage();
  }, [entry, inView, fetchNextPage]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data?.pages.map((page) => page.map((photo) => <Photo key={photo.id} photo={photo} />))}
      {isFetchingNextPage ? <>Loading...</> : hasNextPage && <div ref={ref} />}
    </div>
  );
};
