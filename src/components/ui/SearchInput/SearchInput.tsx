import React from 'react';
import SearchIcon from 'assets/icons/search.svg';

export const SearchInput = () => (
  <div className="relative">
    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
      <SearchIcon />
    </div>
    <input
      type="search"
      id="query"
      name="query"
      className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search"
    />
  </div>
);
