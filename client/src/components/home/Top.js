import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import yellowstone from '../../images/yellowstone.jpg'
import yellowstone1 from '../../images/yellowstone1.jpg'
import yellowstone2 from '../../images/yellowstone2.jpg'
import styled from 'styled-components'
import './homestyles/Top.css'


//make header text responsive to screen size change

const Top = () => {

  return (
    <>
      <div className="overlay">
        <ContentTop>Welcome To Terra Nova Cabins</ContentTop>
      </div>
      <div className="bottomoverlay">
        <ContentBottom> HOTELS & RESORTS </ContentBottom>
      </div>
    
    <Carousel nextIcon="" prevIcon="" >
      <Carousel.Item>
        <img
          // className="d-block w-100"
          src={yellowstone}
          alt="First slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          // className="d-block w-100"
          src={yellowstone1}
          alt="Second slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          // className="d-block w-100"
          src={yellowstone2}
          alt="Third slide"
          width="100%"
          />
      </Carousel.Item>
    </Carousel>
  </>


  )
};

 
const ContentTop = styled.h1`
  position: relative;
  bottom: 100%;
  margin-bottom: 500px;
  padding-top: 60px;
  /* left: 5%; */
  /* z-index: 998; */
  color: white;
  font-size: 70px;
  font-family: 'Playfair Display', serif;
  
`

const ContentBottom = styled.h3`
  position: relative;
  bottom: 100%;
  margin-bottom: 300px;
  padding-top: 60px;
  /* left: 5%; */
  /* z-index: 998; */
  color: white;
  font-size: 35px;
  font-family: 'Raleway', sans-serif;
`


export default Top;


