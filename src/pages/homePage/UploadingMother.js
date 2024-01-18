import React from "react";
import {Modal, Button} from "react-bootstrap";
import PopupLoader from "../../components/PopupLoader/PopupLoader";

const UploadingMother = (props) =>{
    return(
        <>
          <Modal show={props.showMotherPopup} >
          <PopupLoader />

      <h4 >
        <div className="w-100 mt-2 text-center">{props.title}</div>
      </h4>
      <Modal.Body>
      <p className="modalText"> Our Artificial Intelligence is now
  analyzing and processing
  both of your images…
  Please keep this page open
  Estimated time left: 1-2mins</p>
          </Modal.Body>
    
    </Modal>
        </>
    )
}

export default UploadingMother