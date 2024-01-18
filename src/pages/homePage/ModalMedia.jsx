// import 'react-responsive-modal/styles.css'
// import { Modal } from 'react-responsive-modal'
// import { useState } from 'react'
// import SocialMedia from './SocialMedia'
// import arrow_left from "../../asset/image/arrow-circle-left.svg"
// import arrow_right from "../../asset/image/arrow-circle-right.svg"

// const ModalMedia = (props) => {
//     const [selected, setSelected] = useState(0);

//     const changeImageHandler = (isNext) => {
//         console.log("props.imageUploadResponse1",props.imageUploadResponse1)
//         if (isNext) {
//             setSelected(prev => {
//                 return prev === props.imageUploadResponse1.length -1 ? 0 : prev + 1
//             })
//         } else {
//             setSelected(prev => {
//                 return prev === 0 ? props.imageUploadResponse1.length - 1 : prev - 1
//             })
//         }
//     }

//     return <>
//         <Modal open={true} onClose={() => props.setOpenModal(false)} center>
       

// <div className='row'>
//     <div className='col-md-6'>
//     <div className='image-sec'>
//                         <img src={props.imageUploadResponse1[selected]} alt={`image${selected}`} className='mediaImages' />
//                         <div className='slider-btn'>
//                             {props.imageUploadResponse1.length > 1 && <>
//                                 <button className="slider-prev" onClick={() => changeImageHandler()}><img src={arrow_left} alt='left-arrow' /> Previous</button>
//                                 <button className="slider-next" onClick={() => changeImageHandler(true)}>Next <img src={arrow_right}  alt='right-arrow' /></button>
//                             </>}
//                         </div>
//                     </div>
//     </div>
//     <div className='col-md-6'>

//     <div className='download-sec'>
//                         <a href={props.imageUploadResponse1[selected]} className="slider-download" download>Download</a>
                        
//                         <div className='share-slider'>Share On </div>
//                         <div className='ml-2 mt-2'>
//                             <SocialMedia src={props.imageUploadResponse1[selected]} />
//                         </div>
//     </div>
//     </div>
// </div>

//         </Modal>

//     </>
// }
// export default ModalMedia;



import 'react-responsive-modal/styles.css'
import { Modal } from 'react-responsive-modal'
import { useState } from 'react'
import SocialMedia from './SocialMedia'
import arrow_left from "../../asset/image/arrow-circle-left.svg"
import arrow_right from "../../asset/image/arrow-circle-right.svg"

const ModalMedia = (props) => {
    const [selected, setSelected] = useState(0);

    const changeImageHandler = (isNext) => {
        if (isNext) {
            setSelected(prev => {
                return prev === props.imageUploadResponse1.length - 1 ? prev : prev + 1;
            });
        } else {
            setSelected(prev => {
                return prev === 0 ? prev : prev - 1;
            });
        }
    };

    const isLastItem = selected === props.imageUploadResponse1.length - 1;
    const isFirstItem = selected === 0;

    return (
        <>
            <Modal open={true} onClose={() => props.setOpenModal(false)} center>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='image-sec'>
                            <img src={props.imageUploadResponse1[selected]} alt={`image${selected}`} className='mediaImages' />
                            <div className='slider-btn'>
                                {props.imageUploadResponse1.length > 1 && (
                                    <>
                                        <button
                                            className={`slider-prev${isFirstItem ? ' disabled' : ''}`}
                                            onClick={() => changeImageHandler()}
                                            disabled={isFirstItem}
                                        >
                                            <img src={arrow_left} alt='left-arrow' /> Previous
                                        </button>
                                        <button
                                            className={`slider-next${isLastItem ? ' disabled' : ''}`}
                                            onClick={() => changeImageHandler(true)}
                                            disabled={isLastItem}
                                        >
                                            Next <img src={arrow_right} alt='right-arrow' />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='download-sec'>
                            <a href={props.imageUploadResponse1[selected]} className="slider-download" download>Download</a>
                            <div className='share-slider'>Share On</div>
                            <div className='ml-2 mt-2'>
                                <SocialMedia src={props.imageUploadResponse1[selected]} />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}

export default ModalMedia;

