import React from "react";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  photo: string;
  breed: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, breed }) => {
  console.log(photo);
  console.log(breed);

  return (
    <>
      <div className={css.item}>
        <img className={css.img} src={photo} alt={breed} />
        <p>Name: {breed} cat</p>
      </div>
    </>
  );
};
export default ImageCard;
