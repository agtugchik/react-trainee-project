import React from 'react';
import { Image } from 'types/unsplash-image';

interface Props {
  photo: Image;
}

export const Photo = ({ photo }: Props) => (
  <div>
    <img
      className="object-cover object-center w-full h-80 max-w-full rounded-lg"
      src={photo.cover_photo.urls.small}
      alt={photo.title}
    />
  </div>
);
