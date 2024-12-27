import { ColorType, ContentFilterType, OrderByType, OrientationType } from 'types/unsplash-types';

const orderByOptions: { [key: string]: OrderByType } = {
  Latest: 'latest',
  Relevant: 'relevant',
};
const contentFilterOptions: { [key: string]: ContentFilterType } = {
  Low: 'low',
  High: 'high',
};
const colorOptions: { [key: string]: ColorType } = {
  'Black and White': 'black_and_white',
  Black: 'black',
  White: 'white',
  Yellow: 'yellow',
  Orange: 'orange',
  Red: 'red',
  Purple: 'purple',
  Magenta: 'magenta',
  Green: 'green',
  Teal: 'teal',
  Blue: 'blue',
};
const orientaitionOptions: { [key: string]: OrientationType } = {
  Landscape: 'landscape',
  Portrait: 'portrait',
  Squarish: 'squarish',
};

export const orderByValues = {
  name: 'order_by',
  baseOption: 'Choose order type',
  options: orderByOptions,
};
export const contentFilterValues = {
  name: 'content_filter',
  baseOption: 'Choose content filter',
  options: contentFilterOptions,
};
export const colorValues = {
  name: 'color',
  baseOption: 'Choose color',
  options: colorOptions,
};
export const orientationValues = {
  name: 'orientation',
  baseOption: 'Choose orientation',
  options: orientaitionOptions,
};
