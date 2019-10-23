import React, {useState, useEffect} from 'react'
import CabinTable from './CabinTable'
import Axios from 'axios';
import { Container } from 'semantic-ui-react';

const AdminCabins = () => {
  const [cabins, setcabins] = useState([])

  useEffect(() => {
    Axios.get("/api/cabins")
    .then(res => {
      setcabins(res.data)
    })
  }, [])

  return (
    <Container>
      <ol>
        <li>Cabin table</li>
        <li>Edit Cabin Info</li>
        <li>Delete Cabin</li>
      </ol>
      <CabinTable arr={cabins} title={"Cabins"}/>
    </Container>
  )
}

export default AdminCabins
