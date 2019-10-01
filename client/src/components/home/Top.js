import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import shipwreck from '../../images/shipwreckbeach.jpg'
import split from '../../images/split.jpg'
import portifino from '../../images/portifino.jpg'
import styled from 'styled-components'
import './home.css/Top.css'


const Top = () => {

  return (
    <>
      <div className="overlay">
        <ContentTop>Welcome To Terra Nova Cabins</ContentTop>
      </div>
      <div className="bottomoverlay">
        <ContentBottom> HOTELS & RESORTS </ContentBottom>
      </div>
    
    <Carousel>
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src={portifino}
          alt="First slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          // className="d-block w-100"
          src={shipwreck}
          alt="Second slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          // className="d-block w-100"
          src={split}
          alt="Third slide"
          width="100%"
          />
      </Carousel.Item>
    </Carousel>
  </>


  )
};

 
const ContentTop = styled.h1`
  /* position: absolute; */
  bottom: 100%;
  margin-bottom: 500px;
  /* left: 5%; */
  /* z-index: 2000; */
  color: white;
  font-size: 70px;
  font-family: 'Playfair Display', serif;
  
`

const ContentBottom = styled.h3`
  /* position: absolute; */
  bottom: 100%;
  margin-bottom: 300px;
  /* left: 5%;
  z-index: 2000; */
  color: white;
  font-size: 35px;
  font-family: 'Raleway', sans-serif;
`


export default Top;


