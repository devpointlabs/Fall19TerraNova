import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { Form, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import RenderStates from "./RenderStates";

const CheckoutForm = (props) => {
  const [client_secret, setClient_secret] = useState("");
  const [firstName, setFirstName] = useState(props.firstName);
  const [lastName, setLastName] = useState(props.lastName);
  const [address1, setAddress1] = useState(props.address1);
  const [address2, setAddress2] = useState(props.address2);
  const [city, setCity] = useState(props.city);
  const [state, setState] = useState(props.state);
  const [zip, setZip] = useState(props.zip);
  const [cabin_types, setCabin_types] = useState([]);
  const [bookings, setbookings] = useState([])



  useEffect(() => {
    var tempCabin_types = [];
    for (var i = 0; i < props.bookedRooms.length; i++) { if (props.bookedRooms[i].roomLetter === null) { } else { tempCabin_types.push(props.bookedRooms[i].roomLetter) } }
    setCabin_types(tempCabin_types)

    axios.get('/api/getclientsecret')
      .then(res => { setClient_secret(res.data.client_secret) })
      .catch(err => { console.log(err) })
  }, []);

  const fooUser = async () => {
    const { email, password, firstName, lastName, address1, city, state, zip, country, createAccount } = props
    let usersid
    if (createAccount && props.password === props.passwordConfirmation) {
      await axios.post("/api/auth", { email, password, passwordConfirmation: password, first_name: firstName, last_name: lastName, address: address1, city, state, zip, country }).then(res => { usersid = res.data.data.id }).catch(res => { console.log(res) })
    }
    await submit(usersid)
    props.goToConfirmation() //bookings
  }

  const submit = async (user_id) => {


    if (props.password !== props.passwordConfirmation) {
      props.setPasswordsMatch(false);
    }

    let result = await props.stripe.createPaymentMethod('card')
    const { setupIntent, error } = await props.stripe.handleCardSetup(client_secret, {}); //  payment_method_data: { billing_details: { name: `${firstName} ${lastName}` } } 
    if (error) {
      console.log(error)
      console.log("YOU HAVE A CARD ERROR")
    } else if (setupIntent.status === "succeeded") {
      await axios.post(`/api/createres?body=${result.paymentMethod.id}`)
        .then(({ data }) => {

          let tbooks = []
          let books = props.nrRoomsArray.filter(i => i.cabinId)
          const { start_date, end_date, guests, orderNotes, } = props //  email, createAccount, password, firstName, lastName, address1, city, state, zip, country, history

          if (cabin_types.includes("F") || (cabin_types.length > 1)) {
            for (let i = 0; i < books.length; i++) {
              const { roomPrice, cabinId, roomLetter } = books[i];
              if (i === 0) {
                if (roomLetter === "F") {
                  const ids = cabinId.split(',')
                  for (let i = 0; i < ids.length; i++) {
                    const cabin_id = ids[i];
                    if (i === 0) {
                      axios.post('/api/bookings', { user_id, cabin_type: roomLetter, price: roomPrice, start_date, end_date, guests, special_needs: orderNotes, cabin_id, expected_arrival: "2:00PM", customer_payment_token: data.c.id, pm: data.pm, }).then(res => { tbooks.push(res.data) }).catch(err => { console.log(err) })
                    } else {
                      axios.post('/api/bookings', { user_id, cabin_type: roomLetter, price: roomPrice, start_date, end_date, guests, special_needs: orderNotes, cabin_id, expected_arrival: "2:00PM" }).then(res => { tbooks.push(res.data) }).catch(err => { console.log(err) })
                    }
                  }
                } else {
                  axios.post('/api/bookings', { user_id, cabin_type: roomLetter, price: roomPrice, start_date, end_date, guests, special_needs: orderNotes, cabin_id: cabinId, expected_arrival: "2:00PM", customer_payment_token: data.c.id, pm: data.pm, }).then(res => { tbooks.push(res.data) }).catch(err => { console.log(err) })
                }
              } else if (roomLetter === "F") {
                const ids = cabinId.split(',')
                for (let i = 0; i < ids.length; i++) {
                  const cabin_id = ids[i];
                  axios.post('/api/bookings', { user_id, cabin_type: roomLetter, price: roomPrice, start_date, end_date, guests, special_needs: orderNotes, cabin_id, expected_arrival: "2:00PM",customer_payment_token: data.c.id }).then(res => { tbooks.push(res.data) }).catch(err => { console.log(err) })
                }
              } else {
                axios.post('/api/bookings', { user_id, cabin_type: roomLetter, price: roomPrice, start_date, end_date, guests, special_needs: orderNotes, cabin_id: cabinId, expected_arrival: "2:00PM",customer_payment_token: data.c.id }).then(res => { tbooks.push(res.data) }).catch(err => { console.log(err) })
              }
            }
          } else {
            const { roomPrice, cabinId, roomLetter } = books[0];
            axios.post('/api/bookings', { user_id, cabin_type: roomLetter, price: roomPrice, start_date, end_date, guests, special_needs: orderNotes, cabin_id: cabinId, expected_arrival: "2:00PM", customer_payment_token: data.c.id, pm: data.pm, }).then(res => { tbooks.push(res.data) }).catch(err => { console.log(err) })
          }
          setbookings(tbooks)


        }).catch(err => { console.log(err) })
    };

  }



  return (
    <div className="checkout">
      <CustomRow>
        <Col>
          <Form.Label required style={{ fontSize: "smaller" }}>FIRST NAME ON CREDIT CARD <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            name="firstName"
            value={firstName}
            placeholder="First name"
            required
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Col>
        <Col>
          <Form.Label required style={{ fontSize: "smaller" }}>LAST NAME ON CREDIT CARD <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            name="lastName"
            value={lastName}
            placeholder="Last name"
            required
            onChange={(e) => setLastName(e.target.value)}
          />
        </Col>
      </CustomRow>
      <CustomRow>
        <Col>
          <Form.Label required style={{ fontSize: "smaller" }}>BILLING ADDRESS <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            name="address1"
            value={address1}
            placeholder="Street address"
            required
            onChange={(e) => setAddress1(e.target.value)}
          />
        </Col>
      </CustomRow>
      <CustomRow>
        <Col>
          <Form.Control
            name="address2"
            value={address2}
            placeholder="Apartment, suite, unit, etc. (optional)"
            onChange={(e) => setAddress2(e.target.value)}
          />
        </Col>
      </CustomRow>
      <CustomRow>
        <Col>
          <Form.Label required style={{ fontSize: "smaller" }}>TOWN / CITY <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            name="city"
            value={city}
            placeholder="Town / City"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
        {props.country === "United States of America" &&
          <Col>
            <Form.Label required style={{ fontSize: "smaller" }}>STATE <span style={{ color: "red" }}>*</span></Form.Label>
            <Form.Control
              name="state"
              value={state}
              as="select"
              placeholder="State"
              required
              onChange={(e) => setState(e.target.value)}
            >
              <RenderStates />
            </Form.Control>
          </Col>
        }
        <Col>
          <Form.Label required style={{ fontSize: "smaller" }}>ZIP CODE <span style={{ color: "red" }}>*</span></Form.Label>
          <Form.Control
            name="zip"
            value={zip}
            placeholder="Zip code"
            required
            onChange={(e) => setZip(e.target.value)}
          />
        </Col>
      </CustomRow>
      <div style={{ border: "1px solid #ced4da", borderRadius: "4px", padding: "7px 5px 7px 5px" }}>
        <CardElement
          {...createOptions()}
        />
      </div>
      <span className="reservation-custom-button-placeorder" onClick={fooUser}>PLACE ORDER</span>
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
        letterSpacing: '0.015em',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#c23d4b',
      },
    }
  }
};

export default injectStripe(CheckoutForm);