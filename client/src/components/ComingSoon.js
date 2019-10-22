import React from 'react';
import Timer from './Timer';
import Forest from '../images/comingsoon/Landing_Forest.png'
import ForestP from '../images/comingsoon/LandingForestPortrait.png'
import Logo from '../images/Terra_Nova_Logo.png'
import './styles/ComingSoon.css'



const ComingSoon = () => {
    const startDate = "2019/10/25 16:00"//new Date().getTime() + 31536000000; // 1 year (Milliseconds Unit)
    return (
      <>
      {window.screen.availWidth > 500 ?

        <div className="comingsoon">
            
            <img className="forest-image" src={Forest} alt="forest" />
        
          <div className="firstoverlay"> 
            <p> COMING SOON </p>
          </div>
          <div className="secondoverlay"> 
            <p> We are hard at work! </p>
          </div>
          <div className="thirdoverlay"> 
            <p> The website will be open in </p>
          </div>
          <div className="timeoverlay"> 
            <Timer startDate={startDate} />
          </div>

          <div className="logooverlay">
            <img src={Logo} alt="logo" width="7.5%"/>
          </div>
          

        </div>

        :
          
        <div className="comingsoon">
            
            <img className="forest-portrait" src={ForestP} alt="forest" />
        
          <div className="firstoverlay"> 
            <p> COMING SOON </p>
          </div>
          <div className="secondoverlay"> 
            <p> We are hard at work! </p>
          </div>
          <div className="thirdoverlay"> 
            <p> The website will be open in </p>
          </div>
          <div className="timeoverlay"> 
            <Timer startDate={startDate} />
          </div>

          <div className="logooverlay">
            <img src={Logo} alt="logo" width="7.5%"/>
          </div>
          

        </div>
        

      }
      
    
      </>
    );
  }





  export default ComingSoon;
