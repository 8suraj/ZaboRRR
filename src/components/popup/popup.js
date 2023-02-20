import React from 'react';
import './popup.css';

function Popup({ setOpenModal, message }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="title">
          <h1>{message}</h1>
        </div>

        <div className="footer">
          <button
            type="submit"
            onClick={() => {
              setOpenModal(false);
            }}
            id="continueBtn"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Popup;
