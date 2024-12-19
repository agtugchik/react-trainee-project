import React, { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from 'api/unsplash-api';
import { useInView } from 'react-intersection-observer';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const { ref, inView, entry } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: getPhotos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) return;
      return lastPageParam + 1;
    },
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (entry && inView) fetchNextPage();
  }, [entry, inView, fetchNextPage]);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data?.pages.map((page) =>
        page.map((photo) => (
          <div key={photo.id}>
            <img
              className="object-cover object-center w-full h-80 max-w-full rounded-lg"
              src={photo.cover_photo.urls.small}
              alt="gallery-photo"
            />
          </div>
        ))
      )}
      {isFetchingNextPage ? <>Loading...</> : hasNextPage && <div ref={ref} />}
    </div>
  );
};
