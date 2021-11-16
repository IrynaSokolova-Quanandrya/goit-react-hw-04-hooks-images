import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';
import s from '../ImageGallery/ImageGallery.module.css';

function ImageGallery({ images,  onGetImg, showModal}) {
   console.log({showModal});
      return (
      
      <ul className={s.ImageGallery}>
        {
         images.map(({id, webformatURL, tags, largeImageURL}) =>
           <ImageGalleryItem
             key={id}
             webformatURL={webformatURL}
             tags={tags}
             largeImageURL={largeImageURL}
             onOpen={showModal}
             onGetImg={onGetImg}

           />
           
          )}
      </ul>
    )
  }
  
ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  onGetImg: PropTypes.func.isRequired,
};

export default ImageGallery
