import { useQuery, useQueryClient } from '@tanstack/react-query';
import { ColorType, ContentFilterType, OrderByType, OrientationType } from 'types/unsplash-types';

export const usePhotoFilter = () => {
  const initialData: { [key: string]: string } = {
    query: localStorage.getItem('query') || '',
    order_by: (localStorage.getItem('order_by') as OrderByType) || '',
    content_filter: (localStorage.getItem('content_filter') as ContentFilterType) || '',
    color: (localStorage.getItem('color') as ColorType) || '',
    orientation: (localStorage.getItem('orientation') as OrientationType) || '',
  };

  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: ['photoFilter'],
    staleTime: Infinity,
    initialData,
  });

  const setPhotoFilter = (name: string, value: string) => {
    localStorage.setItem(name, value);
    queryClient.setQueryData(['photoFilter'], (filter: typeof data) => {
      const newFilter = { ...filter };
      newFilter[name] = value;
      return newFilter;
    });
  };
  return { photoFilter: data, setPhotoFilter };
};
