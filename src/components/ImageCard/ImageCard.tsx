import React from "react";

interface ImageCardProps {
  photo: string;
  breed: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, breed = "Normal" }) => {
  console.log(photo);
  console.log(breed);

  return (
    <>
      <div>
        <img src={photo} alt={breed} />
        <p>{breed}</p>
      </div>
    </>
  );
};
export default ImageCard;
