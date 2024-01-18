import React from "react";
import { useSelector } from "react-redux";
import { BASE_URL, getToken } from "../../uility/common";
import { toast } from "react-toastify";
const AddOnPaymentModal = () =>{

   const OneTimePaymentAddOn = async () => {
        const planState = useSelector(state => state?.plan);
          const obj = {
            "line_items": [
              {
                "price": "price_1MyybGBj65z3fD8Ny1MvUBDC",
                "quantity": 3
              }
            ],
            "add_on" : true
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

        return(
            <>
           <button onClick={ OneTimePaymentAddOn}>Proceed</button>
            </>
        )
    
      }




export default AddOnPaymentModal