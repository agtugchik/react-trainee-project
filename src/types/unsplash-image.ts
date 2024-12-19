export interface Image {
  id: string;
  cover_photo: {
    urls: {
      raw: string;
      full: string;
      regular: string;
      small: string;
      thumb: string;
    };
  };
}
