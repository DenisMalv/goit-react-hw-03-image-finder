import React, { Component } from 'react';
import { Item, Image } from './ImageGalleryItem.styled';
import propTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { smalImage, largeImage, id } = this.props;
    const { showModal } = this.state;

    return (
      <Item>
        <Image src={smalImage} alt="#" onClick={this.toggleModal} />
        {showModal && (
          <>
            <Modal onClose={this.toggleModal}>
              <img src={largeImage} alt="" id={id} />
            </Modal>
          </>
        )}
      </Item>
    );
  }
}

ImageGalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  largeImage: propTypes.string.isRequired,
  smalImage: propTypes.string.isRequired,
};

export default ImageGalleryItem;
