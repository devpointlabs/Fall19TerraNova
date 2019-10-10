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
        <DateButton> <p> ARRIVAL DATE </p> </DateButton>
        <DateButton> <p> DEPARTURE DATE </p> </DateButton>
        <GuestButton> <p> ADULTS </p> </GuestButton>
        <GuestButton> <p> CHILDREN </p> </GuestButton>
        <CheckButton> <p> CHECK </p> <p> AVAILABILITY </p></CheckButton>
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

const DateButton = styled.button`
    border-color: transparent;
    background: white;
    color: #8E7037;
    font-size: smaller;
    padding-left: 160px;
    padding-right: 160px;
    padding-top: 62px;
    padding-bottom: 62px;
    margin-left: 10px;

    &:hover {
        background-color: #7c612f;
    }
`;

const GuestButton = styled.button`
    border-color: transparent;
    background: white;
    color: #8E7037;
    font-size: smaller;
    padding-left: 70px;
    padding-right: 70px;
    padding-top: 62px;
    padding-bottom: 62px;
    margin-left: 10px;

    &:hover {
        background-color: #7c612f;
    }
`;

const CheckButton = styled.button`
    border-color: transparent;
    background: #8E7037;
    color: white;
    font-size: 100%;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 32px;
    padding-bottom: 32px;
    margin-left: 10px;
    font-family: 'Raleway', sans-serif;
    font-weight: bold;
    letter-spacing: 2px;

    &:hover {
        background-color: #7c612f;
    }
`;

export default Top;
