import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ModalContainer = ({ show, handleClose, children }) => {
  return (
    <Modal show={show} onHide={handleClose} dialogClassName='test-class centered modal-xl'>
      <Modal.Header closeButton>
        <Modal.Title>Create An Account</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       {children}
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};

export default ModalContainer;



// import React from 'react';
// import "./ModalContainer.css"
// const ModalContainer = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         {children}
//         <button onClick={onClose}>Close</button>
//       </div>
//     </div>
//   );
// };

// export default ModalContainer;
