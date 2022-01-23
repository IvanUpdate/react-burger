import React from "react";
import modalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

const Modal = (props) => {

    React.useEffect(() => {
        const escFunction = (event) => {
            if (event.key === "Escape") {
                props.closeTheWindow();
            }
        };
        document.addEventListener("keydown", escFunction);
        return () => {
            document.removeEventListener("keydown", escFunction);
        }
    }, [props.closeTheWindow])


    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={props.closeTheWindow}/>
            <div className={modalStyles.main}>
                <div className={modalStyles.header + ' mt-10 mr-10 ml-10'}>
                    <div className={modalStyles.title}>{props.title}</div>
                    <div onClick={props.closeTheWindow}><CloseIcon type="primary"/></div>
                </div>
                <div>
                    {props.children}
                </div>
            </div>
        </>,
        document.getElementById('modal-root')
    )
};

export default Modal;

Modal.propTypes = {
    closeTheWindow: PropTypes.func.isRequired,
    children: PropTypes.element
};