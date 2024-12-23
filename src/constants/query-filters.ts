type OrderByTypes = 'latest' | 'relevant';
type ContentFilterType = 'low' | 'high';
type ColorType =
  | 'black_and_white'
  | 'black'
  | 'white'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'purple'
  | 'magenta'
  | 'green'
  | 'teal'
  | 'blue';
type OrientationType = 'landscape' | 'portrait' | 'squarish';

const OrderByOptions: { [key: string]: OrderByTypes } = {
  Latest: 'latest',
  Relevant: 'relevant',
};
const ContentFilterOptions: { [key: string]: ContentFilterType } = {
  Low: 'low',
  High: 'high',
};
const ColorOptions: { [key: string]: ColorType } = {
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
const OrientaitionOptions: { [key: string]: OrientationType } = {
  Landscape: 'landscape',
  Portrait: 'portrait',
  Squarish: 'squarish',
};

export const OrderByValues = {
  name: 'order_by',
  baseOption: 'Choose order type',
  options: OrderByOptions,
};
export const ContentFilterValues = {
  name: 'content_filter',
  baseOption: 'Choose content filter',
  options: ContentFilterOptions,
};
export const ColorValues = {
  name: 'color',
  baseOption: 'Choose color',
  options: ColorOptions,
};
export const OrientationValues = {
  name: 'orientation',
  baseOption: 'Choose orientation',
  options: OrientaitionOptions,
};
