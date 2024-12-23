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
