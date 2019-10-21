import React, { useState } from 'react'
import { Form, Container, Header } from 'semantic-ui-react'
import Axios from 'axios';

const FindBooking = () => {
  const [email, setEmail] = useState("")
  const [last_name, setlast_name] = useState("")
  const [booking_number, setBooking_number] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.length === 0 || last_name.length === 0 || booking_number.length === 0) {
      alert("Must include all fields")
    } else {
      Axios.get("api/findmybooking", { params: { email, last_name, booking_number } })
        .then(res => {
          debugger
        })
        .catch(err => {
          console.log(err)
        })
    }
  }

  return (
    <div>
      <Container>
        <br />
        <br />
        <Header as="h1">Search for your reservation here:</Header>
        <Form onSubmit={handleSubmit}>
          <br />
          <br />
          <Form.Group widths="equal">
            <Form.Input
              required
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              required
              name="last_name"
              value={last_name}
              placeholder="Last Name"
              onChange={(e) => setlast_name(e.target.value)}
            />

            <Form.Input
              required
              name="booking_number"
              value={booking_number}
              placeholder="Booking Number"
              onChange={(e) => setBooking_number(e.target.value)}
            />
          </Form.Group>

          <Form.Button size="medium" color="green">Search</Form.Button>
        </Form>
        <br />
        <br />
        <br />
        <br />

      </Container>
    </div>
  )
}

export default FindBooking
