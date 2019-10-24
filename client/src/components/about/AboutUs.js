import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import terranova from '../../images/aboutus/terranova.jpg'
import terranova1 from '../../images/aboutus/terranova1.jpg'
import terranova2 from '../../images/aboutus/terranova2.jpg'
import terranova3 from '../../images/aboutus/terranova3.jpg'
import './aboutstyles/AboutUs.css';

const AboutUs = () => (
  <>
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
            <p className="abouttext"> New Earth Cabins represent the greatest western hospitality has to offer, elegance and luxury
              wrapped in the arms of comfort. Lose your senses as you dirft away from the world, and into our blissful oasis.
              Not only do we offer luxury, but we pride ourselves on the experience. Imagine waking up to an early 
              morning yoga class surrounded by the sounds of nature, spending your afternoon on a scenic hike as friendly buffalo roam nearby, 
              then coming home to a gathering around the fire with s'mores aplenty, New Earth is your heart for adventure.  
              Explore everything the area has to offer, or spend the day being pampered at the spa, whatever your definition of a vacation, 
              New Earth delivers.
            </p>
        </div>

        <div className="whyus">
          <h1 className="aboutheader"> Why Guests Choose New Earth Cabins? </h1> 
            <p className="abouttext"> New Earth Cabins is the place to be. For generations, New Earth has been a retreat for everyone. 
              When our founding fathers stumbled upon this land after a long trek on the Oregon Trail, they knew this was someplace special. 
              You can hear song birds chirping and butterfiles sing. Some may call it heaven on earth, if fact some have: "This place is Heaven on 
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
    
  </>
)

export default AboutUs;