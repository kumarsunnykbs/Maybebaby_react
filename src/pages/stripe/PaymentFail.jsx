import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../../components/Loader'
import failIcon from '../../asset/image/fail.png'
import { Link } from 'react-router-dom'
const PaymentFail = () => {
  const authState = useSelector(state => state.auth);
 
  return (
    <div className="emailveryfy">
  
    <div className='center-db paymentfail'>
        <img src={failIcon} alt="fail icon" />
        <p>Your payment is failed.</p>
        <p><Link to='/subscription'>Click here</Link> to go Back  subscription </p>
    </div>
   
    {authState.loading && <Loader/>}
</div>
  )
}

export default PaymentFail

