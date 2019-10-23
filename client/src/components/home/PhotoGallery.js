import React from 'react';
import styled from 'styled-components';
import '../home/homestyles/PhotoGallery.css';
import Logo from '../../images/gallery-logo.png';
import '../home/homestyles/PhotoGallery.css';
// import Carousel, { Modal, ModalGateway } from 'react-images';
import { Modal, Row } from 'react-bootstrap';
import Hotel1 from '../../images/Hotel1.jpg';
import Hotel2 from '../../images/Hotel2.jpg';
import Hotel3 from '../../images/Hotel3.jpg';
import Hotel4 from '../../images/Hotel4.jpg';
import Hotel5 from '../../images/Hotel5.jpg';
import Hotel6 from '../../images/Hotel6.jpg';
import Hotel7 from '../../images/Hotel7.jpg';
import Hotel8 from '../../images/Hotel8.jpg';
import Hotel9 from '../../images/Hotel9.jpg';
// import Room1 from '../../images/Room1.jpg';
// import Room2 from '../../images/Room2.jpg';
// import Room3 from '../../images/Room3.jpg';
// import Room4 from '../../images/Room4.jpg';
// import Room5 from '../../images/Room5.jpg';
// import Room6 from '../../images/Room6.jpg';
// import Bathroom2 from '../../images/Bathroom2.jpg';

const Container = styled.div`
    left: 0;
    height: 40%;
    width: 100%;
    -webkit-user-select: none;
    background-color: rgb(35, 35, 35);
    padding: 1em 4.5% 5em 4.5%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

const HeaderContainer = styled.div`
    left: 0;
    height: 40%;
    width: 100%;
    -webkit-user-select: none;
    background-color: rgb(35, 35, 35);
    padding-bottom: "30px";
`;

const Header = styled.span`
    display: flex;
    justify-content: center;
    font-family: 'Playfair Display', serif;
    font-size: 50px;
    color: white;
    padding: 30px 0 5px 0;
`;

const Nav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1em;
`;

class PhotoGallery extends React.Component {
    state = { show: false, picture: 1 };

    handleClose = () => this.setState({ show: false });

    handleShow = (picture) => this.setState({ show: true, picture });

    render() {
        
        return (
            <>
                <HeaderContainer>
                    <Header>Our Gallery</Header>
                    <img alt="views" className="gallery-icon-img" src={Logo} />
                        <Nav>
                            <a href="#Hotel & Ground" style={{fontFamily: 'Catamaran', marginRight: "60px", fontSize: "16px", color: "#ababab"}}>HOTEL & GROUND</a>
                            <a href="#Room/Suite" style={{fontFamily: 'Catamaran', marginRight: "60px", fontSize: "16px", color: "#ababab"}}>ROOM/SUITE</a>
                            <a href="#Bathroom" style={{fontFamily: 'Catamaran', marginRight: "55px", fontSize: "16px", color: "#ababab"}}>BATHROOM</a>
                            <a href="#Bathroom" style={{fontFamily: 'Catamaran', marginRight: "55px", fontSize: "16px", color: "#ababab"}}>DINING</a>
                        </Nav>
                </HeaderContainer>
                <Container>
                    <Row style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img alt="views" className="gallery-image" src={Hotel1} onClick={() => this.handleShow(1)} />
                        <img alt="views" className="gallery-image" src={Hotel2} onClick={() => this.handleShow(2)} />
                        <img alt="views" className="gallery-image" src={Hotel3} onClick={() => this.handleShow(3)} />
                    </Row>
                    <Row style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img alt="views" className="gallery-image" src={Hotel4} onClick={() => this.handleShow(4)} />
                        <img alt="views" className="gallery-image" src={Hotel5} onClick={() => this.handleShow(5)} />
                        <img alt="views" className="gallery-image" src={Hotel6} onClick={() => this.handleShow(6)} />
                    </Row>
                    <Row style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
                        <img alt="views" className="gallery-image" src={Hotel7} onClick={() => this.handleShow(7)} />
                        <img alt="views" className="gallery-image" src={Hotel8} onClick={() => this.handleShow(8)} />
                        <img alt="views" className="gallery-image" src={Hotel9} onClick={() => this.handleShow(9)} /> 
                    </Row>
                </Container>   
                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    size="lg"
                    centered
                >
                    <img alt="views" src={require(`../../images/Hotel${this.state.picture}.jpg`)} width="200%" />
                </Modal>
            </>
        );
    };
};

export default PhotoGallery;