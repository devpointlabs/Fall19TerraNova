import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardElement, injectStripe } from 'react-stripe-elements';

const CheckoutForm = (props) => {
  const [complete, setComplete] = useState(false)
  const [client_secret, setClient_secret] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  useEffect(() => {
    axios.get('/api/getclientsecret')
      .then(res => { setClient_secret(res.data.client_secret) })
      .catch(err => { console.log(err) })
  }, [])

  const submit = async (ev) => {
    ev.preventDefault();
    let { token } = await props.stripe.createToken({ name: `${firstName} ${lastName}` });
    const { setupIntent, error } = await props.stripe.handleCardSetup(client_secret, { payment_method_data: { billing_details: { name: `${firstName} ${lastName}` } } });

    if (error) {
      console.log(error)
      console.log("YOU HAVE A CARD ERROR")
      // Display error.message in your UI.
    } else if (setupIntent.status == "Succeeded") { // Its a go! create the booking. add the customerpaymenttoken, go go go
      await axios.post(`/api/createres?body=${token.id}`)
        .then(res => {
          debugger
          if (res.data.ok) setComplete(true)
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