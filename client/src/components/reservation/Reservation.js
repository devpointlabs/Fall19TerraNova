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
        nrNights: "1",
        nrRooms: "1",
        nrRoomsArray: ["1"],
        rooms: [["0", "0"]], //room: (adults: ?, children: ?)
        aRooms: [],
        bRooms: [],
        familyCabins: [],
        vip1: null,
        vip2: null,
        anyAvailableCabins: true,
        bookedRooms: [],
        bookedRoomLetters: [],
        totalPrice: 0
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
                    this.setState({ 
                        aRooms: res.data.aRooms,
                        bRooms: res.data.bRooms,
                        familyCabins: res.data.familyCabins,
                        vip1: res.data.vip1,
                        vip2: res.data.vip2, 
                        step: 2
                    });
                    this.anyAvailableCabins();
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

    anyAvailableCabins = () => {
        if (this.state.aRooms.length > 0 || 
            this.state.bRooms.length > 0 || 
            this.state.familyCabins.length > 0 ||
            this.state.vip1 ||
            this.state.vip2)
            this.setState({ anyAvailableCabins: true });
        else
            this.setState({ anyAvailableCabins: false });
    };
    
    addRoom = (roomLetter) => {
        let bookedRooms = this.state.bookedRooms;
        let bookedRoomLetters = this.state.bookedRoomLetters;
        let room = null;
        let aRooms = this.state.aRooms;
        let bRooms = this.state.bRooms;
        let familyCabins = this.state.familyCabins;
        let nrRoomsArray = this.state.nrRoomsArray;
        let rooms = this.state.rooms;
        switch(roomLetter) {
            case "A":
                room = this.state.aRooms[0];
                familyCabins = familyCabins.filter( familyCabin => 
                    familyCabin.cabin_number != room.cabin_number );
                break;
            case "B":
                room = this.state.bRooms[0];
                familyCabins = familyCabins.filter( familyCabin => 
                    familyCabin.cabin_number != room.cabin_number );
                break;
            case "F":
                room = this.state.familyCabins[0];
                aRooms = aRooms.filter( aRoom => 
                    aRoom.cabin_number != room.cabin_number );
                bRooms = bRooms.filter( bRoom => 
                    bRoom.cabin_number != room.cabin_number );
                break;
            case "V1":
                room = this.state.vip1;
                break;
            case "V2":
                room = this.state.vip2;
                break;
        }
        bookedRooms.push(room);
        bookedRoomLetters.push(roomLetter);
        rooms.push(["0", "0"]);
        nrRoomsArray.push((nrRoomsArray.length+1).toString());
        this.setState({ aRooms, bRooms, familyCabins, rooms, nrRoomsArray, bookedRooms, bookedRoomLetters });
        this.calculateTotalPrice(bookedRooms);
    };

    calculateTotalPrice = (bookedRooms) => {
        let totalPrice = 0;
        bookedRooms.forEach( room => (
            totalPrice = totalPrice + Math.round(room.cabinPricing.price_total)));
        this.setState({ totalPrice });
    };

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
                        aRooms={this.state.aRooms}
                        bRooms={this.state.bRooms}
                        familyCabins={this.state.familyCabins}
                        vip1={this.state.vip1}
                        vip2={this.state.vip2}
                        anyAvailableCabins={this.state.anyAvailableCabins}
                        addRoom={this.addRoom}
                        goToBilling={this.goToBilling}
                        bookedRooms={this.state.bookedRooms}
                        bookedRoomLetters={this.state.bookedRoomLetters}
                        calculateTotalPrice={this.calculateTotalPrice}
                        totalPrice={this.state.totalPrice}
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