import React from 'react';
import { Form } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import "./reservationstyles/Reservation.css";
import styled from "styled-components";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";

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
        this.setState({ _isMounted: true })
    }

    checkAvailability = () => {
        debugger
        if (this.state._isMounted)
            axios.get("/api/avail_cabins", {params: {dates: [this.state.startDate, this.state.endDate]}} )
                .then(res => {
                    debugger
                    this.setState({ availableCabins: res.data, step: 2 });
                })
                .catch(err => {
                    debugger
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

    setEndDate = (endDate) => this.setState({ endDate });

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

    render() {
        return (
            <>
                <div className="reservation-header-container">
                    <div className="reservation-header">Reservation</div>
                </div>
                { this.state.step === 1 && 
                    <Step1 
                        DateForm={DateForm}
                        CustomDropdown={CustomDropdown}
                        checkAvailability={this.checkAvailability}
                        setStartDate={this.setStartDate}
                        setEndDate={this.setEndDate}
                        setNrNights={this.setNrNights}
                        setNrRooms={this.setNrRooms}
                        setNrAdults={this.setNrAdults}
                        setNrChildren={this.setNrChildren}
                    />
                }
                { this.state.step === 2 && 
                    <Step2 
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