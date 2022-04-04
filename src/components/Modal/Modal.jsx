import React, {Component} from "react";
import { createPortal} from 'react-dom'
import propTypes from "prop-types";
import css from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root');

// const Modal = ({children}) => {
//     return createPortal(
//         <div className={css.Overlay}>
//             <div className={css.Modal}>
//                 { children }
//             </div>
//         </div>,
//         modalRoot
//         )
// }
class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    }
    componentWillUnmount() {
        window.removeEventListener('keydown',this.handleKeyDown)
    }

    handleKeyDown = (e) => {
            if (e.code === 'Escape') {
                console.log('object');
                this.props.onClose()
            }
    }

    handleBackDrop = e => {
                console.log(e.currentTarget);
        console.log(e.target);
        if (e.currentTarget === e.target) {
            console.log('backdrop');

            this.props.onClose()
        }
    }
    
    render() {
        return createPortal(
        <div className={css.Overlay} onClick={this.handleBackDrop}>
            <div className={css.Modal}>
                { this.props.children }
            </div>
        </div>,
        modalRoot
        )
    }
}

Modal.propTypes = {

    }

export default Modal