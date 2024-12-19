const baseUrl = 'https://api.unsplash.com';

export const getRandomPhotos = async (count = 30) => {
  const response = await fetch(
    `${baseUrl}/photos/random?client_id=${process.env.UNSPLASH_ACCESS_KEY}&count=${count}`
  );
  return response.json();
};
