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

    popoverCalendar = () => (
        <Popover id="popover-basic">
          <LinkedCalendar onDatesChange={this.onDatesChange} />
        </Popover>
    );
    
    addRoom = () => (
        <>
        </>
    );

    goToBilling = () => this.setState({ step: 3 });

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
                        checkAvailability={this.checkAvailability}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
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
                        addRoom={this.addRoom}
                        goToBilling={this.goToBilling}
                    />
                }
                { this.state.step === 3 && 
                    <Step3
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