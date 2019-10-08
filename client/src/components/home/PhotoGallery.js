import React from 'react';
import { Image, Carousel } from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol} from "mdbreact";
import Logo from '../../images/gallery-logo.png';
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
import styled from 'styled-components'
import '../home/homestyles/PhotoGallery.css';


const Container = styled.div` 
    
    left: 0;
    height: 40%;
    width: 100%;
    /* z-index: 1; */
    -webkit-user-select: none;
    background-color: rgb(35, 35, 35);
`

const PhotoContainer = styled.div`
    display: flex;
    background: white;
    justify-content: center;
`;
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
const PhotoGallery = () => (
<>
<Container>
    <Header>Our Gallery</Header>
    <img className="gallery-icon-img" src={Logo} />
    <Nav class="navbar">
        <a href="#Hotel & Ground" style={{marginRight: "60px", fontSize: "20px", color: "#ababab"}}>HOTEL & GROUND</a>
        <a href="#Room/Suite" style={{marginRight: "60px", fontSize: "20px", color: "#ababab"}}>ROOM/SUITE</a>
        <a href="#Bathroom" style={{marginRight: "55px", fontSize: "20px", color: "#ababab"}}>BATHROOM</a>
    </Nav>
    <br />
    <br />
    <br />
    <br />
    <PhotoContainer>

<Carousel interval={false}>
    <Carousel.Item >
    <MDBContainer>
      <MDBRow >
        <MDBCol><Image className="cabin-img" src={Hotel1}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Hotel2} /></MDBCol>
        <MDBCol><Image className="cabin-img" src={Hotel3} /></MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
    <MDBContainer>
      <MDBRow >
        <MDBCol><Image className="cabin-img" src={Hotel4}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Hotel5} /></MDBCol>
        <MDBCol><Image className="cabin-img" src={Hotel6} /></MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
    <MDBContainer>
      <MDBRow >
        <MDBCol><Image className="cabin-img" src={Hotel7}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Hotel8} /></MDBCol>
        <MDBCol><Image className="cabin-img" src={Hotel9} /></MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
    </Carousel.Item>
    <Carousel.Item href="#Room/Suite">
    <MDBContainer>
      <MDBRow label="r#Room/Suite">
        <MDBCol><Image className="cabin-img" src={Room1}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Room2}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Room5}/></MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
    <MDBContainer>
      <MDBRow >
        <MDBCol><Image className="cabin-img" src={Room3}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Room4}/></MDBCol>
        <MDBCol><Image className="cabin-img" src={Room6}/></MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
    </Carousel.Item>
    <Carousel.Item>
    <MDBContainer>
      <MDBRow >
        <MDBCol><Image className="cabin-img" src={Bathroom2}/></MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
    </Carousel.Item>
 </Carousel>
    </PhotoContainer>
</Container>


</>

);
  

export default PhotoGallery;