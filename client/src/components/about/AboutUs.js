import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import terranova from '../../images/aboutus/terranova.jpg'
import terranova1 from '../../images/aboutus/terranova1.jpg'
import terranova2 from '../../images/aboutus/terranova2.jpg'
import terranova3 from '../../images/aboutus/terranova3.jpg'
import './aboutstyles/AboutUs.css';

const AboutUs = () => (
  <>
    {/* <div className="aboutcontainer"> */}

      <div className="aboutheadcontainer">
        <p className="header"> ABOUT US </p>
      </div>

      <div className="aboutuscontianer">
        <div className="aboutcarousel">
          <Carousel >
            <Carousel.Item>
              <img
                src={terranova2}
                alt="First slide"
                width="100%"
                />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={terranova1}
                alt="Second slide"
                width="100%"
                />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={terranova}
                alt="Third slide"
                width="100%"
                />
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="aboutus">
          <h1 className="aboutheader"> About Us </h1>
            <p className="abouttext"> Terra Nova Cabins represent the best in western hospitality and comfort, wrapped in a contemporary expression 
              that will inspire your own unique adventures. Both a haven from the world and a basecamp for adventure,
              Terra Nova Cabins is your new Southwestern Montana destination rental. From early morning walks near the lake, 
              to late night gatherings around a fire, Terra Nova provides the perfect location for your Montana retreat. 
              Explore Yellowstone's natural beauty, or simply stay snuggled up in our cozy cabins and enjoy the views from 
              the inside out.</p>
        </div>

        <div className="whyus">
          <h1 className="aboutheader"> Why Guests Choose Terra Nova Cabins? </h1> 
            <p className="abouttext"> Terra Nova Cabins is the place to be. For generations, Terra Nova has been a retreat for everyone. When our founding 
              fathers found Terra Nova after a long trek on the Oregon Trail, they knew this was someplace special. You can hear 
              song birds chirping and butterfiles sing. Some may call it heaven on earth, if fact some have: "This place is Heaven on 
              Earth" -Mary Margeret Morrision. Don't take it from Mary though, come experience the magic for yourself. </p>
        </div>

        <div className="lakeimg">
          <img
            src={terranova3}
            alt="lake"
            width="100%"
            />
        </div>
      </div>
    {/* </div> */}
  </>
)

export default AboutUs;