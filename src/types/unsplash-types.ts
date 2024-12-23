export interface Image {
  id: number;
  title: string;

  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}
export interface LikedImage extends Image {
  isLiked: boolean;
}

export interface SearchResponse {
  results: Image[];
}

export type OrderByType = 'latest' | 'relevant';
export type ContentFilterType = 'low' | 'high';
export type ColorType =
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
export type OrientationType = 'landscape' | 'portrait' | 'squarish';
