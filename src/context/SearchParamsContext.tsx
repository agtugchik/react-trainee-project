import React, { createContext, ReactNode, useContext, useState } from 'react';
import { ColorType, ContentFilterType, OrderByType, OrientationType } from 'types/unsplash-types';

export interface SearchParamsValues {
  query: string;
  order_by: string;
  content_filter: string;
  color: string;
  orientation: string;
}

type ChangeParamValues = (name: string, value: string) => void;

interface SearchParamsContextType {
  paramValues: SearchParamsValues;
  changeParamValues: ChangeParamValues;
}

const SearchParamsContext = createContext<SearchParamsContextType | null>(null);

interface Props {
  children: ReactNode;
}

const SearchParamsProvider = ({ children }: Props) => {
  const initState = {
    query: localStorage.getItem('query') || '',
    order_by: (localStorage.getItem('order_by') as OrderByType) || '',
    content_filter: (localStorage.getItem('content_filter') as ContentFilterType) || '',
    color: (localStorage.getItem('color') as ColorType) || '',
    orientation: (localStorage.getItem('orientation') as OrientationType) || '',
  };
  const [paramValues, setParamValues] = useState<SearchParamsValues>(initState);

  const changeParamValues: ChangeParamValues = (name, value) => {
    localStorage.setItem(name, value);
    const newValues = { ...paramValues };
    newValues[name as keyof SearchParamsValues] = value || '';

    setParamValues(newValues);
    console.log(newValues);
  };

  const initSearchParamsStateValue = { paramValues, changeParamValues };

  return (
    <SearchParamsContext.Provider value={initSearchParamsStateValue}>
      {children}
    </SearchParamsContext.Provider>
  );
};

const useSearchParams = () => {
  return useContext(SearchParamsContext) as SearchParamsContextType;
};

export { SearchParamsProvider, useSearchParams };
