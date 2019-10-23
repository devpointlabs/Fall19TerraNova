import React from 'react';
import './homestyles/News.css';
import styled from 'styled-components';



const News = () => (
<>
  <Header> News </Header>
    <hr className="news-line-img"  />
  
  <div className="newscontainer">
    <div className="newsone">
      <div className="newsday">
        <span className="day"> 25 </span>
      </div>
      <div className="newsmonth">
        <p className="month"> October </p>
        <p className="year"> 2019 </p>
      </div>
      <div className="newsdescription">
        <p> Launch Day for Devination Cabins! </p>
      </div>
      <a className="newslink" href="/underconstruction"> Read More </a>
    </div>


    <div className="newstwo">
      <div className="newsday">
          <span className="day"> 16 </span>
        </div>
        <div className="newsmonth">
          <p className="month"> October </p>
          <p className="year"> 2019 </p>
        </div>
        <div className="newsdescription">
          <p> Controlled Burn Restores Vegetation </p>
        </div>
        <a className="newslink" href="/underconstruction"> Read More </a>
    </div>
    <div className="newsthree">
      <div className="newsday">
            <span className="day"> 02 </span>
          </div>
          <div className="newsmonth">
            <p className="month"> October </p>
            <p className="year"> 2019 </p>
          </div>
          <div className="newsthreedescription">
            <p> Seismic Activity Shaking Up Yellowstone </p>
          </div>
          <a className="newsthreelink" href="/underconstruction"> Read More </a>
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