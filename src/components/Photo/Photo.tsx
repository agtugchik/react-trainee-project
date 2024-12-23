import { LikeButton } from 'components/ui/LikeButton';
import React from 'react';
import { LikedImage } from 'types/unsplash-image';

interface Props {
  photo: LikedImage;
}

export const Photo = ({ photo }: Props) => (
  <div className="relative">
    <img
      className="object-cover object-center w-full h-80 max-w-full rounded-lg"
      src={photo.urls.small}
      alt={photo.title}
    />
    <LikeButton photo={photo} />
  </div>
);
