import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Form, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import RenderStates from "./RenderStates";

const CheckoutForm = (props) => {
  const [complete, setComplete] = useState(false);
  const [client_secret, setClient_secret] = useState("");
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [address1, setAddress1] = useState(props.address1);
  const [address2, setAddress2] = useState(props.address2);
  const [city, setCity] = useState(props.city);
  const [state, setState] = useState(props.state);
  const [zip, setZip] = useState(props.zip);
  const [user, setUser] = useState(null);
  const [cabin_types, setCabin_types] = useState("");
  const [cabin_ids, setCabin_ids] = useState("");
  const [cabin_numbers, setCabin_numbers] = useState("");
  
  useEffect(() => {
      var tempCabin_types = [];
      var tempCabin_ids = [];
      var tempCabin_numbers = [];
      for (var i; i < props.bookedRooms.length; i++) {
        tempCabin_types.push(props.bookedRooms[i].roomLetter);
        tempCabin_ids.push(props.bookedRooms[i].cabinId);
        tempCabin_numbers.push(props.bookedRooms[i].cabinNumber);
      };
      setCabin_types(tempCabin_types);
      setCabin_ids(tempCabin_ids);
      setCabin_numbers(tempCabin_numbers);
    axios.get('/api/getclientsecret')
      .then(res => { setClient_secret(res.data.client_secret) })
      .catch(err => { console.log(err) })
    // setCabin_type(props.foo) // ! BRING IN THE TYPE OF CABIN BEING RESERVED
  }, []);

  const submit = async (ev) => {
    if (props.password !== props.passwordConfirmation)
      props.setPasswordsMatch(false);
    else {
      ev.preventDefault();
      let result = await props.stripe.createPaymentMethod('card')
      const { setupIntent, error } = await props.stripe.handleCardSetup(client_secret, {}); //  payment_method_data: { billing_details: { name: `${firstName} ${lastName}` } } 
      if (error) {
        console.log(error)
        console.log("YOU HAVE A CARD ERROR")
      } else if (setupIntent.status === "succeeded") { 
        await axios.post(`/api/createres?body=${result.paymentMethod.id}`)
          .then(res => {
          
            // CREATE A USER FIRST, THEN YOU CAN add that to the boooking
            // ? REGARDING CABIN_ID, DO I CREATE TWO BOOKINGS? IF SO, CAN I CHARGE THE CARD TWICE?? OR SOMEHOW WORK AROUND THAT. 

            // if (cabin_type === "Family"){

            // } else {  

            // }
            axios.post('/api/bookings', {
              customer_payment_token: res.data.c.id, 
              pm: res.data.pm,
              // cabin_type, // import the cabin type
              price: 1200, // import the price
              start_date: props.start_date, 
              end_date: props.end_date, 
              guests: props.guests, 
              special_needs: props.orderNotes, 
              // booking_number: 123456789, 
              user_id: user,  
              cabin_id: 10, 
              expected_arrival: "2:00PM"}) 
              .then(res=> {
                debugger
                setComplete(true)
              })
              .catch(err => { console.log(err) })
          })
          .catch(err => { console.log(err) })

        // The setup has succeeded. Display a success message.
        props.goToConfirmation();
      };
    };
  };

  return (
    <div className="checkout">
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>FIRST NAME ON CREDIT CARD <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="firstName"
                                        value={firstName}
                                        placeholder="First name"
                                        required
                                        onChange={(e)=> setFirstName(e.target.value)}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>LAST NAME ON CREDIT CARD <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="lastName"
                                        value={lastName}
                                        placeholder="Last name"
                                        required
                                        onChange={(e)=> setLastName(e.target.value)}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>BILLING ADDRESS <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="address1"
                                        value={address1}
                                        placeholder="Street address"
                                        required
                                        onChange={(e)=> setAddress1(e.target.value)}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Control
                                        name="address2"
                                        value={address2}
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        onChange={(e)=> setAddress2(e.target.value)}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>TOWN / CITY <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="city"
                                        value={city}
                                        placeholder="Town / City"
                                        required
                                        onChange={(e)=> setCity(e.target.value)}
                                    />
                                </Col>
                                { props.country === "United States of America" &&
                                    <Col>
                                        <Form.Label required style={{fontSize: "smaller"}}>STATE <span style={{color: "red"}}>*</span></Form.Label>
                                        <Form.Control
                                            name="state"
                                            value={state}
                                            as="select"
                                            placeholder="State"
                                            required
                                            onChange={(e)=> setState(e.target.value)}
                                        >
                                            <RenderStates />
                                        </Form.Control>
                                    </Col>
                                }
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>ZIP CODE <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="zip"
                                        value={zip}
                                        placeholder="Zip code"
                                        required
                                        onChange={(e)=> setZip(e.target.value)}
                                    />
                                </Col>
                            </CustomRow>
                            <div style={{border: "1px solid #ced4da", borderRadius: "4px", padding: "7px 5px 7px 5px"}}>
                                <CardElement 
                                    {...createOptions()}
                                />
                            </div>
      
      <span className="reservation-custom-button-placeorder" onClick={submit}>PLACE ORDER</span>
      { complete ? (
        <div>
          Payment went through
          </div>
      ) : "" }
      <br />
    </div>
  );
};

const CustomRow = styled(Row)`
    margin-bottom: 20px;
`;

const createOptions = () => {
    return {
      style: {
        base: {
          fontSize: '14px',
          color: 'black',
          fontFamily: 'Open Sans, sans-serif',
          border: "5px solid black !important",
          letterSpacing: '0.015em',
          '::placeholder': {
            color: '#aab7c4',
          },
        },
        invalid: {
          color: '#c23d4b',
        },
      }
    };
};

export default injectStripe(CheckoutForm);