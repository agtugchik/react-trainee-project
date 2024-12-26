import { useQueryClient } from '@tanstack/react-query';
import { Image } from 'types/unsplash-types';

type UsePhotoFilterr = () => (name: string, value: string) => void;
type ChangeFilter = (name: string, value: string) => void;

export const usePhotoFilter: UsePhotoFilterr = () => {
  const queryClient = useQueryClient();
  const changeFilter: ChangeFilter = (name, value) => {
    localStorage.setItem(name, value);
    queryClient.setQueryData(['photos'], (data: { pageParams: number[]; pages: Image[][] }) => ({
      pages: data.pages.length ? [data.pages[0]] : [],
      pageParams: data.pageParams.length ? [data.pageParams[0]] : [],
    }));
    queryClient.invalidateQueries({ queryKey: ['photos'] });
  };

  return (name, value) => changeFilter(name, value);
};
