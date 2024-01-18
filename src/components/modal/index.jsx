// import { Modal } from 'react-responsive-modal';
import { useState } from 'react';

const ModalComponent = () => {
    const [open, setOpen] = useState(false)
    console.log("innnnnnnnnn")
    return <div>
        <h1>dvfgfgfgf</h1>
        {/* <Modal open={open} onClose={() => setOpen(false)} center>
            <p>First modal</p>
            bvmhnjghki
        </Modal> */}
        <button onClick={() => setOpen(true)}>
            opennn
        </button>
    </div>
}
export default ModalComponent;