// Line 336:   Expected a default case              default-case
// Line 340:  Expected '!==' and instead saw '!='  eqeqeq
// Line 346:  Expected '!==' and instead saw '!='  eqeqeq
// Line 352:  Expected '!==' and instead saw '!='  eqeqeq
// Line 354:  Expected '!==' and instead saw '!='  eqeqeq
// Line 446:  Expected '===' and instead saw '=='  eqeqeq
// Line 449:  Expected '===' and instead saw '=='  eqeqeq
// Line 452:  Expected '===' and instead saw '=='  eqeqeq
// Line 455:  Expected '===' and instead saw '=='  eqeqeq
// Line 458:  Expected '===' and instead saw '=='  eqeqeq
// Line 503:  'index' is already defined           no-redeclare
// Line 507:  'index' is already defined           no-redeclare
// Line 513:  'index' is already defined           no-redeclare
// Line 517:  'index' is already defined           no-redeclare
// Line 543:  Expected '===' and instead saw '=='  eqeqeq
// Line 545:  Expected '===' and instead saw '=='  eqeqeq
// Line 547:  Expected '===' and instead saw '=='  eqeqeq
// Line 551:  Expected '===' and instead saw '=='  eqeqeq
// Line 553:  Expected '===' and instead saw '=='  eqeqeq
// Line 558:  Expected '===' and instead saw '=='  eqeqeq
// Line 562:  Expected '===' and instead saw '=='  eqeqeq
// Line 563:  'index' is already defined           no-redeclare
// Line 566:  Expected '===' and instead saw '=='  eqeqeq
// Line 567:  'index' is already defined           no-redeclare
// Line 572:  Expected '===' and instead saw '=='  eqeqeq
// Line 573:  'index' is already defined           no-redeclare
// Line 576:  Expected '===' and instead saw '=='  eqeqeq
// Line 577:  'index' is already defined           no-redeclare
// Line 584:  Expected '===' and instead saw '=='  eqeqeq
// Line 585:  Expected '===' and instead saw '=='  eqeqeq
// Line 586:  Expected '===' and instead saw '=='  eqeqeq
// Line 587:  Expected '===' and instead saw '=='  eqeqeq
// Line 588:  Expected '===' and instead saw '=='  eqeqeq


import React from 'react';
// import { Form, OverlayTrigger, Popover } from "react-bootstrap";
// import { Icon, Dropdown } from "semantic-ui-react";
import "./reservationstyles/Reservation.css";
// import styled from "styled-components";
import axios from "axios";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Confirmation from "./Confirmation";
import * as dayjs from "dayjs";

class Reservation extends React.Component {
    state = {
        _isMounted: false,
        _redirection: false,
        _reload: false,
        step: 1,
        startDate: "",
        startDateString: "",
        startDateDB: "",
        startDateDisplay: "",
        endDate: "",
        endDateString: "",
        endDateDB: "",
        endDateDisplay: "",
        chooseStartDate: true,
        chooseEndDate: false,
        nrNights: "1",
        nrRooms: "",
        nrRoomsArray: [{roomNumber: "1", roomLetter: null, cabinId: null, cabinNumber: null, roomPrice: null, roomPriceType: null, people: ["0", "0"], active: true}],
        rooms: [["0", "0"]], //room: (adults: ?, children: ?)
        aRooms: [],
        bRooms: [],
        familyCabins: [],
        vip1: null,
        vip2: null,
        anyAvailableCabins: true,
        bookedRooms: [],
        bookedRoomLetters: [],
        prices: [
            {room: "A", regular: 0, nonrefundable: 0, extended: 0, company: 0},
            {room: "B", regular: 0, nonrefundable: 0, extended: 0, company: 0},
            {room: "F", regular: 0, nonrefundable: 0, extended: 0, company: 0},
            {room: "V1", regular: 0, nonrefundable: 0, extended: 0, company: 0},
            {room: "V2", regular: 0, nonrefundable: 0, extended: 0, company: 0}
        ],
        totalPrice: 0,
        grandTotal: 0
    };

    componentDidMount() {
        this.loadData();
    };

