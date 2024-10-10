import React from "react";
import { PhotoItemProps } from "../Api/types";
import ImageCard from "../ImageCard/ImageCard";

interface ImageGalleryProps {
  photos: PhotoItemProps[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ photos }) => {
  return (
    <ul>
      {photos.map((item) => (
        <li key={item.id}>
          <ImageCard
            photo={item.url}
            breed={
              item.breeds.length > 0 && item.breeds[0].name
                ? item.breeds[0].name
                : "No name"
            }
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
