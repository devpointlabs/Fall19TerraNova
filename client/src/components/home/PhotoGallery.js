import React from 'react';
import styled from 'styled-components';
import '../home/homestyles/PhotoGallery.css';
import Logo from '../../images/gallery-logo.png';
import '../home/homestyles/PhotoGallery.css';
// import Carousel, { Modal, ModalGateway } from 'react-images';
import { OverlayTrigger, Popover, Carousel, Modal, Row } from 'react-bootstrap';
import Hotel1 from '../../images/Hotel1.jpg'
import Hotel2 from '../../images/Hotel2.jpg'
import Hotel3 from '../../images/Hotel3.jpg';
import Hotel4 from '../../images/Hotel4.jpg';
import Hotel5 from '../../images/Hotel5.jpg';
import Hotel6 from '../../images/Hotel6.jpg';
import Hotel7 from '../../images/Hotel7.jpg';
import Hotel8 from '../../images/Hotel8.jpg';
import Hotel9 from '../../images/Hotel9.jpg';
import Room1 from '../../images/Room1.jpg';
import Room2 from '../../images/Room2.jpg';
import Room3 from '../../images/Room3.jpg';
import Room4 from '../../images/Room4.jpg';
import Room5 from '../../images/Room5.jpg';
import Room6 from '../../images/Room6.jpg';
import Bathroom2 from '../../images/Bathroom2.jpg';

const Container = styled.div`
    left: 0;
    height: 40%;
    width: 100%;
    -webkit-user-select: none;
    background-color: rgb(35, 35, 35);
`
const Header = styled.span`
    display: flex;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 55px;
    color: white;
    padding: 30px;
`
const Nav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 15px;
`

class PhotoGallery extends React.Component {
    state = { show: false };

    handleClose = () => this.setState({ show: false });

    handleShow = () => this.setState({ show: true });

    render() {
        
        return (
            <>
                <Container style={{paddingBottom: "30px"}}>
                    <Header>Our Gallery</Header>
                    <img className="gallery-icon-img" src={Logo} />
                        <Nav class="navbar">
                            <a href="#Hotel & Ground" style={{marginRight: "60px", fontSize: "20px", color: "#ababab"}}>HOTEL & GROUND</a>
                            <a href="#Room/Suite" style={{marginRight: "60px", fontSize: "20px", color: "#ababab"}}>ROOM/SUITE</a>
                            <a href="#Bathroom" style={{marginRight: "55px", fontSize: "20px", color: "#ababab"}}>BATHROOM</a>
                        </Nav>
                </Container>

                <Container style={{display: "flex", justifyContent: "center", paddingLeft: "6%", paddingRight: "6%"}}>
                    <Row style={{display: "flex", justifyContent: "center"}}>
                        <img src={Hotel1} width="425px" onClick={this.handleShow} />
                        <img src={Hotel2} width="425px" onClick={this.handleShow} />
                        <img src={Hotel3} width="425px" onClick={this.handleShow} />
                    </Row>
                    <Row style={{display: "flex", justifyContent: "center"}}>
                        <img src={Hotel4} width="425px" onClick={this.handleShow} />
                        <img src={Hotel5} width="425px" onClick={this.handleShow} />
                        <img src={Hotel6} width="425px" onClick={this.handleShow} />
                    </Row>
                    <Row style={{display: "flex", justifyContent: "center"}}>
                        <img src={Hotel7} width="425px" onClick={this.handleShow} />
                        <img src={Hotel8} width="425px" onClick={this.handleShow} />
                        <img src={Hotel9} width="425px" onClick={this.handleShow} /> 
                    </Row>
                </Container>   
                 
                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Carousel>
                        <Carousel.Item className="carousel-gallery-item">
                            <img src={Hotel1} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel2} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel3} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel4} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel5} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel6} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel7} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel8} width="100%" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img src={Hotel9} width="100%" />
                        </Carousel.Item>
                    </Carousel>
                </Modal>
            </>
        );
    };
};



export default PhotoGallery;
