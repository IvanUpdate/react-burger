import React from "react";
import overlayStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay(props) {
    return (
        <div className={overlayStyles.main} onClick={props.onClose}>
        </div>
    )
};

ModalOverlay.propTypes = {
    onClose: PropTypes.func
}