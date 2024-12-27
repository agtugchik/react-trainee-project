import { renderHook, waitFor } from '@testing-library/react';
import { usePhotoFilter } from './use-photo-filter';
import { QueryProvider } from 'context/';

const testValues: { [key: string]: string } = {
  query: 'some_value',
  order_by: 'latest',
  content_filter: 'low',
  color: 'black',
  orientation: 'landscape',
};

describe('usePhotoFilter', () => {
  test('should work correct', () => {
    const { result } = renderHook(usePhotoFilter, { wrapper: QueryProvider });
    for (const key in testValues) {
      expect(result.current.photoFilter[key]).toEqual('');
      result.current.setPhotoFilter(key, testValues[key]);
      waitFor(() => expect(result.current.photoFilter[key]).toEqual(testValues[key]));
    }
  });
});
