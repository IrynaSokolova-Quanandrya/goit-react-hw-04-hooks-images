import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import s from "../Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
     
    componentDidMount() {
        console.log('componentDidMount');
         window.addEventListener('click', this.onCloseByClick)
         window.addEventListener('keydown', this.onCloseByKedown)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
         window.removeEventListener ('keydown', this.onCloseByKedown)
    }
    onCloseByClick = (e) => {
        if (e.target.nodeName === "DIV") {
            this.props.onClose()
        }
    }
    onCloseByKedown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }
    render() {
        const { onGetImg, onClose } = this.props
        return createPortal(
          
            <div className={s.Overlay} onClose={onClose}>
                <div className={s.Modal}>
                    <img
                        src={onGetImg.img}
                    alt={onGetImg.alt} 
                    />
                </div>
            </div>,
            modalRoot,
        )
    }
    
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalImage: PropTypes.object.isRequired,
};

