import React from 'react';
import { Header, } from 'semantic-ui-react';
import axios from 'axios'

const Home = () => {

  const getApi = () => {
    axios.get("/api/avail_cabins", {params: {dates: ["2019-10-04", "2019-10-06"]}} )
      .then(res => {
        debugger
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <Header as="h3" textAlign="center">Devise Auth App</Header>
      <br />
      <button onClick={getApi}>API request</button>
    </div>
  )
}

export default Home;
