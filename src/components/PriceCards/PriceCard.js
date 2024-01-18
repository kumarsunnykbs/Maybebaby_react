import React, { useState, useEffect } from 'react';
import Register from '../../pages/register/Register';
import ModalContainer from '../ModalContainer/ModalContainer';
import RegisterModal from '../RegisterModal.js/RegisterModal';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const PriceCard = ({
  heading,
  price,
  strikePay,
  popular,
  discountamount,
  discountText,
  subHading,
  listData,
  buttonTxt,
  buttonClick = null,
  pageName,
  planType = null,
  showActive = false,
  showButton = true,
  currentPlant,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [readMore, setReadMore] = useState(false);
  const authState = useSelector(state => state.auth);
const navigate = useNavigate();
  // const handleOpenModal = (data) => {
  //   setShowModal(true);
  // };

  const handleOpenModal = (data) => {
    if(authState){
      navigate("/subscription")
    }else{
      navigate("/register")

    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="subscription-common">
        <ModalContainer show={showModal} handleClose={handleCloseModal}>
          <RegisterModal
            subHading={planType}
            handleCloseModal={handleCloseModal}
          />
        </ModalContainer>
        {showActive && (
          <span style={{ float: 'right' }} className="badge bg-success">
            Active
          </span>
        )}
        <p className="sub-1">{heading}</p>
        {popular ? <p className="popularbtn">{popular}</p> : ''}

        <p className="sub-2">
          {price} <strike className="strikePrice">{strikePay}</strike>
        </p>
        <p className="discount-details">
          {discountamount} <span>{discountText}</span>
        </p>
        <p className="sub-3">{subHading}</p>
        <ul className="monthly-ul-1">
          {pageName == 'subscription' ? (
            <li>Benefit:</li>
          ) : (
            <li>
              <img src="images/men.jpg" alt="" />
            </li>
          )}
          <li>
            <img src="images/women.jpg" alt="" />
          </li>
        </ul>

        <ul className="monthly-ul margin-zero-ul">
          {listData
            .slice(0, isMobileView ? (readMore ? listData.length : 4) : listData.length)
            .map((item, index) => (
              <li
                className="margin-plan-card-li subscription-card-text-bigger"
                key={`price-card-list-${index}`}
              >
                <i className="fa-solid fa-check"></i>
                {item}
              </li>
            ))}
        </ul>
        {isMobileView && listData.length > 3 && (
          <button
            className={readMore ? 'Read-Less' : 'Read-More'}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? 'Read Less' : 'Read More'}
          </button>
        )}
        {pageName === 'newLandingPage' ? (
          <button
            className="Get-Started"
            onClick={() => handleOpenModal(planType)}
          >
            {buttonTxt}
          </button>
        ) : null}

        {pageName === 'subscription' ? (
          showButton ? (
            currentPlant === 'one_time' ? (
              <button className="Get-Started">{buttonTxt}</button>
            ) : currentPlant === 'life_time' ? (
              <button
                className="Get-Started"
                onClick={() => buttonClick()}
              >
                {buttonTxt}
              </button>
            ) : (
              <button
                className="Get-Started"
                onClick={() => buttonClick(true)}
              >
                {buttonTxt}
              </button>
            )
          ) : null
        ) : null}
      </div>
    </>
  );
};

export default PriceCard;