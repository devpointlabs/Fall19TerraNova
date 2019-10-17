import React from 'react';
import './homestyles/News.css';
import styled from 'styled-components';
import line from '../../images/events/line.png'



const News = () => (
<>
  <Header> News </Header>
    <hr className="news-line-img"  />
  <div className="newscontainer">
    <div className="newsone">
      <span> Day </span>
      <span> Month/ Year </span>
      <p> Description </p>
      <a className="newslink" href="/underconstruction"> Read More </a>
    </div>
    <div className="newstwo">

    </div>
    <div className="newsthree">

    </div>
  </div>
</>
);

const Header = styled.h1`
  display: flex;
  margin-top: 70px;
  margin-left: 135px;
  color: black;
  font-size: 50px;  
  font-family: 'Playfair Display', serif;
`;


export default News;