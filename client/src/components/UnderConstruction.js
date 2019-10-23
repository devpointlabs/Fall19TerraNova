import React from 'react';
import ForestP from '../images/comingsoon/LandingForestPortrait.png'
import './styles/UnderConstruction.css'


const UnderConstruction = () => (
  <>
    <div className="construction">
      <img className="forest-image" src={ForestP} alt="forest" />
      <div className="constructionoverlay1"> 
        <p> Under Construction </p>
      </div>
      <div className="constructionoverlay2"> 
        <p> We're still working on this page. </p>
      </div>
      <div className="constructionoverlay3"> 
        <p> Check back later! </p>
      </div>
    </div>
  
  </>
)

export default UnderConstruction;