const baseUrl = 'https://api.unsplash.com';

interface Image {
  id: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
}

export const getRandomPhotos = async (count = 30): Promise<Image[]> => {
  const response = await fetch(
    `${baseUrl}/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}&count=${count}`
  );
  return response.json();
};
