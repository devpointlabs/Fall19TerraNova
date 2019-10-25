import React from 'react';
import styled from 'styled-components';
import '../home/homestyles/PhotoGallery.css';
import Logo from '../../images/gallery-logo.png';
import '../home/homestyles/PhotoGallery.css';
// import Carousel, { Modal, ModalGateway } from 'react-images';
import { Modal } from 'react-bootstrap';
import Image3 from '../../images/galleryviewimages/image3.jpg'
import Image4 from '../../images/galleryviewimages/image4.jpg'
import Image5 from '../../images/galleryviewimages/image5.jpg'
import Image6 from '../../images/galleryviewimages/image6.jpg'
import Image7 from '../../images/galleryviewimages/image7.jpg'
import Image8 from '../../images/galleryviewimages/image8.jpg'
import Image9 from '../../images/galleryviewimages/image9.jpg'
import Image10 from '../../images/galleryviewimages/image10.jpg'
import Image11 from '../../images/galleryviewimages/image11.jpg'
import Image12 from '../../images/galleryviewimages/image12.jpg'
import Image13 from '../../images/galleryviewimages/image13.jpg'
import Image14 from '../../images/galleryviewimages/image14.jpg'
import Image15 from '../../images/galleryviewimages/image15.jpg'
import Image16 from '../../images/galleryviewimages/image16.jpg'
import Image17 from '../../images/galleryviewimages/image17.jpg'
import Image18 from '../../images/galleryviewimages/image18.jpg'
import Image19 from '../../images/galleryviewimages/image19.jpg'
import Image20 from '../../images/galleryviewimages/image20.jpg'
import Image21 from '../../images/galleryviewimages/image21.jpg'
import Image22 from '../../images/galleryviewimages/image22.jpg'
import Image23 from '../../images/galleryviewimages/image23.jpg'
import Image24 from '../../images/galleryviewimages/image24.jpg'
import Image25 from '../../images/galleryviewimages/image25.jpg'
import Image26 from '../../images/galleryviewimages/image26.jpg'

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
    padding-bottom: "40px";
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
    state = { 
        show: false,
        picture: 1,
        tab: "hotel"
    };

    changeTab = (tab) => {
        this.setState({ tab });
        switch(tab) {
            case "hotel":
                this.setState({ active: this.state.hotel });
                break;
            case "room":
                this.setState({ active: this.state.room });
                break;
            case "bathroom":
                this.setState({ active: this.state.bathroom });
                break;
            case "dining":
                this.setState({ active: this.state.dining });
                break;
            default:
                this.setState({ active: this.state.hotel });
                break;
        };
    };

    handleClose = () => this.setState({ show: false });

    handleShow = (picture) => this.setState({ show: true, picture });

    renderPictures = () => {
        if (this.state.tab === "hotel") {
            return(
                <Container>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image3} onClick={() => this.handleShow(3)} />
                        <img alt="views" className="gallery-image" src={Image4} onClick={() => this.handleShow(4)} />
                        <img alt="views" className="gallery-image" src={Image5} onClick={() => this.handleShow(5)} />
                    </div>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image6} onClick={() => this.handleShow(6)} />
                        <img alt="views" className="gallery-image" src={Image7} onClick={() => this.handleShow(7)} />
                        <img alt="views" className="gallery-image" src={Image8} onClick={() => this.handleShow(8)} />
                    </div>
                </Container> 
            )
        } else if (this.state.tab === "room") {
            return(
                <Container>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image9} onClick={() => this.handleShow(9)} />
                        <img alt="views" className="gallery-image" src={Image10} onClick={() => this.handleShow(10)} />
                        <img alt="views" className="gallery-image" src={Image11} onClick={() => this.handleShow(11)} />
                    </div>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image12} onClick={() => this.handleShow(12)} />
                        <img alt="views" className="gallery-image" src={Image13} onClick={() => this.handleShow(13)} />
                        <img alt="views" className="gallery-image" src={Image14} onClick={() => this.handleShow(14)} />
                    </div>
                </Container> 
            )
        } else if (this.state.tab === "bathroom") {
            return(
                <Container>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image15} onClick={() => this.handleShow(15)} />
                        <img alt="views" className="gallery-image" src={Image16} onClick={() => this.handleShow(16)} />
                        <img alt="views" className="gallery-image" src={Image17} onClick={() => this.handleShow(17)} />
                    </div>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image18} onClick={() => this.handleShow(18)} />
                        <img alt="views" className="gallery-image" src={Image19} onClick={() => this.handleShow(19)} />
                        <img alt="views" className="gallery-image" src={Image20} onClick={() => this.handleShow(20)} />
                    </div>
                </Container> 
            )
        } else if (this.state.tab === "dining") {
            return(
                <Container>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image21} onClick={() => this.handleShow(21)} />
                        <img alt="views" className="gallery-image" src={Image22} onClick={() => this.handleShow(22)} />
                        <img alt="views" className="gallery-image" src={Image23} onClick={() => this.handleShow(23)} />
                    </div>
                    <div className="gallery-row">
                        <img alt="views" className="gallery-image" src={Image24} onClick={() => this.handleShow(24)} />
                        <img alt="views" className="gallery-image" src={Image25} onClick={() => this.handleShow(25)} />
                        <img alt="views" className="gallery-image" src={Image26} onClick={() => this.handleShow(26)} />
                    </div>
                </Container> 
            )
        }
    }

    render() {
        return (
            <>
                <HeaderContainer>
                    <Header className="galleryhead">Our Gallery</Header>
                    <img alt="views" className="gallery-icon-img" src={Logo} />
                        <Nav>
                            <span className="gallery-tab" onClick={() => this.changeTab("hotel")} style={{color: `${this.state.tab === "hotel" ? "#8e6f37" : "#ababab"}`}}>HOTEL & GROUND</span>
                            <span className="gallery-tab" onClick={() => this.changeTab("room")} style={{color: `${this.state.tab === "room" ? "#8e6f37" : "#ababab"}`}}>ROOM/SUITE</span>  
                            <span className="gallery-tab" onClick={() => this.changeTab("bathroom")} style={{color: `${this.state.tab === "bathroom" ? "#8e6f37" : "#ababab"}`}}>BATHROOM</span>  
                            <span className="gallery-tab" onClick={() => this.changeTab("dining")} style={{color: `${this.state.tab === "dining" ? "#8e6f37" : "#ababab"}`}}>DINING</span>  
                        </Nav>
                </HeaderContainer>
                { this.renderPictures() }
                <Modal 
                    show={this.state.show} 
                    onHide={this.handleClose}
                    size="lg"
                    centered
                >
                    <img alt="views" src={require(`../../images/galleryviewimages/image${this.state.picture}.jpg`)} width="150%" height="150%" />
                </Modal>
            </>
        );
    };
};

export default PhotoGallery;