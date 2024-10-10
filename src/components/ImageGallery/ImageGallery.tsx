import React from "react";
import { PhotoItemProps } from "../Api/types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  photos: PhotoItemProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos }) => {
  return (
    <ul className={css.box}>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard
            photo={item.url}
            breed={
              item.breeds.length > 0 && item.breeds[0].name
                ? item.breeds[0].name
                : "Standart"
            }
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
