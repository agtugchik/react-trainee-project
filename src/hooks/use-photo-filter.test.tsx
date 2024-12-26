import { renderHook } from '@testing-library/react';
import { usePhotoFilter } from './use-photo-filter';
import { QueryProvider } from 'context/';

const testName = 'testName';
const testValue = 'testValue';

describe('usePhotoFilter', () => {
  test('should work correct', () => {
    const { result } = renderHook(usePhotoFilter, { wrapper: QueryProvider });
    expect(typeof result.current).toBe('function');
    result.current(testName, testValue);
    expect(localStorage.getItem(testName)).toEqual(testValue);
  });
});
