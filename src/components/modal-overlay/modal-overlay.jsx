import React from "react";
import overlayStyles from './modal-overlay.module.css';
import PropTypes from "prop-types";

export default function ModalOverlay(props) {
    return (
        <div className={overlayStyles.main} onClick={props.closeTheModal}>
        </div>
    )
};

ModalOverlay.propTypes = {
    closeTheModal: PropTypes.func.isRequired
}