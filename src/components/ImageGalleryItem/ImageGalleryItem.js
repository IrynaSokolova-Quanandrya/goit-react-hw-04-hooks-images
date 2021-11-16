import React from "react";
import PropTypes from "prop-types";
import s from '../ImageGalleryItem/ImageGalleryItem.module.css'

function ImageGalleryItem({ webformatURL, tags, largeImageURL, onOpen, onGetImg }) {
    console.log({onOpen});
        return (
            <li className={s.ImageGalleryItem}
                onClick={() => onGetImg(largeImageURL, tags)}
            >
                <img
                    src={webformatURL}
                    alt={tags}
                    className={s.ImageGalleryItem__image}
                    showModal={onOpen}
                />
            </li>
        )
    }


ImageGalleryItem.propTypes = {
  onGetImg: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem



