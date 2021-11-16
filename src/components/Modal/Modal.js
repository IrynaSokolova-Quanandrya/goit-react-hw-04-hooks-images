import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";
import s from "../Modal/Modal.module.css";

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, onGetImg}) {
     
    useEffect(() => {
        window.addEventListener('click', onCloseByClick)
        window.addEventListener('keydown', onCloseByKedown)
        return (
             window.removeEventListener ('keydown', onCloseByKedown)
        )
    },[])
   const onCloseByClick = (e) => {
        if (e.target.nodeName === "DIV") {
            onClose()
        }
    }
   const onCloseByKedown = (e) => {
        if (e.code === 'Escape') {
            onClose()
        }
    }
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onGetImg: PropTypes.object.isRequired,
};


export default Modal