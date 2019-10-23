import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import {Form, Container, Header} from 'semantic-ui-react'

import TodayTable from './TodayTable'

const AdminBookings = () => {
  const [date, setDate] = useState(new Date)
  const [already_here, setalready_here] = useState([])
  const [arriving_today, setarriving_today] = useState([])
  const [checking_out_today, setchecking_out_today] = useState([])
  const [last_night, setlast_night] = useState([])

  useEffect(() => {
    Axios.get("/api/single_day_bookings", {params: {date}})
      .then(({data})=>{
        setalready_here(data.already_here)
        setarriving_today(data.arriving_today)
        setchecking_out_today(data.checking_out_today)
        setlast_night(data.last_night)
      })
      .catch(err=>console.log(err))
  }, [date])

  return (
    <Container>
      <br />
      <br />
      <br />
      <Header as="h1">Today's Bookings</Header>
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />
 
      <br />
      <br />
      <TodayTable arr={arriving_today} title={"Arriving Today"}/>
      <TodayTable arr={checking_out_today} title={"Checking Out Today"}/>
      <TodayTable arr={already_here} title={"Already Here"}/>
      <TodayTable arr={last_night} title={"Last Night"}/>
    </Container>
  )
}

export default AdminBookings
