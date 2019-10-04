import React, {useState} from 'react';
import { Carousel, Card } from 'react-bootstrap';
import styled from 'styled-components';
import cabin1 from '../../images/rooms/cabin1.jpg';
import lakeview from '../../images/rooms/lakeview.jpg';
import cabin3 from '../../images/rooms/cabin3.jpg';
import mountainview from '../../images/rooms/mountainview.jpg';
import logo2 from '../../images/rooms/logo2.png'
import './homestyles/Room.css'



const Rooms = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  //enlarge arrows

  return (
    <Container >
      <br/>
      <br/>
      <br/>
      <Header> Our Rooms </Header>
      <br/>
      <img className= "room-icon-img" src={logo2}/>
      <Description> Terra Nova provides the perfect location for your Montana retreat. </Description>
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
                <Card.Img variant="top" src={lakeview} />
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
                <Card.Img variant="top" src={mountainview} />
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
                <Card.Img variant="top" src={lakeview} />
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
          <SlideContainer>
            <CardContainer>
              <Card style={{ width: '27rem' }}>
                <Card.Img variant="top" src={cabin3} />
                <Card.Body>
                  <Card.Title> Cabin </Card.Title>
                  <Card.Text>
                    Price
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card style={{ width: '27rem' }}>
                <Card.Img variant="top" src={mountainview} />
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
            </CardContainer>

            <CardContainer>
              <Card style={{ width: '27rem' }}>
                <Card.Img variant="top" src={lakeview} />
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

              <Card style={{ width: '27rem' }}>
                <Card.Img variant="top" src={mountainview} />
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
  align-items: center;
  align-content: center;
  margin-left: 400px;
  margin-right: 400px;
  display: flex;
  font-family: 'Raleway', sans-serif;
  
`;

const Container = styled.div`
  background-color: #f2f2f2;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-around;
  flex-wrap: wrap;
  margin-right: 100px;
  margin-left: 100px;
  margin-bottom: 8px;
  margin-top: 8px;
  padding-bottom: 8px;
  padding-top: 8px;
  
`;

const SlideContainer = styled.div`
  margin-bottom: 100px
`;

export default Rooms;



