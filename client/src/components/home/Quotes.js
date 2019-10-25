import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import styled from 'styled-components'
import './homestyles/Quotes.css'

const Quotes = () => {

  return(
    <Container>
      <Carousel>

        <Carousel.Item>
          <SlideContainer>
            <RatingContainer>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </RatingContainer>
            <Carousel.Caption>
              <Quote className="quotetext"> "This is the best place to stay in Yellowstone, we'll definitely be back again!" </Quote>
              <Author className="quoteauthor"> JACK JOHNSON </Author>
              <Location className="quotelocation"> From Sacramento, California </Location>
            </Carousel.Caption>
          </SlideContainer>
          </Carousel.Item>

          <Carousel.Item>
          <SlideContainer>
            <RatingContainer>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </RatingContainer>
            <Carousel.Caption>
              <Quote className="quotetext"> "Best trip ever, the golf course is amazing... but nothing beats their iced tea and lemonade!" </Quote>
              <Author className="quoteauthor"> ARNOLD PALMER </Author>
              <Location className="quotelocation"> From Louisville, Kentucky </Location>
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
  display: flex;
  justify-content: center;
  margin-bottom: 300px !important;
`;

const RatingContainer = styled.div`
  margin-top: 80px;
`;

const Quote = styled.h2`
  color: white;
  margin-bottom: 40px !important;
  font-family: 'Catamaran', sans-serif;
  font-size: 17px;

 `;

const Author = styled.h1`
  color: white;
  font-family: 'Catamaran', sans-serif;
  font-size: 20px;

 `;

const Location = styled.h3`
color: white;
margin-bottom: 100px !important;
font-family: 'Catamaran', sans-serif;
font-size: 14px;

`;


export default Quotes;