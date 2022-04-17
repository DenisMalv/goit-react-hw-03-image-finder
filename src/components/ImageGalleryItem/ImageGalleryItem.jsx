import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';

const ImageGalleryItem = ({ smalImage, id, modalWindow, modalObject }) => {
  return (
    <Item>
      <Image
        src={smalImage}
        alt="#"
        onClick={() => {
          modalWindow();
          modalObject(id);
        }}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  largeImage: propTypes.string.isRequired,
  smalImage: propTypes.string.isRequired,
};

export default ImageGalleryItem;
