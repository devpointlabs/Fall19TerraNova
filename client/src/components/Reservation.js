import React, { createContext, useContext, useState, useEffect } from 'react';
import { Form, NavDropdown, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import "./styles/Reservation.css";
import { LinkedCalendar } from '../components/rb-datepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import styled from "styled-components";
import axios from "axios";
import "./daterangepicker.css";
import ReactDOM from "react-dom";
import dayjs from 'dayjs';

class Reservation extends React.Component {
    state = {
        step: 1,
        startDate: "",
        endDate: "",
        endDateDB: "",
        availableCabins: [],
        nrNights: "1",
        nrRooms: "1",
        nrRoomsArray: ["1"],
        rooms: [["1", "1"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"]] //room: (adults: ?, children: ?)
    }

    componentDidMount() {
        this.ticker = setInterval( () => this.tick(), 500 );
        let dateString = document.getElementsByClassName("drp-selected")[0].innerText;
        let offDates = document.getElementsByClassName("off");
        for (var i = 0; i < offDates.length; i++) {
            offDates[i].onclick = null;
        }
        let startDate = dateString.substring(0, 10);
        let endDate = dateString.substring(13);
        this.setState({ startDate: startDate, endDate: endDate });
        debugger;
    }

    tick = () => {
        let dateString = document.getElementsByClassName("drp-selected")[0].innerText;
        if (dateString != "") {
            let startDate = dateString.substring(0, 10);
            let endDate = dateString.substring(13);
            this.setState({ startDate: startDate, endDate: endDate });
        }
    }

    formatDate = (date) => {
        if (date != "") {
            let year = date.substring(0, 4);
            let month = date.substring(5, 7);
            let day = date.substring(8, 10);
            return `${day}/${month}/${year}`;
        }
    }

    onDatesChange = ({startDate, endDate}) => {
        let startMonth = startDate.$M + 1
        if (startMonth < 10)
            startMonth = `0${startMonth}`
        let startDay = startDate.$D
        if (startDay < 10)
            startDay = `0${startDay}`
        let endMonth = endDate.$M + 1
        if (endMonth < 10)
            endMonth = `0${endMonth}`
        let endDay = endDate.$D
        let endDayDB = endDate.$D - 1
        if (endDay < 10)
            endDay = `0${endDay}`
        if (endDayDB < 10)
            endDayDB = `0${endDayDB}`
        let startDateString = `${startDate.$y}-${startMonth}-${startDay}`
        let endDateString = `${endDate.$y}-${endMonth}-${endDay}`
        let endDateDBString = `${endDate.$y}-${endMonth}-${endDayDB}`
        let startDateFormatted = this.formatDate(startDateString);
        let endDateFormatted = this.formatDate(endDateString);
        let endDateDBFormatted = this.formatDate(endDateDBString);
        this.setState({startDate: startDateFormatted});
        this.setState({endDate: endDateFormatted});
        this.setState({endDateDB: endDateDBFormatted});
    }

    onDayClick = ({date}) => {
        debugger
        console.log(date)
    }

    popoverCalendar = (
        <Popover id="popover-basic">
          <LinkedCalendar onDatesChange={this.onDatesChange} />
        </Popover>
    );

    checkAvailability = () => {
        axios.get("/api/avail_cabins", {params: {dates: [this.state.startDate, this.state.endDate]}} )
            .then(res => {
                this.setState({ availableCabins: res.data, step: 2 });
            })
            .catch(err => {
                console.log(err)
        })
    }

    setNrNights = (nrNights) => this.setState({ nrNights });

    setNrRooms = (nrRooms) => {
        this.setState({ nrRooms });
        switch(nrRooms) {
            case "1":
                this.setState({ nrRoomsArray: ["1"] });
                break;
            case "2":
                this.setState({ nrRoomsArray: ["1", "2"] });
                break;
            case "3":
                this.setState({ nrRoomsArray: ["1", "2", "3"] });
                break;
            case "4":
                this.setState({ nrRoomsArray: ["1", "2", "3", "4"] })
                break;
            case "5":
                this.setState({ nrRoomsArray: ["1", "2", "3", "4", "5"] })
                break;
        }
    };

    setNrAdults = (room, nrAdults) => {
        let rooms = this.state.rooms;
        rooms[parseInt(room.room, 10)-1][0] = nrAdults;
        this.setState({ rooms });
    };

    setNrChildren = (room, nrChildren) => {
        let rooms = this.state.rooms;
        rooms[parseInt(room.room, 10)-1][1] = nrChildren;
        this.setState({ rooms });
    };

    step1 = () => {
        return(
            <>
                <div className="reservation-header-container">
                    <div className="reservation-header">Reservation</div>
                </div>
                <div className="reservation-menu">
                    <div className="reservation-active">
                        <div className="reservation-number">1.</div>
                        <div className="reservation-text">Choose Date</div>
                    </div>
                    <div className="reservation-space" />
                    <div className="reservation-number">2.</div>
                    <div className="reservation-text">Choose Room</div>
                    <div className="reservation-space" />
                    <div className="reservation-number">3.</div>
                    <div className="reservation-text">Make Reservation</div>
                    <div className="reservation-space" />
                    <div className="reservation-number">4.</div>
                    <div className="reservation-text">Confirmation</div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "60%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>YOUR RESERVATION</p>
                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>YOUR STAY DATES</p>
                        <span style={{marginLeft: "20px", marginTop: "5px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVE</span>
                        <div className="reservation-form-container">
                            <DateForm value={this.state.startDate} />
                            <OverlayTrigger trigger="click" placement="right" overlay={this.popoverCalendar}>
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </OverlayTrigger>
                        </div>
                        <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>NIGHT(S)</span>
                        <div className="reservation-dropdown-container">
                            <CustomDropdown text={this.state.nrNights}>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' onClick={() => this.setNrNights('1')} />
                                    <Dropdown.Item text='2' onClick={() => this.setNrNights('2')} />
                                    <Dropdown.Item text='3' onClick={() => this.setNrNights('3')} />
                                    <Dropdown.Item text='4' onClick={() => this.setNrNights('4')} />
                                    <Dropdown.Item text='5' onClick={() => this.setNrNights('5')} />
                                    <Dropdown.Item text='6' onClick={() => this.setNrNights('6')} />
                                    <Dropdown.Item text='7' onClick={() => this.setNrNights('7')} />
                                    <Dropdown.Item text='8' onClick={() => this.setNrNights('8')} />
                                    <Dropdown.Item text='9' onClick={() => this.setNrNights('9')} />
                                    <Dropdown.Item text='10' onClick={() => this.setNrNights('10')} />
                                    <Dropdown.Item text='10+' onClick={() => this.setNrNights('10+')} />
                                </Dropdown.Menu>
                            </CustomDropdown>
                        </div>
                        <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>DEPARTURE</span>
                        <div className="reservation-form-container">
                            <DateForm value={this.state.endDate} />
                            <OverlayTrigger trigger="click" placement="right" overlay={this.popoverCalendar}>
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </OverlayTrigger>
                        </div>
                        <p style={{marginLeft: "20px", marginTop: "10px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>ROOMS AND GUESTS</p>
                        <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>ROOM(S)</span>
                        <div className="reservation-dropdown-container" style={{marginBottom: "0px !important"}}>
                            <CustomDropdown text={this.state.nrRooms}>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' onClick={() => this.setNrRooms('1')} />
                                    <Dropdown.Item text='2' onClick={() => this.setNrRooms('2')} />
                                    <Dropdown.Item text='3' onClick={() => this.setNrRooms('3')} />
                                    <Dropdown.Item text='4' onClick={() => this.setNrRooms('4')} />
                                    <Dropdown.Item text='5' onClick={() => this.setNrRooms('5')} />
                                </Dropdown.Menu>
                            </CustomDropdown>
                        </div>
                        
                            { this.state.nrRoomsArray.map( room => (
                                <div className="reservation-room-container" id={parseInt(room, 10)-1}>
                                    <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px", width: "25%"}}>ROOM {room}</span>
                                    <div className="reservation-small-room-container">
                                        <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                                        <div className="reservation-dropdown-container">
                                            <CustomDropdown text={this.state.rooms[parseInt(room, 10)-1][0]}>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item text='1' onClick={() => this.setNrAdults({room}, '1')} />
                                                    <Dropdown.Item text='2' onClick={() => this.setNrAdults({room}, '2')} />
                                                    <Dropdown.Item text='3' onClick={() => this.setNrAdults({room}, '3')} />
                                                    <Dropdown.Item text='4' onClick={() => this.setNrAdults({room}, '4')} />
                                                    <Dropdown.Item text='5' onClick={() => this.setNrAdults({room}, '5')} />
                                                </Dropdown.Menu>
                                            </CustomDropdown>
                                        </div>
                                    </div>
                                    <div className="reservation-small-room-container" style={{width: "30%", marginRight: "15px"}}>
                                        <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                                        <div className="reservation-dropdown-container">
                                            <CustomDropdown text={this.state.rooms[parseInt(room, 10)-1][1]} flip={true}>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item text='1' onClick={() => this.setNrChildren({room}, '1')} />
                                                    <Dropdown.Item text='2' onClick={() => this.setNrChildren({room}, '2')} />
                                                    <Dropdown.Item text='3' onClick={() => this.setNrChildren({room}, '3')} />
                                                    <Dropdown.Item text='4' onClick={() => this.setNrChildren({room}, '4')} />
                                                    <Dropdown.Item text='5' onClick={() => this.setNrChildren({room}, '5')} />
                                                </Dropdown.Menu>
                                            </CustomDropdown>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        
                        <div className="reservation-button-container">
                            <span className="reservation-custom-button" onClick={this.checkAvailability}>
                                CHECK AVAILABILITY
                            </span>
                        </div>
                    </div>
                    <div className="reservation-right-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>AVAILABILITY</p>
                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        <LinkedCalendar onDayClick={this.onDayClick} applyButtonClasses="" buttonClasses="" onDatesChange={this.onDatesChange} singleDatePicker={true} onChange={this.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} >

                        </LinkedCalendar>
                    </div>
                </div>
            </>
        );
    };

    render() {
        return (
            <>
                { this.state.step === 1 && this.step1() }
            </>
        );
    };
};

const DateForm = styled(Form.Control)`
    border-radius: 0 !important;
    border: 0 !important;
    align-self: center;
    pointer-events: none;
`;

const CustomDropdown = styled(Dropdown)`
    width: 100%;
    border: 0 !important;
    font-family: "Nanum Gothic" !important;
`;

export default Reservation;