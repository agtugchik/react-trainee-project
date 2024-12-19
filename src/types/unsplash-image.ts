export interface Image {
  id: number;
  title: string;
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
