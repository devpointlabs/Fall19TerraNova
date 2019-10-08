import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import Calendar from 'react-calendar'
import yellowstone from '../../images/top/yellowstone.jpg'
import yellowstone1 from '../../images/top/yellowstone1.jpg'
import yellowstone2 from '../../images/top/yellowstone2.jpg'
import styled from 'styled-components'
import './homestyles/Head.css'


//make header text responsive to screen size change

const Top = () => {

  return (
    <>
      <div className="topoverlay">
        <ContentTop>Welcome To Terra Nova Cabins</ContentTop>
      </div>
      <div className="bottomoverlay">
        <ContentBottom> AT WEST YELLOWSTONE </ContentBottom>
      </div>
      <div className="calendaroverlay">
        <Calendar/>
      </div>
    
    <Carousel nextIcon="" prevIcon="" >
      <Carousel.Item>
        <img
          src={yellowstone}
          alt="First slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
          src={yellowstone1}
          alt="Second slide"
          width="100%"
          />
      </Carousel.Item>

      <Carousel.Item>
        <img
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
  padding-top: 8px;
  color: white;
  font-size: 85px;
  font-family: 'Playfair Display', serif;
  
`

const ContentBottom = styled.h3`
  position: relative;
  letter-spacing: 8px;
  color: white;
  font-size: 25px;
  font-family: 'Playfair Display', serif;
`


export default Top;
