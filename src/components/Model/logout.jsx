import React from 'react';
import './logout.css'; // Create a CSS file for styling if needed

const Modal = ({ isOpen, onClose, title, message, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>{message}</h1>
                <div className="modal-header">
                    <button onClick={onClose} className="btn-close">×</button>
                </div>
                <div className="modal-body">{children}</div>

            </div>
        </div>
    );
};

export default Modal;
