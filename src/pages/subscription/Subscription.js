import React from 'react'
import './Subscription.css'
import Footer from '../footer/Footer'
import MainHeader from '../../components/topbar/MainHeader'
import { BASE_URL, getToken } from '../../uility/common'
import { useSelector } from 'react-redux'
import { toast } from "react-toastify";
import Slider from 'react-slick'

const Subscription = () => {
  const planState = useSelector(state => state?.plan);
  console.log(">>>>>>>planState", planState)
  
   const OneTimePayement = async () => {
    console.log(">>>>>>>>here>>>>>>")
    if (planState?.hitLimit === 1) {
      toast.warning("This plan is already active ", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else if (planState.planType === "life_time") {
      toast.warning("Yearly plan is already active ", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else if (planState.planType === "monthly_plan") {
      toast.warning("Monthly plan is already active ", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      // price_1MyyaDBj65z3fD8N5fRcJKIK
      // const obj = {
      //   "line_items": [
      //     {
      //       "price_data": {
      //         "currency": "usd",
      //         "product_data": {
      //           "name": "Maybe Baby Subsription one time payment"
      //         },
      //         "unit_amount": 4700
      //       },
      //       "quantity": 1
      //     }
      //   ]
      // }
      const obj = {
        "line_items": [
          {
            "price": "price_1MyyaDBj65z3fD8N5fRcJKIK",
            "quantity": 3
          }
        ],
        "add_on": false
      }
      try {
        const response1 = await fetch(`${BASE_URL}/oneTimePayment`, {
          method: 'POST',
          body: JSON.stringify(obj),
          headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
          }
        });
        const data = await response1.json();
        console.log("data", data)
        if (data && data.body && data.body.url) {
          localStorage.setItem('paymentId', data.body.id)
          window.location.href = data.body.url;
        }
      } catch (err) {
        console.log("errrr", err)
      }
    }

  }

   const SubscriptionHandler = async (isMonthly = false) => {
    if (planState.planType === "life_time") {
      toast.warning(isMonthly ? "unlimited yearly plan is already active" : "This Plan  is already active ", {
        position: toast.POSITION.TOP_LEFT,
      });
    } else {
      let payload = {
        "line_items": [
          {
            // "price": "price_1MZyP4Bj65z3fD8NFJFqIYSC",
            "price": isMonthly ? "price_1MyyadBj65z3fD8N7nyEtAz2" : "price_1MyyasBj65z3fD8NrBIwE2Nl",
            "quantity": 1
          }
        ],
        "isMonthly": isMonthly ? "1" : "0"
      }
      try {
        const response = await fetch(`${BASE_URL}/subScriptionPayment`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Authorization': getToken(),
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        console.log("data", data)
        if (data && data.body && data.body.url) {
          localStorage.setItem('paymentId', data.body.id)
          window.location.href = data.body.url;
        }
      } catch (err) {
        console.log("errrr", err)
      }

    }

    

  }

  return (
    <div>
      <MainHeader />
      <section class="subscription subscription-new">
        <div class="container">
        
          <div class="row">
          <div class="col-lg-12"><h3 class="OurPricingPlans">Our Pricing Plans</h3></div>
            <div class="col-lg-12">

              <div class="width-max desktop-price">
                <div class="row">
                  
                  <div class="col-lg-4 mb-3">
                    <div class="subscription-common">
                      {planState?.planType == "one_time" && <span style={{ float: "right" }} className="badge bg-success">Active</span>}
                      <p class="sub-1">Silver</p>
                      <p class="sub-2">$34.99  <strike className="strikePrice">${47}</strike></p>
                      <p class="discount-details">(25%  <span>Special Launch Price Discount)</span></p>
                      <p class="sub-3">One time payment</p>
                      <ul class="monthly-ul-1 margin-zero-ul">
                        <li>Benefit:</li>
                        <li><img src="images/women.jpg" alt="" /></li>
                      </ul>
                      <ul className="monthly-ul margin-zero-ul">
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Uses AI for realistic images and accurate family planning predictions.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Secure results (30 days of access before deletion).</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Same day results.</li>
                        
                        {/* <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Please note that the one time purchase version of our AI Child Prediction App only gives you three chances to generate a desirable result once before you have to pay again. We encourage you to double check that the images you select for A.I. analysis are the exact ones you want to use, as you will have to pay again to generate another result if you make a mistake. If you want to avoid this inconvenience and have access to unlimited image variations and faster results that only take minutes instead of several hours to create, we invite you to upgrade to our $99 per year subscription. With this plan, you’ll get even more accurate predictions over time as our A.I. algorithm learns and adapts to your unique facial features (and soon genetics). Upgrade now to start visualizing your future family with confidence</li> */}
                      </ul>
                      {/* {(planState?.planType !== "life_time" && planState?.planType !== "monthly_plan"  && planState?.planType === "one_time" && planState?.hitLimit  === 0 ) ? <button class="Get-Started" onClick={OneTimePayement}>Buy Now</button> : null} */}
                      {(!planState || ( planState?.planType !== "life_time" && planState?.planType !== "monthly_plan"  && planState.planType === 'one_time' && planState.hitLimit === 0)) && (
        <button className="Get-Started" onClick={OneTimePayement}>
          Buy Now
        </button>
      )}
                
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="subscription-common">
                      {planState?.planType == "monthly_plan" && <span style={{ float: "right" }} className="badge bg-success">Active</span>}
                      <p className="sub-1">Gold</p>
                      {}
                      {/* <p{ planState.planType === "monthly_plan" ? className="sfs" : "popularbtn" }> POPULAR</p> */}
                      <p className={planState.planType === "monthly_plan" ? "popularbtn1" : "popularbtn"}> POPULAR</p>

                      <p className="sub-2">$39 <strike className="strikePrice">${54.99}</strike></p>
                      <p class="discount-details">(30%  <span>Special Launch Price Discount)</span></p>
                      <p className="sub-3">Unlimited Monthly Plan</p>
                      <ul className="monthly-ul-1 margin-zero-ul">
                        <li>Benefit:</li>
                        <li><img src="images/women.jpg" alt="" /></li>
                      </ul>
                      <ul className="monthly-ul margin-zero-ul">
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Unlimited predictions with one monthly fee.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Premium customer support and unlimited monthly image storage.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Monthly surprise image results.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Priority processing and faster results (less than an hour)</li>
                        
                      </ul>
                      {/* {planState?.planType !== "monthly_plan" && planState?.planType !== "life_time" && <button className="Get-Started" onClick={() => SubscriptionHandler(true)} >Buy Now</button>} */}
                      {(planState?.planType === null || planState?.planType === "one_time") && <button className="Get-Started" onClick={() => SubscriptionHandler(true)} >Buy Now</button>}
                    </div>

                  </div>
                  <div class="col-lg-4">
                    <div class="subscription-common1 subscription-common">
                      {planState?.planType == "life_time" && <span style={{ float: "right" }} className="badge bg-success">Active</span>}
                      <p class="sub-1">Platinum</p>
                      <p class="sub-2">$99 <strike className="strikePrice">${399}</strike></p>
                      <p class="discount-details">(75%  <span>Special Launch Price Discount)</span></p>
                      <p class="sub-3">Unlimited yearly plan</p>
                      <ul class="monthly-ul-1 margin-zero-ul">
                        <li>Benefit:</li>
                        <li><img src="images/women.jpg" alt="" /></li>
                      </ul>
                      <ul className="monthly-ul margin-zero-ul">
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>All benefits of Monthly plan but at our best price.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Unlimited yearly image storage (365 Days).</li>
                       
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>VIP access to our upcoming AI chat for relationship and parenting advice.</li>
                      </ul>
                      {planState?.planType !== "life_time" ? <button class="Get-Started" onClick={() => SubscriptionHandler()}>Buy Now</button> : null}
                    </div>
                  </div>
                </div>
              </div>



              {/* mobile view */}


              <div class="width-max mobile-price">
                <div class="row">
                <Slider dots={true} infinite={true} slidesToShow={1} slidesToScroll={1}>
                  <div class="col-lg-4 mb-3">
                    <div class="subscription-common">
                      {planState?.planType == "one_time" && <span style={{ float: "right" }} className="badge bg-success">Active</span>}
                      <p class="sub-1">Silver</p>
                      <p class="sub-2">$34.99  <strike className="strikePrice">${47}</strike></p>
                      <p class="discount-details">(25%  <span>Special Launch Price Discount)</span></p>
                      <p class="sub-3">One time payment</p>
                      <ul class="monthly-ul-1 margin-zero-ul">
                        <li>Benefit:</li>
                        <li><img src="images/women.jpg" alt="" /></li>
                      </ul>
                      <ul className="monthly-ul margin-zero-ul">
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Uses AI for realistic images and accurate family planning predictions.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Secure results (30 days of access before deletion).</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Same day results.</li>
                        
                        {/* <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Please note that the one time purchase version of our AI Child Prediction App only gives you three chances to generate a desirable result once before you have to pay again. We encourage you to double check that the images you select for A.I. analysis are the exact ones you want to use, as you will have to pay again to generate another result if you make a mistake. If you want to avoid this inconvenience and have access to unlimited image variations and faster results that only take minutes instead of several hours to create, we invite you to upgrade to our $99 per year subscription. With this plan, you’ll get even more accurate predictions over time as our A.I. algorithm learns and adapts to your unique facial features (and soon genetics). Upgrade now to start visualizing your future family with confidence</li> */}
                      </ul>
                      {/* {(planState?.planType !== "life_time" && planState?.planType !== "monthly_plan"  && planState?.planType === "one_time" && planState?.hitLimit  === 0 ) ? <button class="Get-Started" onClick={OneTimePayement}>Buy Now</button> : null} */}
                      {(!planState || ( planState?.planType !== "life_time" && planState?.planType !== "monthly_plan"  && planState.planType === 'one_time' && planState.hitLimit === 0)) && (
        <button className="Get-Started" onClick={OneTimePayement}>
          Buy Now
        </button>
      )}
                
                    </div>
                  </div>
                  <div className="col-lg-4 mb-3">
                    <div className="subscription-common">
                      {planState?.planType == "monthly_plan" && <span style={{ float: "right" }} className="badge bg-success">Active</span>}
                      <p className="sub-1">Gold</p>
                      {}
                      {/* <p{ planState.planType === "monthly_plan" ? className="sfs" : "popularbtn" }> POPULAR</p> */}
                      <p className={planState.planType === "monthly_plan" ? "popularbtn1" : "popularbtn"}> POPULAR</p>

                      <p className="sub-2">$39 <strike className="strikePrice">${54.99}</strike></p>
                      <p class="discount-details">(30%  <span>Special Launch Price Discount)</span></p>
                      <p className="sub-3">Unlimited Monthly Plan</p>
                      <ul className="monthly-ul-1 margin-zero-ul">
                        <li>Benefit:</li>
                        <li><img src="images/women.jpg" alt="" /></li>
                      </ul>
                      <ul className="monthly-ul margin-zero-ul">
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Unlimited predictions with one monthly fee.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Premium customer support and unlimited monthly image storage.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Monthly surprise image results.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Priority processing and faster results (less than an hour)</li>
                        
                      </ul>
                      {/* {planState?.planType !== "monthly_plan" && planState?.planType !== "life_time" && <button className="Get-Started" onClick={() => SubscriptionHandler(true)} >Buy Now</button>} */}
                      {(planState?.planType === null || planState?.planType === "one_time") && <button className="Get-Started" onClick={() => SubscriptionHandler(true)} >Buy Now</button>}
                    </div>

                  </div>
                  <div class="col-lg-4">
                    <div class="subscription-common1 subscription-common">
                      {planState?.planType == "life_time" && <span style={{ float: "right" }} className="badge bg-success">Active</span>}
                      <p class="sub-1">Platinum</p>
                      <p class="sub-2">$99 <strike className="strikePrice">${399}</strike></p>
                      <p class="discount-details">(75%  <span>Special Launch Price Discount)</span></p>
                      <p class="sub-3">Unlimited yearly plan</p>
                      <ul class="monthly-ul-1 margin-zero-ul">
                        <li>Benefit:</li>
                        <li><img src="images/women.jpg" alt="" /></li>
                      </ul>
                      <ul className="monthly-ul margin-zero-ul">
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>All benefits of Monthly plan but at our best price.</li>
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>Unlimited yearly image storage (365 Days).</li>
                       
                        <li className='margin-plan-card-li subscription-card-text-bigger'><i class="fa-solid fa-check"></i>VIP access to our upcoming AI chat for relationship and parenting advice.</li>
                      </ul>
                      {planState?.planType !== "life_time" ? <button class="Get-Started" onClick={() => SubscriptionHandler()}>Buy Now</button> : null}
                    </div>
                  </div>
              </Slider>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Subscription