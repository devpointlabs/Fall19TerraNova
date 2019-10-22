import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, injectStripe } from 'react-stripe-elements';

const CheckoutForm = (props) => {
  const [complete, setComplete] = useState(false)
  const [client_secret, setClient_secret] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [cabin_type, setCabin_type] = useState("Family")

  useEffect(() => {
    axios.get('/api/getclientsecret')
      .then(res => { setClient_secret(res.data.client_secret) })
      .catch(err => { console.log(err) })
    // setCabin_type(props.foo) // ! BRING IN THE TYPE OF CABIN BEING RESERVED
  }, [])

  const submit = async (ev) => {
    ev.preventDefault();
    let result = await props.stripe.createPaymentMethod('card')
    const { setupIntent, error } = await props.stripe.handleCardSetup(client_secret, {}); //  payment_method_data: { billing_details: { name: `${firstName} ${lastName}` } } 
    if (error) {
      console.log(error)
      console.log("YOU HAVE A CARD ERROR")
    } else if (setupIntent.status == "succeeded") { // Its a go! create the booking. add the customerpaymenttoken, go go go
      await axios.post(`/api/createres?body=${result.paymentMethod.id}`)//${token.id}
        .then(res => {
          
          // CREATE A USER FIRST, THEN YOU CAN add that to the boooking
          // ? REGARDING CABIN_ID, DO I CREATE TWO BOOKINGS? IF SO, CAN I CHARGE THE CARD TWICE?? OR SOMEHOW WORK AROUND THAT. 

          if (cabin_type === "Family"){

          } else {  

          }
           axios.post('/api/bookings', {
            customer_payment_token: res.data.c.id, 
            pm: res.data.pm,
            cabin_type, // import the cabin type
            price: 1200, // import the price
            start_date: "2019-10-16", 
            end_date: "2019-10-20", 
            guests: 3, 
            special_needs: "Wants the cabin in far north", 
            booking_number: 123456789, 
            user_id: 1,  // if user is logged in or has created an account, put user_id here.
            cabin_id: 10, 
            expected_arrival: "2:00PM"}) // put all the customer information in this hash. 
            .then(res=> {
              debugger
              setComplete(true)
            })
            .catch(err => { console.log(err) })
        })
        .catch(err => { console.log(err) })

      // The setup has succeeded. Display a success message.
    }
  }

  return (
    <div className="checkout">
      <br />
      <br />
      <br />
      <br />
      <p>Would you like to complete the purchase?</p>
      <input
        name="firstName"
        value={firstName}
        placeholder="First Name"
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        name="lastName"
        value={lastName}
        placeholder="Last Name"
        onChange={(e) => setLastName(e.target.value)}
      />
      <CardElement />
      <button onClick={submit}>Purchase</button>
      {complete ? (
        <div>
          Payment went through
          </div>
      ) : ""}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default injectStripe(CheckoutForm) // can i put export default in front of const CheckoutForm.