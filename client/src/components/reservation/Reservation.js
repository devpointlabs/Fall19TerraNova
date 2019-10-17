import React from 'react';
import { Form, OverlayTrigger, Popover } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import "./reservationstyles/Reservation.css";
import styled from "styled-components";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import * as dayjs from "dayjs";

class Reservation extends React.Component {
    state = {
        _isMounted: false,
        _redirection: false,
        step: 1,
        startDate: "",
        startDateString: "",
        startDateDB: "",
        endDate: "",
        endDateString: "",
        endDateDB: "",
        chooseStartDate: true,
        chooseEndDate: false,
        nrNights: "1",
        nrRooms: "1",
        nrRoomsArray: [{roomNumber: "1", roomLetter: null, people: ["0", "0"], active: true}],
        rooms: [["0", "0"]], //room: (adults: ?, children: ?)
        aRooms: [],
        bRooms: [],
        familyCabins: [],
        vip1: null,
        vip2: null,
        anyAvailableCabins: true,
        bookedRooms: [],
        bookedRoomLetters: [],
        totalPrice: 0,
        grandTotal: 0
    };

    componentDidMount() {
        if (this.props.history.location.state && 
            this.props.history.location.state.startDate != dayjs() &&
            this.props.history.location.state.endDate != dayjs(dayjs().add('1', 'day'))) {
            // redirecting from another page
            let passedState = this.props.history.location.state;
            this.setState({ 
                startDate: passedState.startDate,
                startDateString: passedState.startDateString,
                startDateDB: passedState.startDateDB,
                endDate: passedState.endDate,
                endDateString: passedState.endDateString,
                endDateDB: passedState.endDateDB,
                nrNights: passedState.nrNights,
                _isMounted: true,
                _redirection: true
            })
            this.checkAvailability(passedState.startDateDB, passedState.endDateDB);
        } else {
            // no redirecting
            let startDate = dayjs();
            let endDate = dayjs(startDate.add('1', 'day'));
            this.setState({ 
                startDate,
                startDateString: startDate.format("MM/DD/YYYY"),
                startDateDB: startDate.format("DD/MM/YYYY"),
                endDate,
                endDateString: endDate.format("MM/DD/YYYY"),
                endDateDB: startDate.format("DD/MM/YYYY"),
                nrNights: "1",
                _isMounted: true
            });
        };
    };

    onDayClick = (date) => {
        if (date.isAfter(dayjs().subtract('1', 'day'))) {
            if (this.state.chooseStartDate || date.isBefore(this.state.startDate))
                this.setState({ 
                    startDate: date,
                    startDateString: date.format("MM/DD/YYYY"),
                    startDateDB: date.format("DD/MM/YYYY"),
                    endDate: "",
                    endDateString: "",
                    endDateDB: "",
                    nrNights: "",
                    chooseStartDate: false,
                    chooseEndDate: true
                });
            else if (this.state.chooseEndDate)
                this.setState({ 
                    endDate: date,
                    endDateString: date.format("MM/DD/YYYY"),
                    endDateDB: date.subtract('1', 'day').format("DD/MM/YYYY"),
                    chooseStartDate: true,
                    chooseEndDate: false,
                    nrNights: date.diff(this.state.startDate, "day")
                });
        };
    };

    onDayClickStart = (date) => {
        this.setState({ 
            startDate: date,
            startDateString: date.format("MM/DD/YYYY"),
            startDateDB: date.format("DD/MM/YYYY"),
            endDate: "",
            endDateString: "",
            endDateDB: "",
            nrNights: "",
            chooseStartDate: false,
            chooseEndDate: true
        });
    };

    onDayClickEnd = (date) => {
        this.setState({ 
            endDate: date,
            endDateString: date.format("MM/DD/YYYY"),
            endDateDB: date.subtract('1', 'day').format("DD/MM/YYYY"),
            chooseStartDate: true,
            chooseEndDate: false,
            nrNights: date.diff(this.state.startDate, 'day')
        });
    };

