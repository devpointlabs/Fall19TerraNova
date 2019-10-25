import React from 'react';
import line from '../../images/events/line.png'
import './homestyles/Events.css'
import styled from 'styled-components';
// import Card from 'react-bootstrap/Card';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBRow} from "mdbreact";



//make indicators visible
//remove padding from image
//enlarge and move arrows


const Events = () => {
    return(
        <>
            <Header className="eventshead">Our Events</Header>
            <img className="event-line-img" src={line} alt="line break" />

            <EventContainer>
                <MDBCarousel interval={false} activeItem={1} length={2} slide={true} showControls={true} showIndicators={true} multiItem>
                    <MDBCarouselInner>
                        <MDBRow>
                            <MDBCarouselItem itemId="1">
                                <SlideContainer>
                                    <div className="event-card">
                                        <div className="event-img">
                                            <img alt= "nature" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
                                        </div>
                                        <div className="event-overlay">
                                            <div className="event-text">Events</div>
                                            <div className="event-title">Nature Hike</div>
                                        </div>
                                    </div>
                                    <div className="space-between" />
                                    <div className="event-card">
                                        <img alt= "nature" className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
                                        <div className="event-overlay">
                                            <div className="event-text">Events</div>
                                            <div className="event-title">Surf Lessons</div>
                                        </div>
                                    </div>
                                    <div className="space-between" />
                                    <div className="event-card">
                                        <img alt= "nature" className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
                                        <div className="event-overlay">
                                            <div className="event-text">Events</div>
                                            <div className="event-title">Excursion</div>
                                        </div>
                                    </div>
                                </SlideContainer>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId="2">
                                <SlideContainer>
                                    <div className="event-card">
                                        <img alt= "nature" className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
                                        <div className="event-overlay">
                                            <div className="event-text">Events</div>
                                            <div className="event-title">Yodeling</div>
                                        </div>
                                    </div>
                                    <div className="space-between" />
                                    <div className="event-card">
                                        <img alt= "nature" className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
                                        <div className="event-overlay">
                                            <div className="event-text">Events</div>
                                            <div className="event-title">Fill Your Cup</div>
                                        </div>
                                    </div>
                                    <div className="space-between" />
                                    <div className="event-card">
                                        <img alt= "nature" className="event-img" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
                                        <div className="event-overlay">
                                            <div className="event-text">Events</div>
                                            <div className="event-title">Bee Keeping</div>
                                        </div>
                                    </div>
                                </SlideContainer>
                            </MDBCarouselItem>
                        </MDBRow>
                    </MDBCarouselInner>
                </MDBCarousel>
            </EventContainer>
        </>                                                   
    );
};

const Header = styled.h1`
    display: flex;
    margin-top: 70px;
    margin-left: 135px;
    color: black;
    font-size: 50px;  
    font-family: 'Playfair Display', serif;
`;

const EventContainer = styled.div`
    margin-left: 130px;
    margin-right: 130px;
`;

const SlideContainer = styled.div`
    position: relative;
    display: flex;
    margin-bottom: 20px;
    margin-left: 0px;
`;


export default Events;