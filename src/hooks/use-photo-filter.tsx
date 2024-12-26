import { useQueryClient } from '@tanstack/react-query';

type UsePhotoFilterr = () => (name: string, value: string) => void;
type ChangeFilter = (name: string, value: string) => void;

export const usePhotoFilter: UsePhotoFilterr = () => {
  const queryClient = useQueryClient();
  const changeFilter: ChangeFilter = (name, value) => {
    localStorage.setItem(name, value);
    queryClient.invalidateQueries({ queryKey: ['photos'] });
  };

  return (name, value) => changeFilter(name, value);
};
