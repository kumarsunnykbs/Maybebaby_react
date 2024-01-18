import React from "react";
import { Modal, Button } from "react-bootstrap";
import PopupLoader from "../../components/PopupLoader/PopupLoader";

const BabyImagesPopup = (props) => {
  return (
    <>
      <Modal show={props.babyPopup} >
    <PopupLoader />

        <h4 >
          <div className="w-100 text-center">{props.title}</div>
        </h4>

        <Modal.Body>
          <p className="modalText">Our Artificial Intelligence is now generating your image.
  Please keep this page open.
  Estimated time <br /> to completion: Up to 10-min <br /> Your patience is appreciated.</p>

        </Modal.Body>

      </Modal>
     
    </>
  )
}

export default BabyImagesPopup