import React from 'react';
import line from '../../images/events/line.png'
import './homestyles/Events.css'
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow, MDBCarouselCaption} from "mdbreact";


//make indicators visible
//remove padding from image
//enlarge and move arrows


const Events = () => {
  return(
    <>
    <Header> Our Events </Header>
    <img className="event-line-img" src={line} alt="line break" />

      <EventContainer>
        <MDBCarousel interval={false} activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
          <MDBCarouselInner>
            <MDBRow>
              <MDBCarouselItem itemId="1">
                <SlideContainer>
                  <CardContainer>
                    <Card className="event-card">
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Morning Yoga </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Nature Hike </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Bird Watching </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                </SlideContainer>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="2">
                <SlideContainer>
                  
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Wedding Day </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>

                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Campfire </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Excursion </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                </SlideContainer>
              </MDBCarouselItem>

              <MDBCarouselItem itemId="3">
                <SlideContainer>
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Yodeling </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Football </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                  <CardContainer>
                    <Card style={{ height: '35rem', width: '26rem' }}>
                      <img className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                      <MDBCarouselCaption>
                        <Text> Events </Text>
                        <Title> Bee Keeping </Title>
                      </MDBCarouselCaption>
                    </Card>
                  </CardContainer>
                </SlideContainer>
              </MDBCarouselItem>

            </MDBRow>
          </MDBCarouselInner>
        </MDBCarousel>
      </EventContainer>
    


    </>                                                   
  )
}

const Header = styled.h1`
  display: flex;
  margin-top: 70px;
  margin-left: 135px;
  color: black;
  font-size: 50px;  
  font-family: 'Playfair Display', serif;
`;

const Title = styled.h3`
  color: white;
  font-size: 40px;  
  font-family: 'Playfair Display', serif;
  margin-top: 50px;
  margin-bottom: 40px !important;
  padding-left: 0px;
`;

const Text = styled.p`
  position: absolute;
  color: white;
  font-size: 20px;  
  font-weight: bold;
  font-family: 'Raleway', sans-serif;
  margin-left: 100px;
`;

const EventContainer = styled.div`
  margin-left: 130px;
  margin-right: 130px;
`;

const SlideContainer = styled.div`
  display: flex;
  margin-bottom: 100px;
  margin-left: 0px;
  `;


const CardContainer = styled.div`
  display: flex !important;
  justify-content: space-evenly !important;
  align-content: space-around !important;
  flex-wrap: wrap !important;
  margin-right: 10px !important;
  margin-left: 10px !important;
  padding-right: 20px;

  
`;


export default Events;