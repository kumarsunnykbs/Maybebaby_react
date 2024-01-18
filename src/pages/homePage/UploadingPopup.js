import React from "react";
import {Modal, Button} from "react-bootstrap";

const UploadingPopup = (props) =>{
    return(
        <>
          <Modal show={props.showPopup} onHide={props.handleCloseModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
    <p>{props.father}</p>
       
      </Modal.Body>
    
    </Modal>
        </>
    )
}

export default UploadingPopup