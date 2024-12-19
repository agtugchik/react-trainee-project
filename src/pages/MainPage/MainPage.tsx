import React, { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getRandomPhotos } from 'api/unsplash-api';

export const pageTitle = 'MainPage';

export const MainPage = () => {
  const query = useQuery({ queryKey: ['photos'], queryFn: () => getRandomPhotos() });

  useEffect(() => console.log(query.data), [query]);
  return <div>{pageTitle}</div>;
};
