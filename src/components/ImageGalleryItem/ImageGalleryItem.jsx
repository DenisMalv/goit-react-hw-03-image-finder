import React, { Component} from "react";
import css from './ImageGalleryItem.module.css'
import propTypes from "prop-types";
import Modal from "components/Modal/Modal";

// const ImageGalleryItem = ({ id,LargeImage,smalImage}) => {
//     return (
//         <li className={css.ImageGalleryItem}>
//             <img className={css.ImageGalleryItem__image} src={smalImage} alt="#" />
//             <Modal id={ id } srcImage={ LargeImage } />
//         </li>
//     )
// }

class ImageGalleryItem extends Component {
    state = {
        showModal: false
    }

    toggleModal = () => {
            this.setState(({ showModal })=>({showModal: !showModal}))
    }

    render() {
        console.log(this.state);
        console.log(this.props.largeImage);

        return (
        <li className={css.ImageGalleryItem} >
            <img className={css.ImageGalleryItem__image} src={this.props.smalImage} alt="#" onClick={this.toggleModal}/>
            {this.state.showModal &&
                    <>
                    <Modal onClose={this.toggleModal}>
                        <img src={this.props.largeImage} alt="" id={this.props.id} />
                    </Modal>
                </>
            }

        </li>
        )
    }
}

ImageGalleryItem.propTypes = {
 
}

export default ImageGalleryItem