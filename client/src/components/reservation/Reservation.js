import React from 'react';
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import "./reservationstyles/Reservation.css";
import { LinkedCalendar } from './rb-datepicker/dist';
import styled from "styled-components";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import * as dayjs from "dayjs";

class Reservation extends React.Component {
    state = {
        _isMounted: false,
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
        //let now = dayjs();
        //console.log(now.format());
        //debugger
        this.setState({ _isMounted: true })
    }

    onDayClick = ({date}) => {
        console.log(date.format());
        debugger
    }

    checkAvailability = () => {
        if (this.state._isMounted)
            axios.get("/api/avail_cabins", {params: {dates: [this.state.startDate, this.state.endDateDB]}} )
                .then(res => {
                    this.setState({ availableCabins: res.data, step: 2 });
                    debugger
                })
                .catch(err => {
                    console.log(err)
            });
    };

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

    setStartDate = (startDate) => this.setState({ startDate });

    setEndDate = (endDate) => {
        let endDateDB = (parseInt(endDate.substring(0,2), 10)-1).toString();
        endDateDB = endDateDB.concat(endDate.substring(2,));
        let nrNights = parseInt(endDate.substring(0,2), 10) - parseInt(this.state.startDate.substring(0,2), 10);
        this.setState({ endDate, endDateDB, nrNights });
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
        };
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

    popoverCalendar = (
        <Popover id="popover-basic">
          <LinkedCalendar onDatesChange={this.onDatesChange} />
        </Popover>
    );

    renderLeftBox = () => (
        <>
            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>YOUR RESERVATION</p>
            <div className="reservation-hr-container"><div className="reservation-line" /></div>
            <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>YOUR STAY DATES</p>
            <span style={{marginLeft: "20px", marginTop: "5px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVE</span>
            <div className="reservation-form-container">
                <DateForm value={this.state.startDate} readOnly />
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
                <DateForm value={this.state.endDate} readOnly />
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
                <div className="reservation-room-container" key={parseInt(room, 10)-1}>
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
                            <CustomDropdown text={this.state.rooms[parseInt(room, 10)-1][1]} flip="true">
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
        </>
    );

    render() {
        return (
            <>
                <div className="reservation-header-container">
                    <div className="reservation-header">Reservation</div>
                </div>
                { this.state.step === 1 && 
                    <Step1
                        renderLeftBox={this.renderLeftBox}
                        DateForm={DateForm}
                        CustomDropdown={CustomDropdown}
                        checkAvailability={this.checkAvailability}
                        setStartDate={this.setStartDate}
                        setEndDate={this.setEndDate}
                        setNrNights={this.setNrNights}
                        setNrRooms={this.setNrRooms}
                        setNrAdults={this.setNrAdults}
                        setNrChildren={this.setNrChildren}
                        nrNights={this.state.nrNights}
                        nrRooms={this.state.nrRooms}
                        nrRoomsArray={this.state.nrRoomsArray}
                        rooms={this.state.rooms}
                        onDayClick={this.onDayClick}
                    />
                }
                { this.state.step === 2 && 
                    <Step2
                        renderLeftBox={this.renderLeftBox}
                        DateForm={DateForm}
                        CustomDropdown={CustomDropdown}
                        nrRoomsArray={this.state.nrRoomsArray}
                    />
                }
                { this.state.step === 3 && 
                    <Step3
                        DateForm={DateForm}
                        CustomDropdown={CustomDropdown}
                    />
                }
                { this.state.step === 4 && 
                    <Step4
                        DateForm={DateForm}
                        CustomDropdown={CustomDropdown}
                    />
                }
            </>
        );
    };
};

const DateForm = styled(Form.Control)`
    border-radius: 0 !important;
    border: 0 !important;
    align-self: center;
    pointer-events: none;
    background: white !important;
`;

const CustomDropdown = styled(Dropdown)`
    width: 100%;
    border: 0 !important;
    font-family: "Nanum Gothic" !important;
`;

export default Reservation;