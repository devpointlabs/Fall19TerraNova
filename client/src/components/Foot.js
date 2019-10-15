import React from 'react';
import icon from '../images/foot/icon.png'
import mail from '../images/foot/mail.png'
import paymenticons from '../images/foot/paymenticons.png'
import { Dropdown } from "semantic-ui-react"; 
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import './styles/Foot.css'


const Foot = () => (
  <>

  {window.screen.availWidth > 850 ?

    <div>

      <div className="email-container">
        <img className= "mail-icon" src={mail} alt="mail" />
      </div>
      

      <div className="link-container">
        <img className= "foot-icon" src={icon} alt="icon" />
        
        <hr className="line"/>
        
        <div className="copyright">
          <div className="cpy-container">
            <p style={{color: "#727272"}}> Copyright @ 2019 by </p>
          </div>
          <div className="dps-container">
            <p style={{color: "white"}}> DevPointStudios LLC</p> 
          </div>
        </div>

        <div className="left-links">
          <a className="link" href="/underconstruction"> Site Map </a>
          <br/>
          <a className="link" href="/termsconditions"> Terms & Conditions </a>
          <br/>
          <a className="link" href="/underconstruction"> Privacy Policy </a>
          <br/>
          <a className="link" href="/underconstruction"> Help </a>
          <br/>
          <a className="link" href="/underconstruction"> Affiliate </a>
        </div>

        <div className="center-links">
          <a className="link" href="/underconstruction"> Our Location </a>
          <br/>
          <a className="link" href="/underconstruction"> Career </a>
          <br/>
          <a className="link" href="/underconstruction"> About Us </a>
          <br/>
          <a className="link" href="/underconstruction"> Contact Us </a>
        </div> 

        <div className="right-links">
          <a className="link" href="/underconstruction"> FAQS </a>
          <br/>
          <a className="link" href="/underconstruction"> News </a>
          <br/>
          <a className="link" href="/underconstruction"> Photo & Video </a>
          <br/>
          <a className="link" href="/underconstruction"> Restaurant </a>
          <br/>
          <a className="link" href="/underconstruction"> Gift Card </a>
        </div>

        <div className="icon-container">
          <img className= "payment-icon" src={paymenticons} alt="payments" />
        </div>
        
      </div>
    </div>
  

  :

    <div className="mobilecontainer">
      <hr/>
      <CustomDropdown className="droplabel" placeholder="Help">
        <Dropdown.Menu>
          <NavLink to="/underconstruction">
            <Dropdown.Item className="droplink" text='Site Map' />
          </NavLink>
          <NavLink to="/termsconditions">
            <Dropdown.Item text='Terms & Conditions' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Privacy Policy' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Help' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Affiliate' />
          </NavLink>
        </Dropdown.Menu>
      </CustomDropdown>
      <hr/>
      <CustomDropdown placeholder="Info">
        <Dropdown.Menu>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Our Location'/>
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Career' />
          </NavLink>
          <NavLink to="/termsconditions">
            <Dropdown.Item text='About Us' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Contact Us' />
          </NavLink>
        </Dropdown.Menu>
      </CustomDropdown>
      <hr/>
      <CustomDropdown placeholder="FAQ">
        <Dropdown.Menu>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='FAQ' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='New' />
          </NavLink>
          <NavLink to="/termsconditions">
            <Dropdown.Item text='Photo & Video' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Restaurant' />
          </NavLink>
          <NavLink to="/underconstruction">
            <Dropdown.Item text='Gift Card' />
          </NavLink>
        </Dropdown.Menu>
      </CustomDropdown>
      <hr/>
    </div>

  }
  </>
)

const CustomDropdown = styled(Dropdown)`
  width: 200%;
  border: 0;
  font-family: 'Playfair Display', serif;
`;

export default Foot;


