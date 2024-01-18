import React, { useEffect } from 'react'
import './Paymentpage.css'
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import successIcon from '../../asset/image/success.png'
import { BASE_URL, getToken } from '../../uility/common'
import { Link, useLocation } from 'react-router-dom'
import { getActivePlanRequest } from '../../redux/plan/actions'
const PaymentSuccess = () => {
  const authState = useSelector(state => state.auth);
  const location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    const searchJson = JSON.parse('{"' + decodeURI(location.search.replace('?','').replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
    console.log("searchJson",searchJson)
    const obj = {
        payment_id: localStorage.getItem("paymentId"),
        status: Number(searchJson.status)
    }
    const fetchRequest = async () => {
        const response1 = await fetch(`${BASE_URL}/retrievePaymentStatus`,{
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
            }
        });
        const data = await response1.json();
        localStorage.removeItem("paymentId")
        localStorage.removeItem("regToken")
        console.log("data", data)
        dispatch(getActivePlanRequest());
    }
    fetchRequest();
}, [])

  return (
    <div className="emailveryfy">
    <div className='center-db paymeny-only'>
        <img src={successIcon} alt="succes icon" />
        <p>Your payment is succesfully completed.</p>
        <p>Now go to home page <Link to='/home'>Click here</Link></p>
    </div>
    {authState.loading && <Loader/>}
</div>
  )
}

export default PaymentSuccess


