import React from "react";
import css from "./ImageCard.module.css";
import styled from "styled-components";

const DivItem = styled.div`
  background: ${(props) => props.theme.bodySecondary};
`;

interface ImageCardProps {
  photo: string;
  breed: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ photo, breed }) => {
  console.log(photo);
  console.log(breed);

  return (
    <>
      <DivItem className={css.item}>
        <img className={css.img} src={photo} alt={breed} />
        <p className={css.itemText}>Name: {breed} cat</p>
      </DivItem>
    </>
  );
};
export default ImageCard;
