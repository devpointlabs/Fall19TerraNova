import React from 'react';
import Foot from './home/Foot';
import './styles/RoomsRates.css'
import styled from 'styled-components'
import mountainview from '../images/rooms/mountainview.jpg'
import lakeview from '../images/rooms/lakeview.jpg'
import cabin3 from '../images/rooms/cabin3.jpg'
 



const RoomsRates = () => (
  <>
    <div className="headcontainer">
      <p className="headtext"> ROOMS & RATES </p>
    </div>

    <div className="rooms">
      <div className="mountainview">
        <p> Mountain View </p>
        <img
            src={mountainview}
            alt="mountainview"
            width="100%"
          />
          <p> Description </p>
          <div className="listcontainer">
            <ul>
              <li> one </li>
              <li> two </li>
            </ul>
            <ul>
              <li> three </li>
              <li> four </li>
            </ul>
          </div>
          <hr width="100%"/>
          <div className="detailscontainer">
            <p> Details </p> 
            <ViewButton> View Details </ViewButton>
          </div>
          <hr width="100%"/>
      </div>

      <div className="lakeview">
        <p> Lake View </p>
        <img
            src={lakeview}
            alt="lakeview"
            width="100%"
          />
          <p> Description </p>
          <div className="listcontainer">
            <ul>
              <li> one </li>
              <li> two </li>
            </ul>
            <ul>
              <li> three </li>
              <li> four </li>
            </ul>
          </div>
          <hr width="100%"/>
          <div className="detailscontainer">
            <p> Details </p> 
            <ViewButton> View Details </ViewButton>
          </div>
          <hr width="100%"/>
      </div>

      <div className="familyroom">
        <p> Family Room </p>
        <img
            src={cabin3}
            alt="familyroom"
            width="100%"
          />
          <p> Description </p>
          <div className="listcontainer">
            <ul>
              <li> one </li>
              <li> two </li>
            </ul>
            <ul>
              <li> three </li>
              <li> four </li>
            </ul>
          </div>
          <hr width="100%"/>
          <div className="detailscontainer">
            <p> Details </p> 
            <ViewButton> View Details </ViewButton>
          </div>
          <hr width="100%"/>
      </div>

      <div className="kirkwood">
        <p> Kirkwood Room </p>
        <img
            src={cabin3}
            alt="kirkwood"
            width="100%"
          />
          <p> Description </p>
          <div className="listcontainer">
            <ul>
              <li> one </li>
              <li> two </li>
            </ul>
            <ul>
              <li> three </li>
              <li> four </li>
            </ul>
          </div>
          <hr width="100%"/>
          <div className="detailscontainer">
            <p> Details </p> 
            <ViewButton> View Details </ViewButton>
          </div>
          <hr width="100%"/>
      </div>
    </div>

    <Foot/>
  </>
)

const ViewButton = styled.button`
  background: #8E7037;
  font-family: Arial, Helvetica, sans-serif;
  border: none;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  outline: none;
  font-size: 14px;
  margin-left: 350px;
 

  &:hover {
    background: #755a29;
    transition: background 0.2s ease;
  }

`;

export default RoomsRates;