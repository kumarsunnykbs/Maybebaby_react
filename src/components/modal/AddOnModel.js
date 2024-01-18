import React, {useEffect, useRef} from "react";
import { Modal } from "react-bootstrap";

const AddOnPaymentModal = ({ showHide, hide, oneTimePaymentAddOn }) => {

    return (
        <>
            <Modal show={showHide}  backdrop="static"  >
                <h4 >
                    <div className="w-100 text-center">For this result you have to buy a add-on of $14.99</div>
                </h4>
                <Modal.Body>
                  <div className="addonBtn">
                  <button className="openBtn" onClick={() => oneTimePaymentAddOn()}>Proceed</button>
                    <button className="closeBtn" onClick={() => hide()}>Cancel</button>
                  </div>
                </Modal.Body>
            </Modal>
        </>
    )

}




export default AddOnPaymentModal