    loadData = () => {
        // if (localStorage.step && localStorage.getItem('step') === "4") this.setState({ step: 4, _isMounted: true });
        if (localStorage.startDateString) {
            // load state from local storage
            this.setState({
                startDateString: localStorage.getItem('startDateString'),
                endDateString: localStorage.getItem('endDateString'),
                startDateDB: localStorage.getItem('startDateDB'),
                endDateDB: localStorage.getItem('endDateDB'),
                startDate: dayjs(localStorage.getItem('startDateParse')),
                endDate: dayjs(localStorage.getItem('endDateParse')),
                nrNights: localStorage.getItem('nrNights')
            });
            this.setDateDisplays();
            if (localStorage.totalPrice) this.setState({ totalPrice: parseFloat(localStorage.getItem('totalPrice'))});
            var nrRoomsArray = [];
            var nextRoom = localStorage.getItem(`room1_roomNumber`) ? true : false;
            var room = 1;
            var tempRoom = {};
            var tempPeople = ["0", "0"];
            while (nextRoom) {
                tempRoom = {};
                tempPeople = ["0", "0"];
                tempRoom.roomNumber = localStorage.getItem(`room${room}_roomNumber`);
                tempRoom.roomLetter = localStorage.getItem(`room${room}_roomLetter`);
                tempRoom.cabinId = localStorage.getItem(`room${room}_cabinId`);
                tempRoom.cabinNumber = localStorage.getItem(`room${room}_cabinNumber`);
                tempRoom.roomPrice = parseFloat(localStorage.getItem(`room${room}_roomPrice`));
                tempRoom.roomPriceType = localStorage.getItem(`room${room}_roomPriceType`);
                tempPeople[0] = localStorage.getItem(`room${room}_nrAdults`);
                tempPeople[1] = localStorage.getItem(`room${room}_nrChildren`);
                tempRoom.people = tempPeople;
                tempRoom.active = false;
                nrRoomsArray.push(tempRoom);
                this.setState({ nrRoomsArray });
                room += 1;
                if (!localStorage.getItem(`room${room}_roomNumber`)) nextRoom = false;
            };
            tempRoom = {};
            tempRoom.roomNumber = room.toString();
            tempRoom.roomLetter = null;
            tempRoom.roomPrice = null;
            tempRoom.roomPriceType = null;
            tempRoom.people = ["0", "0"];
            tempRoom.active = true;
            nrRoomsArray.push(tempRoom);
            if (localStorage.step && localStorage.step === "2") {
                this.setState({ step: parseInt(localStorage.getItem('step'))});
                this.checkAvailability(localStorage.getItem('startDateDB'), localStorage.getItem('endDateDB'), false, nrRoomsArray);
            } else if (localStorage.step && localStorage.step === "4") {
                this.setState({ grandTotal: localStorage.getItem('grandTotal'), step: 4, _isMounted: true });
            }
            else this.setState({ step: 3, _isMounted: true });
        // } else if (!this.state.reload && this.props.history.location.state &&
        //     this.props.history.location.state.startDate != dayjs() &&
        //     this.props.history.location.state.endDate != dayjs(dayjs().add('1', 'day')) &&
        //     !startOver) {
        //     // redirecting from home page or room details page
        //     this.cleanLocalStorage();
        //     let passedState = this.props.history.location.state;
        //     this.setState({ 
        //         step: 1,
        //         startDate: dayjs(this.props.history.location.startDateParse),
        //         startDateString: passedState.startDateString,
        //         startDateDB: passedState.startDateDB,
        //         endDate: dayjs(this.props.history.location.endDateParse),
        //         endDateString: passedState.endDateString,
        //         endDateDB: passedState.endDateDB,
        //         nrNights: passedState.nrNights,
        //         _isMounted: true,
        //         _redirection: true,
        //         _reload: false
        //     });
        //     this.checkAvailability(passedState.startDateDB, passedState.endDateDB);
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

    checkAvailability = (startDate, endDate, override, nrRoomsArray) => {
        let startDateDB = "";
        let endDateDB = "";
        // let startDateDB = this.state.startDateDB ? this.state.startDateDB : startDate;
        // let endDateDB = this.state.endDateDB ? this.state.endDateDB : endDate;
        // let startDateDB = override ? startDate : this.state.startDateDB;
        if (override && override === "override") {
            startDateDB = startDate;
            endDateDB = endDate;
        } else if (this.state.startDateDB && this.state.endDateDB) {
            startDateDB = this.state.startDateDB;
            endDateDB = this.state.endDateDB;
        } else {
            startDateDB = startDate;
            endDateDB = endDate;
        };
        axios.get("/api/avail_cabins", {params: {dates: [startDateDB, endDateDB]}} )  //!!!!!!!!!!!!!!!!!!!, discountcode: 23456789
            .then(res => {
                debugger
                this.setState({
                    _isMounted: true,
                    aRooms: res.data.aRooms,
                    bRooms: res.data.bRooms,
                    familyCabins: res.data.familyCabins,
                    vip1: res.data.vip1,
                    vip2: res.data.vip2, 
                    step: 2
                });
                this.anyAvailableCabins();
                let prices = this.state.prices;
                prices = this.setRegularRoomPrices(prices, res.data.aRooms, res.data.bRooms, res.data.familyCabins, res.data.vip1, res.data.vip2);
                prices = this.setNonrefundableRoomPrices(prices, res.data.aRooms, res.data.bRooms, res.data.familyCabins, res.data.vip1, res.data.vip2);
                if (this.state.nrNights > 7)
                    prices = this.setExtendedRoomPrices(prices, res.data.aRooms, res.data.bRooms, res.data.familyCabins, res.data.vip1, res.data.vip2);
                this.setState({ prices });
                if (nrRoomsArray) {
                    // user refreshes page => have to automatically add rooms again
                    var bookedRooms = this.state.bookedRooms;
                    var aRooms = res.data.aRooms;
                    var bRooms = res.data.bRooms;
                    var familyCabins = res.data.familyCabins;
                    var vip1 = res.data.vip1;
                    var vip2 = res.data.vip2;
                    var room = null;
                    for (var i = 0; i < nrRoomsArray.length; i++) {
                        switch(nrRoomsArray[i].roomLetter) {
                            case "A":
                                room = res.data.aRooms[0];
                                familyCabins = familyCabins.filter( familyCabin => 
                                    familyCabin.cabin_number !== room.cabin_number );
                                break;
                            case "B":
                                room = res.data.bRooms[0];
                                familyCabins = familyCabins.filter( familyCabin => 
                                    familyCabin.cabin_number !== room.cabin_number );
                                break;
                            case "F":
                                room = res.data.familyCabins[0];
                                aRooms = aRooms.filter( aRoom => 
                                    aRoom.cabin_number !== room.cabin_number );
                                bRooms = bRooms.filter( bRoom => 
                                    bRoom.cabin_number !== room.cabin_number );
                                break;
                            case "V1":
                                room = vip1;
                                vip1 = null;
                                break;
                            case "V2":
                                room = vip2;
                                vip2 = null;
                                break;
                            default:
                                room = res.data.aRooms[0];
                                familyCabins = familyCabins.filter( familyCabin => 
                                    familyCabin.cabin_number !== room.cabin_number );
                                break;
                        };
                        bookedRooms.push(room);
                    };
                    this.setState({ bookedRooms, aRooms, bRooms, familyCabins, vip1, vip2 });
                };
            })
            .catch(err => {
                console.log(err)
        });
        // let startDateDay = startDateDB.substring(0, 2);
        // let startDateMonth = startDateDB.substring(3, 5);
        // let startDateYear = startDateDB.substring(6, 10);
        // let startDateParse = `${startDateYear}-${startDateMonth}-${startDateDay}`;
        // let endDateDBDay = endDateDB.substring(0, 2);
        // let endDateDBMonth = endDateDB.substring(3, 5);
        // let endDateDBYear = endDateDB.substring(6, 10);
        // let endDateDBParse = `${endDateDBYear}-${endDateDBMonth}-${endDateDBDay}`;
        // this.props.history.location.state.startDate = dayjs(startDateParse);
        // this.props.history.location.state.startDateDB = dayjs(startDateParse).format("DD/MM/YYYY");
        // this.props.history.location.state.startDateString = dayjs(startDateParse).format("MM/DD/YYYY");
        // this.props.history.location.startDateParse = startDateParse;
        // this.props.history.location.state.endDate = dayjs(endDateDBParse).add('1', 'day');
        // this.props.history.location.state.endDateDB = dayjs(endDateDBParse).format("DD/MM/YYYY");
        // this.props.history.location.state.endDateString = dayjs(endDateDBParse).add('1', 'day').format("MM/DD/YYYY");
        // this.props.history.location.endDateParse = dayjs(endDateDBParse).add('1', 'day').format("YYYY-MM-DD");
        // this.props.history.location.nrNights = dayjs(endDateDBParse).add('1', 'day').diff(dayjs(startDateParse), 'day');
        // this.props.history.location.state.test = "test";
        // this.props.history.location.test = "test";
        // this.props.location.test = "test";
        // this.props.history.push({ test: "test" });
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

    setStartDate = (startDate) => this.setState({ startDate });

    setStartDateString = (startDateString) => this.setState({ startDateString });

    setStartDateDB = (startDateDB) => this.setState({ startDateDB });

    // setEndDate = (endDate) => {
    //     let endDateDB = (parseInt(endDate.substring(0,2), 10)-1).toString();
    //     endDateDB = endDateDB.concat(endDate.substring(2,));
    //     let nrNights = 3;
    //     this.setState({ endDate: dayjs(endDate), endDateDB, nrNights });
    // };

    setEndDate = (endDate) => this.setState({ endDate });

    setEndDateString = (endDateString) => this.setState({ endDateString });

    setEndDateDB = (endDateDB) => this.setState({ endDateDB });

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
    
    addRoom = (roomLetter, priceType) => {
        let bookedRooms = this.state.bookedRooms;
        let bookedRoomLetters = this.state.bookedRoomLetters;
        let room = null;
        let aRooms = this.state.aRooms;
        let bRooms = this.state.bRooms;
        let familyCabins = this.state.familyCabins;
        let nrRoomsArray = this.state.nrRoomsArray;
        let rooms = this.state.rooms;
        let roomPrice = null;
        let index = null;
        let cabinId = null;
        switch(roomLetter) {
            case "A":
                room = this.state.aRooms[0];
                familyCabins = familyCabins.filter( familyCabin => 
                    familyCabin.cabin_number !== room.cabin_number );
                index = 0;
                cabinId = room.id.toString();
                break;
            case "B":
                room = this.state.bRooms[0];
                familyCabins = familyCabins.filter( familyCabin => 
                    familyCabin.cabin_number !== room.cabin_number );
                index = 1;
                cabinId = room.id.toString();
                break;
            case "F":
                room = this.state.familyCabins[0];
                aRooms = aRooms.filter( aRoom => 
                    aRoom.cabin_number !== room.cabin_number );
                bRooms = bRooms.filter( bRoom => 
                    bRoom.cabin_number !== room.cabin_number );
                index = 2;
                cabinId = `${room.pair[0].id}, ${room.pair[1].id}`;
                break;
            case "V1":
                room = this.state.vip1;
                index = 3;
                cabinId = room.id.toString();
                break;
            case "V2":
                room = this.state.vip2;
                index = 4;
                cabinId = room.id.toString();
                break;
            default:
              break;
        }
        if (priceType === "REGULAR")
            roomPrice = this.state.prices[index].regular;
        else if (priceType === "NONREFUNDABLE")
            roomPrice = this.state.prices[index].nonrefundable;
        else if (priceType === "EXTENDED STAY")
            roomPrice = this.state.prices[index].extended;
        let activeRoom = nrRoomsArray.filter( room => room.active )[0];
        if (parseInt(activeRoom.roomNumber, 10) === nrRoomsArray.length && !nrRoomsArray[nrRoomsArray.length-1].roomLetter) {
            // adding new room
            bookedRooms.push(room);
            bookedRoomLetters.push(roomLetter);
            rooms.push(["0", "0"]);
            nrRoomsArray[nrRoomsArray.length-1].active = false;
            nrRoomsArray[nrRoomsArray.length-1].roomLetter = roomLetter;
            nrRoomsArray[nrRoomsArray.length-1].cabinId = cabinId;
            nrRoomsArray[nrRoomsArray.length-1].cabinNumber = room.cabin_number;
            nrRoomsArray[nrRoomsArray.length-1].roomPrice = roomPrice;
            nrRoomsArray[nrRoomsArray.length-1].roomPriceType = priceType;
            nrRoomsArray.push( {roomNumber: (nrRoomsArray.length+1).toString(), roomLetter: null, cabinId: null, cabinNumber: null, roomPrice: null, roomPriceType: null, people: ["0", "0"], active: true} );
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
            nrRoomsArray[parseInt(activeRoom.roomNumber, 10)-1].cabinId = cabinId;
            nrRoomsArray[parseInt(activeRoom.roomNumber, 10)-1].cabinNumber = room.cabin_number;
            nrRoomsArray[parseInt(activeRoom.roomNumber, 10)-1].roomPrice = roomPrice;
            nrRoomsArray[parseInt(activeRoom.roomNumber, 10)-1].roomPriceType = priceType;
            if (!nrRoomsArray[nrRoomsArray.length-1].roomLetter) nrRoomsArray[nrRoomsArray.length-1].active = true;
            bookedRoomLetters = bookedRoomLetters.map( (roomLetter, index) => {
                if (parseInt(activeRoom.roomNumber, 10)-1 === index)
                    return nrRoomsArray[0].roomLetter;
                else
                    return roomLetter;
            });
        };
        this.setState({ aRooms, bRooms, familyCabins, rooms, nrRoomsArray, bookedRooms, bookedRoomLetters });
        let totalPrice = this.calculateTotalPrice(nrRoomsArray);
        this.addToLocalStorage(nrRoomsArray, totalPrice);
    };

    addToLocalStorage = (nrRoomsArray, totalPrice) => {
        localStorage.setItem('startDateString', this.state.startDateString);
        localStorage.setItem('endDateString', this.state.endDateString);
        localStorage.setItem('startDateDB', this.state.startDateDB);
        localStorage.setItem('endDateDB', this.state.endDateDB);
        localStorage.setItem('startDateParse', this.state.startDate.format("YYYY-MM-DD"));
        localStorage.setItem('endDateParse', this.state.endDate.format("YYYY-MM-DD"));
        localStorage.setItem('nrNights', this.state.nrNights);
        localStorage.setItem('totalPrice', totalPrice);
        nrRoomsArray.map( (room, index) => {
            if (room.roomLetter) {
                localStorage.setItem(`room${index+1}_roomNumber`, nrRoomsArray[index].roomNumber);
                localStorage.setItem(`room${index+1}_roomLetter`, nrRoomsArray[index].roomLetter);
                localStorage.setItem(`room${index+1}_cabinId`, nrRoomsArray[index].cabinId);
                localStorage.setItem(`room${index+1}_cabinNumber`, nrRoomsArray[index].cabinNumber);
                localStorage.setItem(`room${index+1}_roomPrice`, nrRoomsArray[index].roomPrice);
                localStorage.setItem(`room${index+1}_roomPriceType`, nrRoomsArray[index].roomPriceType);
                localStorage.setItem(`room${index+1}_nrAdults`, nrRoomsArray[index].people[0]);
                localStorage.setItem(`room${index+1}_nrChildren`, nrRoomsArray[index].people[1]);
            };
            return room;
        });
    };

    addToLocalStorageStep1 = () => {
        localStorage.setItem('startDateString', this.state.startDateString);
        localStorage.setItem('endDateString', this.state.endDateString);
        localStorage.setItem('startDateDB', this.state.startDateDB);
        localStorage.setItem('endDateDB', this.state.endDateDB);
        localStorage.setItem('startDateParse', this.state.startDate.format("YYYY-MM-DD"));
        localStorage.setItem('endDateParse', this.state.endDate.format("YYYY-MM-DD"));
        localStorage.setItem('nrNights', this.state.nrNights);
        localStorage.setItem('step', 2);
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
        let index = this.state.nrRoomsArray.length;
        if (localStorage.getItem(`room${index}_roomLetter`)) {
            localStorage.deleteItem(`room${index}_roomNumber`);
            localStorage.deleteItem(`room${index}_roomLetter`);
            localStorage.deleteItem(`room${index}_cabinId`);
            localStorage.deleteItem(`room${index}_cabinNumber`);
            localStorage.deleteItem(`room${index}_roomPrice`);
            localStorage.deleteItem(`room${index}_roomPriceType`);
            localStorage.deleteItem(`room${index}_nrAdults`);
            localStorage.deleteItem(`room${index}_nrChildren`);
        }
        if (localStorage.getItem(`room${index-1}_roomLetter`)) {
            localStorage.deleteItem(`room${index-1}_roomNumber`);
            localStorage.deleteItem(`room${index-1}_roomLetter`);
            localStorage.deleteItem(`room${index-1}_cabinId`);
            localStorage.deleteItem(`room${index-1}_cabinNumber`);
            localStorage.deleteItem(`room${index-1}_roomPrice`);
            localStorage.deleteItem(`room${index-1}_roomPriceType`);
            localStorage.deleteItem(`room${index-1}_nrAdults`);
            localStorage.deleteItem(`room${index-1}_nrChildren`);
        }
        nrRoomsArray.map( (room, index) => {
            if (room.roomLetter) {
                localStorage.setItem(`room${index+1}_roomNumber`, nrRoomsArray[index].roomNumber);
                localStorage.setItem(`room${index+1}_roomLetter`, nrRoomsArray[index].roomLetter);
                localStorage.setItem(`room${index+1}_cabinId`, nrRoomsArray[index].cabinId);
                localStorage.setItem(`room${index+1}_cabinNumber`, nrRoomsArray[index].cabinNumber);
                localStorage.setItem(`room${index+1}_roomPrice`, nrRoomsArray[index].roomPrice);
                localStorage.setItem(`room${index+1}_roomPriceType`, nrRoomsArray[index].roomPriceType);
                localStorage.setItem(`room${index+1}_nrAdults`, nrRoomsArray[index].people[0]);
                localStorage.setItem(`room${index+1}_nrChildren`, nrRoomsArray[index].people[1]);
            };
            return room;
        });
        this.setState({ nrRoomsArray, bookedRooms });
        this.calculateTotalPrice(nrRoomsArray);
    };

    calculateTotalPrice = (nrRoomsArray) => {
        let totalPrice = 0;
        nrRoomsArray.forEach( room => (
            totalPrice = totalPrice + room.roomPrice));
        totalPrice = Math.round(totalPrice * 100) / 100;
        this.setState({ totalPrice });
        return totalPrice;
    };

    goToBilling = () => this.setState({ step: 3 });

    renderRoomName = (roomLetter) => (
        <>
        { roomLetter === "A" &&
            <>LAKE VIEW CABIN</>
        }
        { roomLetter === "B" &&
            <>MOUNTAIN VIEW CABIN</>
        }
        { roomLetter === "F" &&
            <>FAMILY CABIN</>
        }
        { roomLetter === "V1" &&
            <>VIP ROOM 1</>
        }
        { roomLetter === "V2" &&
            <>VIP ROOM 2</>
        }
        </>
    );

    setRegularRoomPrices = (prices, aRooms, bRooms, familyCabins, vip1, vip2) => {
        if (aRooms.length > 0)
            prices[0].regular = Math.round(aRooms[0].cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (bRooms.length > 0)
            prices[1].regular = Math.round(bRooms[0].cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (familyCabins.length > 0)
            prices[2].regular = Math.round(
                (familyCabins[0].cabinPricing.price_hash.ahash.reg +
                familyCabins[0].cabinPricing.price_hash.bhash.reg)/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (vip1)
            prices[3].regular = Math.round(vip1.cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (vip2)
            prices[4].regular = Math.round(vip2.cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
        return prices;
    };

    setNonrefundableRoomPrices = (prices, aRooms, bRooms, familyCabins, vip1, vip2) => {
        if (aRooms.length > 0)
            prices[0].nonrefundable = Math.round(aRooms[0].cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (bRooms.length > 0)
            prices[1].nonrefundable = Math.round(bRooms[0].cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (familyCabins.length > 0)
            prices[2].nonrefundable = Math.round(
                (familyCabins[0].cabinPricing.price_hash.ahash.Nonrefundable +
                familyCabins[0].cabinPricing.price_hash.bhash.Nonrefundable)/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (vip1)
            prices[3].nonrefundable = Math.round(vip1.cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        if (vip2)
            prices[4].nonrefundable = Math.round(vip2.cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        return prices;
    };

    setExtendedRoomPrices = (prices, aRooms, bRooms, familyCabins, vip1, vip2) => {
        var index; 
        if (aRooms.length > 0) {
            for ( index in this.state.aRooms[0].cabinPricing.price_hash)
                if (index.includes("Plus"))
                    prices[0].extended = Math.round(this.state.aRooms[0].cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        } if (bRooms.length > 0) {
            for ( index in this.state.bRooms[0].cabinPricing.price_hash)
                if (index.includes("Plus"))
                    prices[1].extended = Math.round(this.state.bRooms[0].cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        } if (familyCabins.length > 0) {
            for ( index in this.state.familyCabins[0].cabinPricing.price_hash.ahash)
                if (index.includes("Plus"))
                    prices[2].extended = Math.round(
                        (this.state.familyCabins[0].cabinPricing.price_hash.ahash[index] +
                        this.state.familyCabins[0].cabinPricing.price_hash.bhash[index])/parseInt(this.state.nrNights, 10) * 100) / 100;
        } if (vip1) {
            for ( index in this.state.vip1.cabinPricing.price_hash)
                if (index.includes("Plus"))
                    prices[3].extended = Math.round(this.state.vip1.cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        } if (vip2) {
            for ( index in this.state.vip2.cabinPricing.price_hash)
                if (index.includes("Plus"))
                    prices[4].extended = Math.round(this.state.vip2.cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        };
        return prices;
    };

    // setRegRoomPrice = (roomLetter) => {
    //     let prices = this.state.prices;
    //     if (roomLetter == "A") {
    //         prices[0] = Math.round(this.state.aRooms[0].cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100 }
    //     }
    //         this.setState({ prices[0]: Math.round(this.state.aRooms[0].cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100 });
    //     else if (roomLetter == "B")
    //         return Math.round(this.state.bRooms[0].cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
    //     else if (roomLetter == "F")
    //         return Math.round(
    //             (this.state.familyCabins[0].cabinPricing.price_hash.ahash.reg +
    //             this.state.familyCabins[0].cabinPricing.price_hash.bhash.reg)/parseInt(this.state.nrNights, 10) * 100) / 100;
    //     else if (roomLetter == "V1")
    //         return Math.round(this.state.vip1.cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
    //     else if (roomLetter == "V2")
    //         return Math.round(this.state.vip2.cabinPricing.price_hash.reg/parseInt(this.state.nrNights, 10) * 100) / 100;
    // };

    getNonrefundableRoomPrice = (roomLetter) => {
        if (roomLetter === "A")
            return Math.round(this.state.aRooms[0].cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        else if (roomLetter === "B")
            return Math.round(this.state.bRooms[0].cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        else if (roomLetter === "F")
            return Math.round(
                (this.state.familyCabins[0].cabinPricing.price_hash.ahash.Nonrefundable +
                this.state.familyCabins[0].cabinPricing.price_hash.bhash.Nonrefundable)/parseInt(this.state.nrNights, 10) * 100) / 100;
        else if (roomLetter === "V1")
            return Math.round(this.state.vip1.cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
        else if (roomLetter === "V2")
            return Math.round(this.state.vip2.cabinPricing.price_hash.Nonrefundable/parseInt(this.state.nrNights, 10) * 100) / 100;
    };

    getExtendedRoomPrice = (roomLetter) => {
        var index;
        if (roomLetter === "A") {
            for ( index in this.state.aRooms[0].cabinPricing.price_hash)
                if (index.includes("Plus"))
                    return Math.round(this.state.aRooms[0].cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        } else if (roomLetter === "B") {
            for ( index in this.state.bRooms[0].cabinPricing.price_hash)
                if (index.includes("Plus"))
                    return Math.round(this.state.bRooms[0].cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        } else if (roomLetter === "F") {
            for ( index in this.state.familyCabins[0].cabinPricing.price_hash.ahash)
                if (index.includes("Plus"))
                    return Math.round(
                        (this.state.familyCabins[0].cabinPricing.price_hash.ahash[index] +
                        this.state.familyCabins[0].cabinPricing.price_hash.bhash[index])/parseInt(this.state.nrNights, 10) * 100) / 100;
        } else if (roomLetter === "V1") {
            for ( index in this.state.vip1.cabinPricing.price_hash)
                if (index.includes("Plus"))
                    return Math.round(this.state.vip1.cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        } else if (roomLetter === "V2") {
            for ( index in this.state.vip2.cabinPricing.price_hash)
                if (index.includes("Plus"))
                    return Math.round(this.state.vip2.cabinPricing.price_hash[index]/parseInt(this.state.nrNights, 10) * 100) / 100;
        };
    };

    renderTotalRoomPrice = (roomLetter) => {
        if (roomLetter === "A") return Math.round(this.state.aRooms[0].cabinPricing.price_total);
        else if (roomLetter === "B") return Math.round(this.state.bRooms[0].cabinPricing.price_total);
        else if (roomLetter === "F") return Math.round(this.state.familyCabins[0].cabinPricing.price_total);
        else if (roomLetter === "V1") return Math.round(this.state.vip1.cabinPricing.price_total);
        else if (roomLetter === "V2") return Math.round(this.state.vip2.cabinPricing.price_total);
    };

    setGrandTotal = (grandTotal) => {
        localStorage.setItem('grandTotal', grandTotal);
        this.setState({ grandTotal });
    }

    setStep = (step) => {
        this.setState({ step, _isMounted: false });
    };

    goBackToStep1 = () => {
        this.cleanLocalStorage();
        // this.setState({ step: 1, _isMounted: false });
        // this.loadData(true);
        //window.location.reload();
    };

    goBackToStep2 = () => {
        // this.cleanLocalStorageRooms();
        localStorage.setItem('step', 2);
        this.setState({
            step: 2,
            _isMounted: false
        });
        this.loadData();
        // await this.cleanLocalStorageRooms();
        // await this.loadData();
        //window.location.reload();
    };

    cleanLocalStorage = () => {
        localStorage.removeItem('startDateString');
        localStorage.removeItem('startDateDB');
        localStorage.removeItem('startDateParse');
        localStorage.removeItem('endDateString');
        localStorage.removeItem('endDateDB');
        localStorage.removeItem('endDateParse');
        localStorage.removeItem('nrNights');
        if (localStorage.getItem('totalPrice')) localStorage.removeItem('totalPrice');
        if (localStorage.getItem('grandTotal')) localStorage.removeItem('grandTotal');
        localStorage.removeItem('step');
        let nextRoom = true;
        let room = 1;
        while (nextRoom) {
            localStorage.removeItem(`room${room}_roomNumber`);
            localStorage.removeItem(`room${room}_roomLetter`);
            localStorage.removeItem(`room${room}_cabinId`);
            localStorage.removeItem(`room${room}_cabinNumber`);
            localStorage.removeItem(`room${room}_roomPrice`);
            localStorage.removeItem(`room${room}_roomPriceType`);
            localStorage.removeItem(`room${room}_nrAdults`);
            localStorage.removeItem(`room${room}_nrChildren`);
            room += 1;
            if (!localStorage.getItem(`room${room}_roomNumber`)) nextRoom = false;
        };
        this.setState({
            nrRoomsArray: [{roomNumber: "1", roomLetter: null, roomPrice: null, roomPriceType: null, people: ["0", "0"], active: true}],
            bookedRooms: [],
            step: 1,
            _isMounted: false
        });
        this.loadData();
    };

    cleanLocalStorageRooms = () => {
        var nextRoom = localStorage.getItem(`room1_roomNumber`) ? true : false;
        var room = 1;
        while (nextRoom) {
            localStorage.removeItem(`room${room}_roomNumber`);
            localStorage.removeItem(`room${room}_roomLetter`);
            localStorage.removeItem(`room${room}_cabinId`);
            localStorage.removeItem(`room${room}_cabinNumber`);
            localStorage.removeItem(`room${room}_roomPrice`);
            localStorage.removeItem(`room${room}_roomPriceType`);
            localStorage.removeItem(`room${room}_nrAdults`);
            localStorage.removeItem(`room${room}_nrChildren`);
            localStorage.setItem('step', 2);
            room += 1;
            if (!localStorage.getItem(`room${room}_roomNumber`)) nextRoom = false;
        };
        this.setState({
            nrRoomsArray: [{roomNumber: "1", roomLetter: null, roomPrice: null, roomPriceType: null, people: ["0", "0"], active: true}],
            bookedRooms: [],
            step: 2,
            _isMounted: false
        });
        this.loadData();
    };

    goToConfirmation = () => {
        localStorage.setItem('step', 4);
        this.setState({ step: 4, _isMounted: false });
    };

    setNrRooms = (nrRooms) => this.setState({ nrRooms });

    setDateDisplays = () => {
        let startDate = dayjs(localStorage.getItem('startDateParse'));
        let endDate = dayjs(localStorage.getItem('endDateParse'));
        let startDay = this.getFullDayName(startDate.$d.toString().substring(0, 3));
        let endDay = this.getFullDayName(endDate.$d.toString().substring(0, 3));
        let startMonth = this.getFullMonthName(startDate.$d.toString().substring(4, 7));
        let endMonth = this.getFullMonthName(endDate.$d.toString().substring(4, 7));
        let startDateDisplay = `${startDay}, ${startMonth} ${startDate.$D}, ${startDate.$y}`;
        let endDateDisplay = `${endDay}, ${endMonth} ${endDate.$D}, ${endDate.$y}`;
        this.setState({ startDateDisplay, endDateDisplay });
        localStorage.setItem('startDateDisplay', startDateDisplay);
        localStorage.setItem('endDateDisplay', endDateDisplay);
    };

    getFullDayName = (day) => {
        switch(day) {
            case "Sun":
                return "SUNDAY";
            case "Mon":
                return "MONDAY";
            case "Tue":
                return "TUESDAY";
            case "Wed":
                return "WEDNESDAY";
            case "Thu":
                return "THURSDAY";
            case "Fri":
                return "FRIDAY";
            case "Sat":
                return "SATURDAY";
            default:
                return "";
        };
    };

    getFullMonthName = (month) => {
        switch(month) {
            case "Jan":
                return "JANUARY";
            case "Feb":
                return "FEBRUARY";
            case "Mar":
                return "MARCH";
            case "Apr":
                return "APRIL";
            case "May":
                return "MAY";
            case "Jun":
                return "JUNE";
            case "Jul":
                return "JULY";
            case "Aug":
                return "AUGUST";
            case "Sep":
                return "SEPTEMBER";
            case "Oct":
                return "OCTOBER";
            case "Nov":
                return "NOVEMBER";
            case "Dec":
                return "DECEMBER";
            default:
                return "";
        };
    };

    render() {
        return (
            <>
                { this.state.step !== 4 ?
                <>
                <div className="reservation-header-container">
                    <div className="reservation-header">RESERVATION</div>
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
                                        addToLocalStorageStep1={this.addToLocalStorageStep1}
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
                                startDateDB={this.state.startDateDB}
                                endDate={this.state.endDate}
                                endDateString={this.state.endDateString}
                                endDateDB={this.state.endDateDB}
                                setStartDate={this.setStartDate}
                                setStartDateString={this.setStartDateString}
                                setStartDateDB={this.setStartDateDB}
                                setEndDate={this.setEndDate}
                                setEndDateString={this.setEndDateString}
                                setEndDateDB={this.setEndDateDB}
                                setNrNights={this.setNrNights}
                                setNrRooms={this.setNrRooms}
                                setNrAdults={this.setNrAdults}
                                setNrChildren={this.setNrChildren}
                                nrNights={this.state.nrNights}
                                nrRooms={this.state.nrRooms}
                                nrRoomsArray={this.state.nrRoomsArray}
                                rooms={this.state.rooms}
                                onDayClickStart={this.onDayClickStart}
                                onDayClickEnd={this.onDayClickEnd}
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
                                prices={this.state.prices}
                                calculateTotalPrice={this.calculateTotalPrice}
                                totalPrice={this.state.totalPrice}
                                renderRoomName={this.renderRoomName}
                                getRegRoomPrice={this.getRegRoomPrice}
                                getNonrefundableRoomPrice={this.getNonrefundableRoomPrice}
                                getExtendedRoomPrice={this.getExtendedRoomPrice}
                                renderTotalRoomPrice={this.renderTotalRoomPrice}
                                deleteRoom={this.deleteRoom}
                                setStep={this.setStep}
                                goBackToStep1={this.goBackToStep1}
                            />
                        }
                        { this.state.step === 3 && 
                            <Step3
                                nrRoomsArray={this.state.nrRoomsArray}
                                startDate={this.state.startDate}
                                startDateString={this.state.startDateString}
                                endDate={this.state.endDate}
                                endDateString={this.state.endDateString}
                                nrNights={this.state.nrNights}
                                totalPrice={this.state.totalPrice}
                                totalNrAdults={this.state.totalNrAdults}
                                totalNrChildren={this.state.totalNrChildren}
                                renderRoomName={this.renderRoomName}
                                renderTotalRoomPrice={this.renderTotalRoomPrice}
                                bookedRooms={this.state.bookedRooms}
                                setGrandTotal={this.setGrandTotal}
                                setStep={this.setStep}
                                goBackToStep1={this.goBackToStep1}
                                goBackToStep2={this.goBackToStep2}
                                goToConfirmation={this.goToConfirmation}
                                setNrRooms={this.setNrRooms}
                            />
                        }
                    </>
                }
            </>
            :
                <>
                    <div className="reservation-header-container">
                        <div className="reservation-header">CONFIRMATION</div>
                    </div>
                    <Confirmation
                        startDateDisplay={this.state.startDateDisplay}
                        endDateDisplay={this.state.endDateDisplay}
                        nrNights={this.state.nrNights}
                        nrRooms={this.state.nrRooms}
                        grandTotal={this.state.grandTotal}
                        cleanLocalStorage={this.cleanLocalStorage}
                    />
                </>
            }
           </>
        );
    };
};

export default Reservation;