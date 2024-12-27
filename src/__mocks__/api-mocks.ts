export const unsplashJsonMock = {
  results: [
    {
      id: '1xzSeJRJEDI',
      description: 'a grassy field with trees in the background',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
    },
    {
      id: 'ryQ-GmDsHhE',
      description: '100 us dollar bill',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
    },
    {
      id: 'ucvkbYo7VAw',
      description: 'time lapse photography of vehicles passing on roads',
      urls: {
        raw: '',
        full: '',
        regular: '',
        small: '',
        thumb: '',
        small_s3: '',
      },
    },
  ],
};

export const unsplashMockedPhoto = {
  id: 1,
  description: 'someTitle',
  isLiked: true,
  urls: {
    raw: 'somePhoto',
    full: 'somePhoto',
    regular: 'somePhoto',
    small: 'somePhoto',
    thumb: 'somePhoto',
  },
};

export const fetchMock: (jsonResponse: object) => void = (jsonResponse) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(jsonResponse),
    })
  ) as jest.Mock;
};
