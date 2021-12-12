import React from "react";
import modalStyles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

const Modal = (props) => {
    const escFunction = (event) => {
        if (event.keyCode === 27) {
            props.closeTheWindow();
        }
    }
    React.useEffect(() => {
        document.addEventListener("keydown", escFunction);
        return () => {
            document.removeEventListener("keydown", escFunction);
        }
    }, [escFunction])




    return ReactDOM.createPortal(
        <ModalOverlay onClose={props.closeTheWindow}>
            <div>
                <div className={modalStyles.header + ' mt-10 mr-10 ml-10'}>
                    <span className={modalStyles.title}>{props.title}</span>
                    <span onClick={props.closeTheWindow}><CloseIcon type="primary" /></span>
                </div>
                <div>
                {props.children}
                </div>
            </div>
        </ModalOverlay>,
        document.getElementById('root')
    )
}

export default Modal;

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element
}