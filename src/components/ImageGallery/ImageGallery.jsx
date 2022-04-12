import React from 'react';
import propTypes from 'prop-types';
import { ImageGalleryList } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <ImageGalleryList>
      {images.map(({ id, largeImageURL, webformatURL }) => (
        <ImageGalleryItem
          id={id}
          largeImage={largeImageURL}
          smalImage={webformatURL}
          key={id}
        />
      ))}
    </ImageGalleryList>
  );
};

ImageGallery.propTypes = {
  images: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.number.isRequired,
      largeImageURL: propTypes.string.isRequired,
      webformatURL: propTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;
