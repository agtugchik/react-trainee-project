import React from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPhotos } from 'api/unsplash-api';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const { data, fetchNextPage } = useInfiniteQuery({
    queryKey: ['photos'],
    queryFn: getPhotos,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => lastPageParam + 1,
  });

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
      <button onClick={() => fetchNextPage()}>LoadMore</button>
    </div>
  );
};
