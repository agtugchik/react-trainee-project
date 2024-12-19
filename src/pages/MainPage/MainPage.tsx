import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRandomPhotos } from 'api/unsplash-api';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const query = useQuery({ queryKey: ['photos'], queryFn: () => getRandomPhotos(9) });

  useEffect(() => console.log(query.data), [query]);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {query.data?.map((photo) => (
        <div key={photo.id}>
          <img
            className="object-cover object-center w-full h-80 max-w-full rounded-lg"
            src={photo.urls.small}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
};
