import React, {useState} from 'react';
import { Carousel, Card } from 'react-bootstrap';
import styled from 'styled-components';
import cabin1 from '../../images/cabin1.jpg';
import cabin2 from '../../images/cabin2.jpg';
import cabin3 from '../../images/cabin3.jpg';
import cabin4 from '../../images/cabin4.jpg';
import logo2 from '../../images/logo2.png'
import './homestyles/Room.css'



const Rooms = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Container >
      <br/>
      <br/>
      <br/>
      <Header> Our Rooms </Header>
      <br/>
      <img className= "icon-img" src={logo2}/>
      <Description> Words to write under this headline, enhancing the desire for a booking. </Description>
      <br/>
      <Carousel interval={false} activeIndex={index} direction={direction} onSelect={handleSelect}>
        <Carousel.Item>
          <SlideContainer>


          <CardContainer>
            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin1} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin2} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin3} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>
          </CardContainer>
          <CardContainer>
            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin4} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin1} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin2} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>
          </CardContainer>
          </SlideContainer>
        </Carousel.Item>

        <Carousel.Item>
          <CardContainer>
            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin1} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin2} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin3} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>
          </CardContainer>

          <CardContainer>
            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin4} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin1} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>

            <Card style={{ width: '27rem' }}>
              <Card.Img variant="top" src={cabin2} />
              <Card.Body>
                <Card.Title> Cabin </Card.Title>
                <Card.Text>
                  Price
                </Card.Text>
              </Card.Body>
            </Card>
          </CardContainer>
        </Carousel.Item>

      </Carousel>
         
    </Container>
  );
}

const Header = styled.h1`
  color: black;
  font-size: 50px;
  /* align-items: center; */
  justify-content: center;
  display: flex;
  font-family: 'Playfair Display', serif;
  
`;

const Description = styled.h2`
  color: black;
  font-size: 20px;
  /* align-items: center; */
  justify-content: center;
  display: flex;
  font-family: 'Nanum Gothic', sans-serif;
  
`;

const Container = styled.div`
  background-color: #f2f2f2;
`;

const CardContainer = styled.div`
  display: flex !important;
  justify-content: space-evenly !important;
  align-content: space-around !important;
  flex-wrap: wrap !important;
  margin-right: 100px !important;
  margin-left: 100px !important;
  margin-bottom: 8px !important;
  margin-top: 8px !important;
  padding-bottom: 8px !important;
  padding-top: 8px !important;
  
`;

const SlideContainer = styled.div`
  margin-bottom: 100px
`;

export default Rooms;



