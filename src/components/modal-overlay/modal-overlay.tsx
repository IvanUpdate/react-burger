import React, {FC} from "react";
import overlayStyles from './modal-overlay.module.css';

interface IModalOverlayProps {
    onClose: ()=>void;
}

const  ModalOverlay: FC<IModalOverlayProps> = ({onClose}) => {
    return (
        <div className={overlayStyles.main} onClick={onClose}>
        </div>
    )
};

export default  ModalOverlay;