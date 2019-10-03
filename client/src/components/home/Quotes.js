import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import TerraNovaCircle from '../../images/TerraNovaCircle.png';
import styled from 'styled-components'
import './homestyles/Quotes.css'

const Quotes = () => {

  return(
    <Container>
      <Carousel>

        <Carousel.Item>
          <SlideContainer>
            <img className= "pic-img"
            src={TerraNovaCircle}
            alt="First slide"
            width="25%"
            />
            <Carousel.Caption>
              <Quote> "This is the best place to stay in Yellowstone, we'll definitely be back again!" </Quote>
              <Author> JACK JOHNSON </Author>
              <Location> From Sacramento, California </Location>
            </Carousel.Caption>
          </SlideContainer>
          </Carousel.Item>

          <Carousel.Item>
          <SlideContainer>
            <img className= "pic-img"
            src={TerraNovaCircle}
            alt="First slide"
            width="25%"
            />
            <Carousel.Caption>
              <Quote> "Best trip ever!" </Quote>
              <Author> ARNOLD PALMER </Author>
              <Location> From Louisville, Kentucky </Location>
            </Carousel.Caption>
          </SlideContainer>
        </Carousel.Item>
      </Carousel>

    </Container>
  )
}

const Container = styled.div`
  background-color: #464646;
`;

const SlideContainer = styled.div`
  margin-bottom: 300px !important;
`;

const Quote = styled.h2`
  color: white;
  margin-bottom: 40px !important;
  font-family: 'Raleway', sans-serif;
  font-size: 17px;

 `;

const Author = styled.h1`
  color: white;
  font-family: 'Raleway', sans-serif;
  font-size: 20px;

 `;

const Location = styled.h3`
color: white;
margin-bottom: 100px !important;
font-family: 'Raleway', sans-serif;
font-size: 14px;

`;


export default Quotes;