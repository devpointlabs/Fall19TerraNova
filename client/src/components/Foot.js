import React, {useState, } from 'react';
import icon from '../images/foot/icon.png'
import mail from '../images/foot/mail.png'
import send from '../images/foot/sendarrow.png'
import paymenticons from '../images/foot/paymenticons.png'
import { Dropdown, Form } from "semantic-ui-react"; 
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
import axios from "axios";
import './styles/Foot.css'




const Foot = () => {
  const [email, setEmail] = useState("");


  const handleSubmit = (e) => {
    axios.get(`/api/contact?email=${email}`)
      .then( () => {
        // message "email sent"
        setEmail("");
    
      })
  }

  
  return (
  <>

  {window.screen.availWidth > 825 ?

    <div>

      <div className="email-container">
        <a href="/contact">  
          <img className= "mail-icon" src={mail} alt="mail" />
        </a>
        <div className="emailbar">
          <Form onSubmit={handleSubmit} >
                <StyledInput
                  name="email"
                  placeholder="Your email address"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
          </Form>
          <div className="submitbutton">
            <StyledButton type="submit"> 
              <img src={send} alt={send} width="45%"/>
             </StyledButton>
          </div>
        </div>
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
          <a className="link" href="/contact"> Help </a>
          <br/>
          <a className="link" href="/underconstruction"> Affiliate </a>
        </div>

        <div className="center-links">
          <a className="link" href="/about"> Our Location </a>
          <br/>
          <a className="link" href="/underconstruction"> Career </a>
          <br/>
          <a className="link" href="/about"> About Us </a>
          <br/>
          <a className="link" href="/contact"> Contact Us </a>
        </div> 

        <div className="right-links">
          <a className="link" href="/underconstruction"> FAQS </a>
          <br/>
          <a className="link" href="/underconstruction"> News </a>
          <br/>
          <a className="link" href="/gallery"> Photo & Video </a>
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
          <NavLink to="/underconstruction">
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
          <NavLink to="/underconstruction">
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
          <NavLink to="/underconstruction">
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
}

const CustomDropdown = styled(Dropdown)`
  width: 200%;
  border: 0;
  font-family: 'Playfair Display', serif;
`;

const StyledInput = styled(Form.Input)`
  
    & > div {  
      & > input {
        color: white !important;
        background-color: rgb(62, 62, 62) !important;
        border-radius: 0em !important;
        padding-top: 1.4em !important;
        padding-bottom: 1.4em !important;
        padding-left: 2em !important;
        
        &::-webkit-input-placeholder {
        color: white !important ;
        font-size: 1.1em !important;
        font-family: 'Raleway', sans-serif;
      }
    }
  }
`;

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background: rgb(62, 62, 62);
  border-right: 0em;
  border-top: 0em;
  border-bottom: 0em;
  border-left: .1em solid rgb(76, 76, 76);
  cursor: pointer;
  outline: none;
  transition: background 0.2s ease;
  width: 6em;
  height: 4.15em;


`;

export default Foot;


