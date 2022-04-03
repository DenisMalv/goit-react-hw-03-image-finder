import React from "react";
import css from './ImageGalleryItem.module.css'
import propTypes from "prop-types";

const ImageGalleryItem = ({ id,LargeImage,smalImage}) => {
    return (
        <li className={css.ImageGalleryItem}>
            <img className={css.ImageGalleryItem__image} src={smalImage} alt="#" />
        </li>
    )
}

ImageGalleryItem.propTypes = {
 
}

export default ImageGalleryItem