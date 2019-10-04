import React from 'react';
import Top from "./Head";
import Rooms from './Rooms';
import About from './About';
import PhotoGallery from './PhotoGallery';
import Quotes from './Quotes';
import Events from './Events';
import Foot from './Foot';

const Home = () => (
  <>
    <Top />
    <About />
    <Quotes />
    <Events />
    {/* <Rooms /> */}
    <PhotoGallery />
    <Foot />

  </>

)

export default Home;
