import React, { createContext, useContext, useState, useEffect } from 'react';
import { Form, NavDropdown, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import "./Reservation.css";
import { LinkedCalendar } from 'rb-datepicker';
import { LinkedCalendarOne } from 'rb-datepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import styled from "styled-components";

const Reservation = () => {
    const [step, setStep] = useState(1);
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(date.getTime());
    const [endDate, setEndDate] = useState();

    /*useEffect( () => {
        setStartDate(this.props.startDate);
        setEndDate(this.props.endDate);
        debugger;
    }, []);*/

    useEffect( () => {
        setStartDate(startDate);
        debugger;
    }, [startDate]);

    useEffect( () => {
        setStartDate(startDate);
        debugger;
    }, [date]);

    const onChange = (startDate, endDate) => {
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const onDatesChange = ({startDate, endDate}) => {
        debugger
        console.log({ startDate, endDate });
        setStartDate(startDate);
        setEndDate(endDate);
    }

    const onDateChange = ({ date }) => {
        console.log(({ date }))
    }

    const popover = (
        <Popover id="popover-basic">
          <LinkedCalendar onDatesChange={onDateChange} />
        </Popover>
    );

    const step1 = () => {
        return(
            <>
                <div className="header-container">
                    <div className="header">Reservation</div>
                </div>
                <div className="menu">
                    <div className="active">
                        <div className="number">1.</div>
                        <div className="text">Choose Date</div>
                    </div>
                    <div className="space" />
                    <div className="number">2.</div>
                    <div className="text">Choose Room</div>
                    <div className="space" />
                    <div className="number">3.</div>
                    <div className="text">Make Reservation</div>
                    <div className="space" />
                    <div className="number">4.</div>
                    <div className="text">Confirmation</div>
                </div>
                <div className="hr-container"><hr style={{marginTop: "-1px", width: "60%"}} /></div>
                <div className="container">
                    <div className="left-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>YOUR RESERVATION</p>
                        <div className="hr-container"><div className="line" /></div>
                        <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>YOUR STAY DATES</p>
                        <span style={{marginLeft: "20px", marginTop: "15px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVE</span>
                        <div className="form-container">
                            <DateForm value="17/12/19" />
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </OverlayTrigger>
                        </div>
                        <span style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "12px"}}>NIGHT(S)</span>
                        <div className="dropdown-container">
                            <CustomDropdown text='1'>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' />
                                    <Dropdown.Item text='2' />
                                    <Dropdown.Item text='3' />
                                    <Dropdown.Item text='4' />
                                    <Dropdown.Item text='5' />
                                    <Dropdown.Item text='6' />
                                    <Dropdown.Item text='7' />
                                    <Dropdown.Item text='8' />
                                    <Dropdown.Item text='9' />
                                    <Dropdown.Item text='10' />
                                    <Dropdown.Item text='10+' />
                                </Dropdown.Menu>
                            </CustomDropdown>
                        </div>
                        <span style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "12px"}}>DEPARTURE</span>
                        <div className="form-container">
                            <DateForm value="17/12/19" />
                            <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                        </div>
                        <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>ROOMS AND GUESTS</p>
                        <span style={{marginLeft: "20px", marginTop: "15px", fontWeight: "bold", fontSize: "12px"}}>ROOM(S)</span>
                        <div className="dropdown-container" style={{marginBottom: "0px !important"}}>
                            <CustomDropdown text='1'>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' />
                                    <Dropdown.Item text='2' />
                                    <Dropdown.Item text='3' />
                                    <Dropdown.Item text='4' />
                                    <Dropdown.Item text='5' />
                                </Dropdown.Menu>
                            </CustomDropdown>
                        </div>
                        <div className="room-container">
                            <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>ROOM 1</span>
                            <div className="small-room-container">
                                <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                                <div className="dropdown-container">
                                    <CustomDropdown text='1'>
                                        <Dropdown.Menu>
                                            <Dropdown.Item text='1' />
                                            <Dropdown.Item text='2' />
                                            <Dropdown.Item text='3' />
                                            <Dropdown.Item text='4' />
                                            <Dropdown.Item text='5' />
                                        </Dropdown.Menu>
                                    </CustomDropdown>
                                </div>
                            </div>
                            <div className="small-room-container">
                                <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                                <div className="dropdown-container">
                                    <CustomDropdown text='1'>
                                        <Dropdown.Menu>
                                            <Dropdown.Item text='1' />
                                            <Dropdown.Item text='2' />
                                            <Dropdown.Item text='3' />
                                            <Dropdown.Item text='4' />
                                            <Dropdown.Item text='5' />
                                        </Dropdown.Menu>
                                    </CustomDropdown>
                                </div>
                            </div>
                        </div>
                        <CustomButton>
                            CHECK AVAILABILITY
                        </CustomButton>
                    </div>
                    <div className="right-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>AVAILABILITY</p>
                        <div className="hr-container"><div className="line" /></div>
                        <LinkedCalendar onDatesChange={() => onDatesChange(startDate, endDate)} showDropdowns={false} showWeekNumbers={false} applyButtonClasses={false} />
                    </div>
                </div>
            </>
        );
    };

    return (
        <>
            { step1() }
        </>
    );
};

const DateForm = styled(Form.Control)`
    border-radius: 0 !important;
    border: 0 !important;
    align-self: center;
`;

const CustomDropdown = styled(Dropdown)`
    width: 100%;
    border: 0 !important;
    font-family: "Nanum Gothic" !important;
`;

const CustomButton = styled(Button)`
    border-radius: 0 !important;
    border: 0 !important;
    background: #8E7037 !important;
    color: white;
    font-size: smaller !important;
    margin-left: 20px;
    margin-top: 10px;
    padding-left: 15px !important;
    padding-right: 15px !important;
    height: 40px;

    &:hover {
        background-color: rgb(223, 193, 141) !important;
    }
`;

export default Reservation;