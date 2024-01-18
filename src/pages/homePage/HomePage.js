import axios from "axios";
import React, { useState, useEffect } from "react";
import "./HomePage.css";
import howworks from "../../asset/image/hworks.png";
import fatherUpload from "../../asset/image/fatherUpload.png";
import childUpload from "../../asset/image/childUpload.png";
import genrateimg from "../../asset/image/share.png";
import saveimg from "../../asset/image/save.png";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import { useRef } from "react";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import MainHeader from "../../components/topbar/MainHeader";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import doll from "../../asset/image/doll.png";
import { updateOneTimePaymentHitCountRequest } from "../../redux/plan/actions";
import ModalMedia from "./ModalMedia";
import { AddFamilyHistoryApi } from "../../redux/api/api";
// import UploadingPopup from "./UploadingPopup";
import UploadingMother from "./UploadingMother";
import BabyImagesPopup from "./BabyImagesPopup";
import NoteSection from "../../components/NoteSection/NoteSection";
import {
  setFatherImage,
  setMotherImage,
  setAllBabyImages,
  setFatherImageBlob,
  setMotherImageBlob,
} from "../../redux/familyData/Action";
import AddOnPaymentModal from "../../components/modal/AddOnModel";
import {
  BASE_URL,
  getToken,
  ALIGN_API_URL,
  BOY_API_URL,
  GIRL_API_URL,
  getCorrectImage,
} from "../../uility/common";
import PopupLoader from "../../components/PopupLoader/PopupLoader";
const HomePage = () => {
  const dadPhotoRef = useRef();
  const momPhotoRef = useRef();
  const navigate = useNavigate();
  const disptach = useDispatch();
  const planState = useSelector((state) => state.plan);
  const familydata = useSelector((state) => state.familydata);
  const [dadImg, setDadImg] = useState(undefined);
  const fatherImage = useSelector((state) => state.imageReducer.fatherImage);
  const motherImage = useSelector((state) => state.imageReducer.motherImage);
  const childImages = useSelector((state) => state.imageReducer.childImages);
  const fatherBlob = useSelector((state) => state.imageReducer.fatherBlob);
  console.log(fatherBlob, "fatherBlobt");
  const motherBlob = useSelector((state) => state.imageReducer.motherBlob);
  console.log(fatherImage, "sdsssssssssssssss", familydata);

  const [momImg, setMomImg] = useState(undefined);
  const [gender, setGender] = useState("boy");
  // const [age, setAge] = useState("20");
  const [selectedFile, setSelectedFile] = useState(fatherBlob);
  const [selectedFile1, setSelectedFile1] = useState(motherBlob);
  const [imageUploadResponse1, setImageUploadResponse1] = useState([]);
  const [imageUploadResponse2, setImageUploadResponse2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showHideAddOn, setShowHideAddOn] = useState(false);
  const [isImgLoading, setIsImgLoading] = useState({
    dad: false,
    mother: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const [openModalDefault, setOpenModalDefault] = useState(false);

  // const [showPopup, setShowPopup] = useState(false)
  const [showMotherPopup, setShowMotherPopup] = useState(false);
  const [babyPopup, setBabyPopup] = useState(false);
  const [firstImageUploading, setFirstImageUploading] = useState(false);
  const [secondImageUploading, setSecondImageUploading] = useState(false);
  // const [isvisible , setIsVisible] = useState(false)

  // const [mothertext, setMothertext] =
  //   useState(`Our Artificial Intelligence is now
  // analyzing and processing
  // both of your images…
  // Please keep this page open
  // Estimated time left: 1-2mins`);

  // const [babytext, setBabytext] =
  //   useState(`Our Artificial Intelligence is now generating your image.
  // Please keep this page open.
  // Estimated time to completion: Up to 10-min and Your patience is appreciated.`);



  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(planState.hitLimit);
  }, [planState.hitLimit, planState.initialHitLimit]);

  const handleCheckboxChange = (event) => {
    const selectedGender = event.target.value;
    setGender(selectedGender);
  };

  const Sliderdata = [
    { image: doll },
    { image: doll },
    { image: doll },
    { image: doll },
    { image: doll },
    { image: doll },
  ];

  const dsetting = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 1,
  };

  console.log(dadImg, "dadImg");
  console.log("planState", planState);

  console.log(familydata, "familydata");
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      // setSelectedFile('');
      disptach(setFatherImageBlob(null));
      return;
    }
    alignedRequestHandler(e.target.files[0], true);
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile(e.target.files[0]);
    disptach(setFatherImageBlob(e.target.files[0]));
  };
  const onSelectFile1 = (e) => {
    if (!e.target.files || (e.target.files.length === 0 && !setSelectedFile)) {
      // setSelectedFile1('');
      // setDadImg("")
      disptach(setFatherImage(""));
      disptach(setMotherImageBlob(null));
      return;
    }
    alignedRequestHandler(e.target.files[0]);
    // I've kept this example simple by using the first image instead of multiple
    setSelectedFile1(e.target.files[0]);
    disptach(setMotherImageBlob(e.target.files[0]));
  };

  const alignedRequestHandler = async (imageFile, isDad = false) => {
    const isImgValue = isDad ? "dad" : "mother";
    setIsImgLoading((prev) => {
      return { ...prev, [isImgValue]: true };
    });
    console.log("imageFile", imageFile);
    const newForm = new FormData();
    let endPoint = `${ALIGN_API_URL}/fatherallign`;
    if (isDad) {
      setFirstImageUploading(true);
      // setShowPopup(true)
      newForm.append("father", imageFile);
    } else {
      endPoint = `${ALIGN_API_URL}/motherallign`;
      newForm.append("mother", imageFile);
      // setShowMotherPopup(true)
      setSecondImageUploading(true);
    }
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    try {
      const { data } = await axios.post(`${endPoint}`, newForm, config);

      if (data && data.Url && Array.isArray(data.Url) && data.Url.length) {
      console.log("datadatadata", data);
      var imageUrl = getCorrectImage(data.Url[0])
        if (isDad) {
          // setDadImg(data.Url[0]);
          
          console.log(imageUrl, "9999999999999");
          disptach(setFatherImage(imageUrl));
          // disptach(() =>dadImg)
        } else {
          // setMomImg(data.Url[0]);
          // disptach(() => momImg)
          disptach(setMotherImage(imageUrl));
        }
      } else {
        if (isDad) {
          setDadImg("");
        } else {
          setMomImg("");
        }
        toast.error("Something went wrong. Please upload image again", {
          position: toast.POSITION.TOP_LEFT,
        });
      }
    } catch (err) {
      toast.error("Something went wrong. Please upload image again", {
        position: toast.POSITION.TOP_LEFT,
      });
      if (isDad) {
        setDadImg("");
        setSelectedFile("");
        // disptach(setSelectedFile(null))
      } else {
        setMomImg("");
        // disptach(setSelectedFile1(null))
        setSelectedFile1("");
      }
    } finally {
      // setShowPopup(false)
      // setShowMotherPopup(false)
      if (isDad) {
        setFirstImageUploading(false);
      } else {
        setSecondImageUploading(false);
      }
    }

    setIsImgLoading((prev) => {
      return { ...prev, [isImgValue]: false };
    });
  };

  const uploadImageHandler = async () => {
    if (!planState.isPlanActive) {
      toast.error("You don't have any active plan", {
        position: toast.POSITION.TOP_LEFT,
      });
      navigate("/subscription");
      return;
    }
    if (planState.planType === "one_time" && planState.hitLimit === 0) {
      console.log(">>>>>>>>", planState);
      if (planState.add_on === true) {
        // toast.error("You have to buy add-on for this", {
        //   position: toast.POSITION.TOP_LEFT,
        // });
        setShowHideAddOn(true);
        // navigate('/subscription')
        return;
      } else {
        toast.error("Your one time payment plan is expired.", {
          position: toast.POSITION.TOP_LEFT,
        });
        navigate("/subscription");
        return;
      }
    }
    if (
      !selectedFile ||
      !selectedFile1 ||
      isImgLoading?.dad ||
      isImgLoading?.mother
    ) {
      toast.error("Please upload both dad and mom photo ", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
    let endPoint =
      gender === "boy"
        ? `${BOY_API_URL}/${"boy"}`
        : `${GIRL_API_URL}/${"girl"}`;
    if (selectedFile && selectedFile1) {
      // setIsLoading(true);
      // setIsVisible(true)
      setBabyPopup(true);
      const newForm = new FormData();
      // if (["8","11","14","20"].includes(age) && planState.planType === 'one_time') {
      newForm.append("father", selectedFile);
      newForm.append("mother", selectedFile1);

      disptach(setFatherImageBlob(null));
      disptach(setMotherImageBlob(null));

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          // "Access-control-core-region": "*"
        },
      };
      try {
        const response = await axios.post(endPoint, newForm, config);

        console.log("resss", response);

        if (response && response.data.Url) {
          if (
            Array.isArray(response.data.Url) &&
            response.data.Url.length > 0
          ) {
            const arr = response.data.Url;
            console.log("arrarr", arr);
            const newArr = arr.map((ele) => {
              return ele.split("--")[1];
            });
            console.log("arrarr newArr", newArr);
            let newArrData = [];
            newArr.forEach((ele, i) => {
              let index = Number(ele) - 1;
              newArrData[index] = arr[i];
            });
            console.log("arrarr newArrData", newArrData);

            let newImageArr = newArrData.filter((ele) => {
              if (ele) {
                return true;
              }
            });
            console.log("arrarr before newImageArr", newImageArr);
            newImageArr = newImageArr.reverse();
            newImageArr = newImageArr.map(item => getCorrectImage(item));
            console.log("arrarr after newImageArr", newImageArr);
            // setImageUploadResponse1(newImageArr)
            disptach(setAllBabyImages(newImageArr));
            if (planState.planType === "one_time") {
              disptach(updateOneTimePaymentHitCountRequest());
            }

            // call api for add family history
            await AddFamilyHistoryApi({
              father_image: dadImg,
              mother_image: momImg,
              child_images: newImageArr,
            });

            // disptach action for add family data
            // disptach(setAllFamilyImages({
            //   fatherImage: dadImg,
            //   motherImage: momImg,
            //   childImages: newImageArr,
            // }))

            // get father ,mother  , child images from store
            // add redux persist in store.js
            // https://blog.logrocket.com/persist-state-redux-persist-redux-toolkit-react/
            let imageUrl = response.data.Url[0];
            let tag = document.createElement("a");
            tag.href = imageUrl;
            tag.download = `image${Date.now()}`;
            document.body.appendChild(tag);
            tag.click();
            document.body.removeChild(tag);
            console.log("resssresss 2", response.data.Url.length);
            if (response.data.Url.length === 2) {
              console.log("resssresss 222", response.data.Url[1]);
              let tag2 = document.createElement("a");
              let imageUrl2 = response.data.Url[1];
              tag2.href = imageUrl2;
              tag2.download = `image2${Date.now()}`;
              document.body.appendChild(tag2);
              tag2.click();
              document.body.removeChild(tag2);
            }
          } else {
            if (response.data.Url) {
              setImageUploadResponse1(JSON.stringify([response.data.Url]));
              if (planState.planType === "one_time") {
                disptach(updateOneTimePaymentHitCountRequest());
                let imageUrl = response.data.Url;
                let tag = document.createElement("a");
                tag.href = imageUrl;
                tag.download = `image${Date.now()}`;
                document.body.appendChild(tag);
                tag.click();
                document.body.removeChild(tag);
              }
            }
          }
        }
        setIsLoading(false);
        setBabyPopup(false);
      } catch (err) {
        setBabyPopup(false);
        setIsLoading(false);
        // alert("Something went wrong. Please try again!");
      }
    }
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var setting = {
    dots: true,
  };

  //Show popup when father and mother image is uploaded
  useEffect(() => {
    console.log(firstImageUploading, secondImageUploading, "image.png");
    if (firstImageUploading && secondImageUploading) {
      setShowMotherPopup(true);
      // setIsVisible(true)
      // setIsLoading(true)
    } else if (!firstImageUploading && !secondImageUploading) {
      setShowMotherPopup(false);
      // setIsLoading(false)
    }
  }, [firstImageUploading, secondImageUploading]);
  const [updateImage, setupdateImage] = useState(false)

  useEffect(() => {
    if(updateImage){
      setDadImg(fatherImage);
      setMomImg(motherImage);
      setImageUploadResponse1(childImages);
    }
    setTimeout(() => {
      setupdateImage(true)
    }, 300);
  }, [fatherImage, motherImage, childImages]);

//   useEffect(() => {
   

//     return () => {
//  setDadImg("")
//  setFatherImage("")
//  setMomImg("")
//  setMotherImage("")
 
//     };
//   }, []);


  const OneTimePaymentAddOn = async () => {
    const obj = {
      line_items: [
        {
          price: "price_1MyybGBj65z3fD8Ny1MvUBDC",
          quantity: 3,
        },
      ],
      add_on: true,
    };
    try {
      const response1 = await fetch(`${BASE_URL}/oneTimePayment`, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          Authorization: getToken(),
          "Content-Type": "application/json",
        },
      });
      const data = await response1.json();
      console.log("data", data);
      if (data && data.body && data.body.url) {
        localStorage.setItem("paymentId", data.body.id);
        window.location.href = data.body.url;
      }
    } catch (err) {
      console.log("errrr", err);
    }
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent closing the modal when clicking inside the modal content
  };
  console.log("imageUploadResponse1", imageUploadResponse1);

  const handleDownload = () => {
    // Get the image source URL
    const imageUrl = document.querySelector(".boy-img1").src;

    // Create an anchor element
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.jpg"; // Specify the desired file name

    // Simulate a click on the anchor element to trigger the download
    link.click();
  };

  return (
    <div>
      <MainHeader />
      {/* <InstagramMedia /> */}
      {showMotherPopup && (
        <UploadingMother
          showMotherPopup={showMotherPopup}
          title="Images uploading"
          // mothertext={mothertext}
        />
      )}

      {/* {showPopup && <UploadingPopup 
      showPopup ={showPopup}
      title="Father image uploading..."
       fathertext={fathertext} />} */}
      {showMotherPopup && (
        <UploadingMother
          showMotherPopup={showMotherPopup}
          title="Images uploading"
          // mothertext={mothertext}
        />
      )}

      {babyPopup && (
        <BabyImagesPopup
          babyPopup={babyPopup}
          title="Generating MaybeBaby Image Result…"
          // babytext={babytext}
        />
      )}

      {openModal && (
        <ModalMedia
          setOpenModal={setOpenModal}
          imageUploadResponse1={imageUploadResponse1}
        />
      )}
      {openModalDefault && (
        <ModalMedia
          setOpenModal={setOpenModalDefault}
          imageUploadResponse1={imageUploadResponse2}
        />
      )}

      <section className="new-das-board">
        <div className="container">
          <div className="row dextop-view">
            <div className="col-lg-12">
              <div className="new-das-board-heading">
                <h1>Welcome to our app!</h1>
              </div>
            </div>
          </div>
          <div className="row mobile-view">
            <div className="col-lg-12">
              <div className="new-das-board-heading">
                <h1>Welcome to our app!</h1>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="new-das-board-content">
                <div className="row dextop-view">
                  <div className="col-lg-6">
                    <div className="left-new-das">
                      <div className="media-das">
                        <img className="howworks" src={howworks} />
                        <div className="media-das-1">
                          <h2 className="new-dasp-1">How It Works</h2>
                          <p className="new-dasp-2">Facing Frontward</p>
                          <p className="new-dasp-3">
                            Your face and the face of your partner should be
                            facing frontward, with no glasses or hair covering
                            the face.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="right-new-das">
                      <p className="right-new-das-p">
                        Before we can show you what your potential children
                        might look like, our advanced Artificial Intelligence
                        must carefully analyze and process your images with
                        remarkable precision. It will flex its deep learning
                        capabilities to generate these surprisingly accurate and
                        visually compelling predictions for you.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mobile-view">
                  <div className="col-lg-6">
                    <div className="right-new-das">
                      <p className="right-new-das-p">
                        Before we can show you what your potential children
                        might look like, our advanced Artificial Intelligence
                        must carefully analyze and process your images with
                        remarkable precision. It will flex its deep learning
                        capabilities to generate these surprisingly accurate and
                        visually compelling predictions for you.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="left-new-das">
                      <div className="media-das">
                        <img className="howworks" src={howworks} />
                        <div className="media-das-1">
                          <h2 className="new-dasp-1">How It Works</h2>
                          <p className="new-dasp-2">Facing Frontward</p>
                          <p className="new-dasp-3">
                            Your face and the face of your partner should be
                            facing frontward, with no glasses or hair covering
                            the face.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="new-das-time">
                {planState.planType === "life_time" ||
                planState.planType === "monthly_plan" ? (
                  <>
                    {" "}
                    <p className="new-das-time-p1">
                      Unlimited Membership:
                    </p>

                    <p className="new-das-time-p2">
                    Generate unlimited AI baby facial
                      analysis reports.
                    </p>
                  </>
                ) : (
                  <React.Fragment>
                    <p className="new-das-time-p1">One time payment plan</p>
                    <p className="new-das-time-p2">
                      Please choose your images carefully.
                    </p>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="new-das-img-credit">
                          <p className="im-credit-p">Image Credits Remaining</p>
                          <ul className="credit-ul">
                            <li className={progress < 3 && "active"}>
                              <span> {progress < 3 ? "" : "1"}</span>
                              <p>1st Credit</p>
                            </li>
                            <li className={progress < 2 && "active"}>
                              <span>{progress < 2 ? "" : "2"}</span>
                              <p>2ed Credit</p>
                            </li>
                            <li className={progress === 0 && "active"}>
                              <span>{progress === 0 ? "" : "3"}</span>
                              <p>3rd Credit</p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                )}
              </div>
              <div></div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-4 col-6 or1">
              {!dadImg ? (
                <div className="get-common">
                  <div className="border border-dashed border-width-2 main-border-color position-relative p-4 rounded text-center">
                    <input
                      className="cursor-pointer h-100 p-0 position-absolute right-0 top-0 w-100"
                      accept="image/jpeg, image/png"
                      type="file"
                      id="fileInputDad"
                      name="fileDad"
                      onChange={onSelectFile}
                      ref={dadPhotoRef}
                      style={{ opacity: "0" }}
                    />

                    <img className="fatherUpload" src={fatherUpload} />
                    <p className="fath-1">Dad’s Photo</p>
                    <p className="fath-2">Please upload a PNG or JPG image</p>
                    <button className="taphere">Click or tap here</button>
                  
                  </div>

                  <button
                    onClick={() => {
                      dadPhotoRef.current.click();
                    }}
                    className="FatherPhoto"
                  >
                    Father Photo
                  </button>
                  {isImgLoading?.dad && (
                      <div style={{ display: "block" ,textAlign : "center", margin : "5px 0 0 0" }}>
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <div className="get-common">
                  <div className="hid">
                    <input
                      className="cursor-pointer h-100 p-0 position-absolute right-0 top-0 w-100"
                      accept="image/jpeg, image/png"
                      type="file"
                      id="fileInputDad"
                      name="fileDad"
                      onChange={onSelectFile}
                      ref={dadPhotoRef}
                      style={{ opacity: "0", display: "none", width: "10px" }}
                    />
                    <img
                      className="men-all"
                      src={dadImg}
                      onClick={() => {
                        dadPhotoRef.current.click("");
                      }}
                      alt=""
                    />
                  </div>
                  <button
                    className="FatherPhoto"
                    onClick={() => {
                      dadPhotoRef.current.click();
                    }}
                  >
                    Father Photo
                  </button>
                  {isImgLoading?.dad && (
                    <div className="d-block text-center mt-2" >
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
              )}


            </div>

            <div className="col-lg-4 col-md-4 or2">
              <div className="get-center">
                <div className="center-devices">
                  <ul className="get-ul">
                    <li>
                      <input
                        className="getinput"
                        type="checkbox"
                        value="boy"
                        checked={gender === "boy"}
                        onChange={handleCheckboxChange}
                      />
                      <label>Boy</label>
                    </li>
                    <li>
                      <input
                        className="getinput"
                        type="checkbox"
                        value="girl"
                        checked={gender === "girl"}
                        onChange={handleCheckboxChange}
                      />
                      <label>Girl</label>
                    </li>
                  </ul>

                  <button
                    className="Generate-bt BT"
                    onClick={uploadImageHandler}
                  >
                    Generate
                  </button>
                </div>
              </div>
            </div>


         




            <div className="col-lg-4 col-md-4 col-6 or3">
              {!momImg ? (
                <div className="get-common">
                  <div className="border border-dashed border-width-2 main-border-color position-relative p-4 rounded text-center">
                    <input
                      className="cursor-pointer h-100 p-0 position-absolute right-0 top-0 w-100"
                      accept="image/jpeg, image/png"
                      type="file"
                      id="fileInputMom"
                      name="fileMom"
                      onChange={onSelectFile1}
                      ref={momPhotoRef}
                      style={{ opacity: "0" }}
                    />
                    <img className="fatherUpload" src={fatherUpload} />
                    <p className="fath-1">Mom’s Photo</p>
                    <p className="fath-2">Please upload a PNG or JPG image</p>
                    <button className="taphere">Click or tap here</button>

                   
                  </div>
                  <button
                    className="FatherPhoto"
                    onClick={() => {
                      momPhotoRef.current.click();
                    }}
                  >
                    Mother Photo
                  </button>

                  {isImgLoading?.mother && (
                      <div style={{ display: "block" ,textAlign : "center", margin : "5px 0 0 0"}} >
                        <div class="spinner-border" role="status">
                          <span class="sr-only">Loading...</span>
                        </div>
                      </div>
                    )}
                </div>
              ) : (
                <div className="get-common">
                  <div className="hid">
                    <input
                      className="cursor-pointer h-100 p-0 position-absolute right-0 top-0 w-100"
                      accept="image/jpeg, image/png"
                      type="file"
                      id="fileInputMom"
                      name="fileMom"
                      onChange={onSelectFile1}
                      ref={momPhotoRef}
                      style={{ opacity: "0", display: "none" }}
                    />
                    <img
                      className="men-all"
                      src={momImg}
                      alt=""
                      onClick={() => {
                        momPhotoRef.current.click();
                      }}
                    />
                  </div>
                  <button
                    className="FatherPhoto"
                    onClick={() => {
                      momPhotoRef.current.click();
                    }}
                  >
                    Mother Photo
                  </button>
                  {isImgLoading?.mother && (
                    <div className="d-block text-center mt-2">
                      <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="col-lg-4 col-md-12 col-12 or4 mobile-view">
              <div className="single-slider">
                {imageUploadResponse1 && (
                  <Slider {...setting}>
                    {imageUploadResponse1.map((ele, index) => (
                      <div className="" key={index}>
                        <div className="landing-boy">
                          <img className="boy-img1" src={ele} alt="new-image" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}

                {imageUploadResponse2 && (
                  <Slider {...setting}>
                    {imageUploadResponse2.map((ele, index) => (
                      <div className="" key={index}>
                        <div className="landing-boy">
                          <img className="boy-img1" src={ele} alt="new-image" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}

                {console.log(
                  imageUploadResponse1.length,
                  "imageUploadResponse1.length"
                )}
                {imageUploadResponse1.length === 0 &&
                  imageUploadResponse2.length === 0 && (
                    <Slider {...dsetting}>
                      {Sliderdata.map((item) => (
                        <div
                          className="slide-single new-das-complex"
                          key={item.id}
                        >
                          <img
                            className="childUpload"
                            src={childUpload}
                            alt="child-upload"
                          />
                          <p className="childUpload-p">Baby’s Photo</p>
                          <p className="childUpload-p-1">
                            The A.I. generated image result will appear here.
                          </p>
                          <div className="bottom-bt"></div>
                        </div>
                      ))}
                    </Slider>
                  )}
              </div>
            </div>
          </div>

          <div className="row dextop-view">
            <div className="col-lg-12">
              <div className="single-slider">
                {imageUploadResponse1 && (
                  <Slider {...dsetting}>
                    {imageUploadResponse1.map((ele, index) => (
                      <div className="" key={index}>
                        <div className="landing-boy">
                          <img className="boy-img1" src={ele} alt="new-image" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}

                {imageUploadResponse2 && (
                  <Slider {...dsetting}>
                    {imageUploadResponse2.map((ele, index) => (
                      <div className="" key={index}>
                        <div className="landing-boy">
                          <img className="boy-img1" src={ele} alt="new-image" />
                        </div>
                      </div>
                    ))}
                  </Slider>
                )}

                {imageUploadResponse1.length === 0 &&
                  imageUploadResponse2.length === 0 && (
                    <Slider {...dsetting}>
                      {Sliderdata.map((item) => (
                        <div
                          className="slide-single new-das-complex"
                          key={item.id}
                        >
                          <img
                            className="childUpload"
                            src={childUpload}
                            alt="child-upload"
                          />
                          <p className="childUpload-p">Baby’s Photo</p>
                          <p className="childUpload-p-1">
                            The A.I. generated image result will appear here.
                          </p>
                        </div>
                      ))}
                    </Slider>
                  )}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="bottom-bt">
                <ul className="sve-gen">
                  <li>
                    <button
                      className="save-bt BT"
                      onClick={handleDownload}
                      disabled={
                        imageUploadResponse1.length > 0 ||
                        imageUploadResponse2.length > 0
                          ? false
                          : true
                      }
                    >
                      <img
                        className="img-res1"
                        src={saveimg}
                        alt="save-image"
                      />
                      Save Image
                    </button>
                  </li>
                  <li>
                    <button
                      className="share-bt BT"
                      onClick={() => setOpenModal(true)}
                      disabled={
                        imageUploadResponse1.length > 0 ||
                        imageUploadResponse2.length > 0
                          ? false
                          : true
                      }
                    >
                      <img
                        className="img-res2"
                        src={genrateimg}
                        alt="share-image"
                      />
                      Share Image
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <NoteSection />
              <div className="please-note-1">
                <p className="usingp">
                  We appreciate your patience and can’t wait to share the
                  results <br></br> with you. Thank you for using{" "}
                  <span>MaybeBaby!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      {isLoading && <Loader />}
      {/* {isvisible && <PopupLoader />} */}
    </div>
  );
};

export default HomePage;
