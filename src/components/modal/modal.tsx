import React, {FC} from "react";
import modalStyles from './modal.module.css';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from "../modal-overlay/modal-overlay";
import ReactDOM from 'react-dom';

interface IModalProps {
    closeTheWindow: () => void;
    title?: string;
}

const Modal: FC<IModalProps> = ({closeTheWindow, title, children}) => {

    React.useEffect(() => {
        const escFunction = (event: { key: string; }) => {
            if (event.key === "Escape") {
                closeTheWindow();
            }
        };
        document.addEventListener("keydown", escFunction);
        return () => {
            document.removeEventListener("keydown", escFunction);
        }
    }, [closeTheWindow]);


    return ReactDOM.createPortal(
        <>
            <ModalOverlay onClose={closeTheWindow}/>
            <div className={modalStyles.main}>
                <div className={modalStyles.header + ' mt-10 mr-10 ml-10'}>
                    <div className={modalStyles.title}>{title}</div>
                    <div onClick={closeTheWindow}><CloseIcon type="primary"/></div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('modal-root')!
    )
};

export default Modal;
