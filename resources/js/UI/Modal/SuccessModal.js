import React from 'react';
import './modal.css';
const SuccessModal = (props) => {
    return (
        <div className="SuccessPopUp-class">
            <p>{props.msg}</p>
        </div>
    );
}
 
export default SuccessModal;