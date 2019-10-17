import React, {useState} from "react";
import styled from "styled-components";
import { Form, } from "semantic-ui-react";
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";
import './styles/Contact.css'
import Location from '../images/contact/LocationIcon.png'
import Mail from '../images/contact/MailIcon.png'
import Phone from '../images/contact/PhoneIcon.png'
import Buffalo from '../images/contact/BuffaloImg.jpg'


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    axios.get(`/api/contact?name=${name}&email=${email}&subject=${subject}&message=${message}`)
      .then( () => {
        // message "email sent"
        setShowModal(true);
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
        console.log("Email Sent!")
      })
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <>
      <div className="contacthead">
        <p className="headtext"> Contact Us </p>
      </div>

      <div className="contactbody">
        <div className="contacttext">
          <div className="texttop">
            <p> CONTACT</p>
          </div>
          <div className="textbody">
            <p> Have questions? Concerns? Send us an email and we will be glad to answer them. How much wood could a woodchuck chuck? 
              We want to know too. Ask our experts and find out. The variations of quantum space and time are on our mind too. No 
              question is too far fetched. It's these things that help us to enhance your experience at Terra Nova. 
            </p>
          </div>
          <div className="contactdetails">
            <div className="address">
              <img src={Location} alt="locationicon" width="06%"/>
                <span> 35 Kirkwood Creek Road, West Yellowstone, MT. </span>
            </div>
            <div className="phone">
              <img src={Phone} alt="phoneicon" width="07%"/>
                <span> 1-709-543-2260</span>
            </div>
            <div className="email">
              <img src={Mail} alt="mailicon" width="08%"/>
                <span> info@terranovacabins.com</span>
            </div>
          </div>
        </div>


        <div className="contactform">
          <Form onSubmit={handleSubmit} >
            <div className="topline">
              <div className="topline-column">
              <StyledInput
                name="name"
                placeholder="Name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              </div>
              <div className="topline-column2">
              <StyledInput
                name="email"
                placeholder="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
              </div>
            </div>

            <StyledInput
              name="subject"
              placeholder="Subject"
              type="text"
              value={subject}
              onChange={e => setSubject(e.target.value)}
            />
            <StyledTextArea
              name="message"
              placeholder="Message"
              type="text"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <StyledButton type="submit"> SEND </StyledButton>
          </Form>
        </div>
      </div>

      <div className="contactpic">
        <img src={Buffalo} alt="westyellowstone" width="100%"/>
      </div>
      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header>
          Email sent!
        </Modal.Header>
      </Modal>
    </>
  )
}

const StyledInput = styled(Form.Input)`

  & > div {  
    & > input {
      border-color: black !important;
      border-width: .15em !important;
      border-radius: 0em !important;
      width: 100em;
    }
  }
`;

const StyledTextArea = styled(Form.TextArea)`

  & > textarea {
    border-color: black !important;
    border-width: .15em !important;
    border-radius: 0em !important;
    height: 200px;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  background: rgb(142, 112, 55);
  border: none;
  color: white;
  cursor: pointer;
  outline: none;
  transition: background 0.2s ease;
  width: 12em;
  height: 2.5em;

  &:hover {
    background: #755a29;
    transition: background 0.2s ease;
  }
`;


export default Contact;






