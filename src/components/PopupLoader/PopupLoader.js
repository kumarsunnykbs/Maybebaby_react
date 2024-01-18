import React from "react";
import Loading from "../../asset/image/loading.svg"
const PopupLoader = () =>{
    return(
        <>
     

        <img src={Loading} className="rotate" alt="loading" height="50px" width="50px" />
        </>
    )
}

export default PopupLoader