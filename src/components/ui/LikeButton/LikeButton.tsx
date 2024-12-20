import React, { memo, useState } from 'react';
import LikeIcon from 'assets/icons/like.svg';
import { LikedImage } from 'types/unsplash-image';

interface Props {
  photo: LikedImage;
}

export const LikeButton = memo(({ photo }: Props) => {
  const [isLikedButton, setIsLikedButton] = useState(photo.isLiked);
  const onClickHandler = () => {
    localStorage.setItem(String(photo.id), String(!isLikedButton));
    setIsLikedButton(!isLikedButton);
  };

  return (
    <button
      onClick={onClickHandler}
      type="button"
      className={`text-blue-700 border border-blue-700 
        hover:bg-blue-700 hover:text-slate-50 
        rounded-full p-2.5 inline-flex items-center 
        absolute top-2 right-2 
        ${isLikedButton ? 'bg-blue-700 text-slate-50' : ''}
        `}
    >
      <LikeIcon />
    </button>
  );
});
