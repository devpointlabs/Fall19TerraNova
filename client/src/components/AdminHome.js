import React from 'react'
import {Container, Header, Button} from 'semantic-ui-react'

const AdminHome = ({history: {push}}) => {
  return (
    <>
      <Container >
        <br />
        <br />
        <br />
        <br />
        <Header>Welcome Admin</Header>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button color="red" onClick={()=>push("/adminbookings")}>Bookings</Button>
        <Button color="orange" onClick={()=>push("/adminusers")}>Users</Button>
        <Button color="yellow" onClick={()=>push("/admincabins")}>Cabins</Button>
        <Button color="green" onClick={()=>push("/adminimages")}>Images</Button>
        <Button color="blue" onClick={()=>push("/adminpe")}>Price Events</Button>
        <Button color="purple" onClick={()=>push("/admindiscounts")}>Discounts</Button>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </Container>
    </>
  )
}

export default AdminHome
