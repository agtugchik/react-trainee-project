import React from 'react';

export const EmailInput = () => (
  <div>
    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
      Email address
    </label>
    <div className="mt-2">
      <input
        id="email"
        name="email"
        type="email"
        required
        autoComplete="email"
        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
    </div>
  </div>
);