    checkAvailability = (startDate, endDate) => {
        let startDateDB = this.state.startDateDB ? this.state.startDateDB : startDate;
        let endDateDB = this.state.endDateDB ? this.state.endDateDB : endDate;
            axios.get("/api/avail_cabins", {params: {dates: [startDateDB, endDateDB]}} )  //!!!!!!!!!!!!!!!!!!!, discountcode: 23456789
                .then(res => {
                    debugger
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
    };

    setStartDate = (startDate) => this.setState({ startDate: dayjs(startDate) });

    setEndDate = (endDate) => {
        let endDateDB = (parseInt(endDate.substring(0,2), 10)-1).toString();
        endDateDB = endDateDB.concat(endDate.substring(2,));
        //let nrNights = parseInt(endDate.substring(0,2), 10) - parseInt(this.state.startDate.substring(0,2), 10);
        let nrNights = 3;
        this.setState({ endDate: dayjs(endDate), endDateDB, nrNights });
    };

    setNrNights = (nrNights) => {
        let endDate = this.state.startDate.add(`${nrNights}`, 'day');
        this.setState({ 
            nrNights,
            endDate,
            endDateString: endDate.format("MM/DD/YYYY"),
            endDateDB: endDate.subtract('1', 'day').format("DD/MM/YYYY")
        });
    };

    setNrAdults = (room, nrAdults) => {
        let nrRoomsArray = this.state.nrRoomsArray;
        nrRoomsArray[parseInt(room, 10)-1].people[0] = nrAdults;
        this.setState({ nrRoomsArray });
    };

    setNrChildren = (room, nrChildren) => {
        let nrRoomsArray = this.state.nrRoomsArray;
        nrRoomsArray[parseInt(room, 10)-1].people[1] = nrChildren;
        this.setState({ nrRoomsArray });
    };

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
        let activeRoom = nrRoomsArray.filter( room => room.active )[0];
        if (parseInt(activeRoom.roomNumber, 10) > bookedRooms.length) {
            // adding new room
            bookedRooms.push(room);
            bookedRoomLetters.push(roomLetter);
            rooms.push(["0", "0"]);
            nrRoomsArray[nrRoomsArray.length-1].active = false;
            nrRoomsArray[nrRoomsArray.length-1].roomLetter = roomLetter;
            nrRoomsArray.push( {roomNumber: (nrRoomsArray.length+1).toString(), roomLetter: null, people: ["0", "0"], active: true} );
        } else {
            // changing a room
            bookedRooms = bookedRooms.map( (bookedRoom, index) => {
                if (parseInt(activeRoom.roomNumber, 10)-1 === index)
                    return room;
                else
                    return bookedRoom;
            });
            nrRoomsArray[parseInt(activeRoom.roomNumber, 10)-1].active = false;
            nrRoomsArray[parseInt(activeRoom.roomNumber, 10)-1].roomLetter = roomLetter;
            nrRoomsArray[nrRoomsArray.length-1].active = true;
            bookedRoomLetters = bookedRoomLetters.map( (roomLetter, index) => {
                if (parseInt(activeRoom.roomNumber, 10)-1 === index)
                    return nrRoomsArray[0].roomLetter;
                else
                    return roomLetter;
            });
        };
        this.setState({ aRooms, bRooms, familyCabins, rooms, nrRoomsArray, bookedRooms, bookedRoomLetters });
        this.calculateTotalPrice(bookedRooms);
    };

    changeRoom = (roomNumber) => {
        let nrRoomsArray = this.state.nrRoomsArray;
        nrRoomsArray.map( room => {
            if (room.roomNumber === roomNumber)
                room.active = true;
            else
                room.active = false;
            return room;
        });
        this.setState({ nrRoomsArray });
    };

    deleteRoom = (room) => {
        let nrRoomsArray = this.state.nrRoomsArray;
        let bookedRooms = this.state.bookedRooms;
        let roomIndex = parseInt(room.roomNumber, 10)-1;
        nrRoomsArray.splice(roomIndex, 1);
        bookedRooms.splice(roomIndex, 1);
        nrRoomsArray = nrRoomsArray.map( (room, index) => {
            if (index >= roomIndex)
                room.roomNumber = (parseInt(room.roomNumber)-1).toString();
            return room;
        });
        this.setState({ nrRoomsArray, bookedRooms });
        this.calculateTotalPrice(bookedRooms);
    };

    calculateTotalPrice = (bookedRooms) => {
        let totalPrice = 0;
        bookedRooms.forEach( room => (
            totalPrice = totalPrice + Math.round(room.cabinPricing.price_total)));
        this.setState({ totalPrice });
    };

    goToBilling = () => this.setState({ step: 3 });

    renderRoomName = (room) => (
        <>
        { room == "A" &&
            <>LAKE VIEW CABIN</>
        }
        { room == "B" &&
            <>MOUNTAIN VIEW CABIN</>
        }
        { room == "F" &&
            <>FAMILY CABIN</>
        }
        { room == "V1" &&
            <>VIP ROOM 1</>
        }
        { room == "V2" &&
            <>VIP ROOM 2</>
        }
        </>
    );

    renderRoomPrice = (roomLetter) => {
        if (roomLetter == "A") return Math.round(this.state.aRooms[0].cabinPricing.aveNightlyRate);
        else if (roomLetter == "B") return Math.round(this.state.bRooms[0].cabinPricing.aveNightlyRate);
        else if (roomLetter == "F") return Math.round(this.state.familyCabins[0].cabinPricing.aveNightlyRate);
        else if (roomLetter == "V1") return Math.round(this.state.vip1.cabinPricing.aveNightlyRate);
        else if (roomLetter == "V2") return Math.round(this.state.vip2.cabinPricing.aveNightlyRate);
    };

    renderTotalRoomPrice = (roomLetter) => {
        if (roomLetter == "A") return Math.round(this.state.aRooms[0].cabinPricing.price_total);
        else if (roomLetter == "B") return Math.round(this.state.bRooms[0].cabinPricing.price_total);
        else if (roomLetter == "F") return Math.round(this.state.familyCabins[0].cabinPricing.price_total);
        else if (roomLetter == "V1") return Math.round(this.state.vip1.cabinPricing.price_total);
        else if (roomLetter == "V2") return Math.round(this.state.vip2.cabinPricing.price_total);
    };

    setGrandTotal = (grandTotal) => this.setState({ grandTotal });

    render() {
        return (
            <>
                <div className="reservation-header-container">
                    <div className="reservation-header">Reservation</div>
                </div>
                { this.state._isMounted &&
                    <>
                        { !this.state._redirection &&
                            <>
                                { this.state.step === 1 && 
                                    <Step1
                                        renderLeftBox={this.renderLeftBox}
                                        checkAvailability={this.checkAvailability}
                                        setStartDate={this.setStartDate}
                                        startDate={this.state.startDate}
                                        startDateString={this.state.startDateString}
                                        setEndDate={this.setEndDate}
                                        endDate={this.state.endDate}
                                        endDateString={this.state.endDateString}
                                        setNrNights={this.setNrNights}
                                        setNrRooms={this.setNrRooms}
                                        setNrAdults={this.setNrAdults}
                                        setNrChildren={this.setNrChildren}
                                        nrNights={this.state.nrNights}
                                        nrRooms={this.state.nrRooms}
                                        nrRoomsArray={this.state.nrRoomsArray}
                                        rooms={this.state.rooms}
                                        onDayClick={this.onDayClick}
                                        onDayClickStart={this.onDayClickStart}
                                        onDayClickEnd={this.onDayClickEnd}
                                    />
                                }
                            </>
                        }
                { this.state.step === 2 && 
                    <Step2
                        renderLeftBox={this.renderLeftBox}
                        checkAvailability={this.checkAvailability}
                        startDate={this.state.startDate}
                        startDateString={this.state.startDateString}
                        endDate={this.state.endDate}
                        endDateString={this.state.endDateString}
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
                        changeRoom={this.changeRoom}
                        goToBilling={this.goToBilling}
                        bookedRooms={this.state.bookedRooms}
                        bookedRoomLetters={this.state.bookedRoomLetters}
                        calculateTotalPrice={this.calculateTotalPrice}
                        totalPrice={this.state.totalPrice}
                        renderRoomName={this.renderRoomName}
                        renderRoomPrice={this.renderRoomPrice}
                        renderTotalRoomPrice={this.renderTotalRoomPrice}
                        deleteRoom={this.deleteRoom}
                    />
                }
                { this.state.step === 3 && 
                    <Step3
                        nrRoomsArray={this.state.nrRoomsArray}
                        startDate={this.state.startDate.format("MM/DD/YYYY")}
                        endDate={this.state.endDate.format("MM/DD/YYYY")}
                        nrNights={this.state.nrNights}
                        totalPrice={this.state.totalPrice}
                        totalNrAdults={this.state.totalNrAdults}
                        totalNrChildren={this.state.totalNrChildren}
                        renderRoomName={this.renderRoomName}
                        renderRoomPrice={this.renderRoomPrice}
                        renderTotalRoomPrice={this.renderTotalRoomPrice}
                        bookedRooms={this.state.bookedRooms}
                        setGrandTotal={this.setGrandTotal}
                    />
                }
                </>
                }
            </>
        );
    };
};

export default Reservation;