const baseUrl = 'https://api.unsplash.com';

interface Image {
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

export const getPhotos = async (count = 0): Promise<Image[]> => {
  const response = await fetch(
    `${baseUrl}/collections?client_id=${process.env.UNSPLASH_ACCESS_KEY}&page=${count}&per_page=12`
  );
  return response.json();
};
