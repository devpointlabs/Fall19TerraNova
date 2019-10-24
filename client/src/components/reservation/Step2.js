import React from "react";
import { Form, Modal } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import Hotel3 from '../../images/Hotel3.jpg';
import Hotel4 from '../../images/Hotel4.jpg';
import Hotel5 from '../../images/Hotel5.jpg';
import Hotel6 from '../../images/Hotel6.jpg';
import Hotel7 from '../../images/Hotel7.jpg';
import { Calendar } from '../rb-datepicker/dist';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "../styles/daterangepicker.css";
import * as dayjs from "dayjs";

class Step2 extends React.Component {
    state = {
        _isMounted: false,
        modalShow: false,
        modalShowStart: false,
        modalShowEnd: false,
        modalShowNoEndDate: false,
        availableRooms: [],
        userHasChosenNrOfPeople: [false],
        tempRoomLetter: null,
        tempPriceType: null,
        occupancyAB: 4,
        validNrOfPeople: false,
        startDate: "",
        startDateString: "",
        startDateDB: "",
        endDate: "",
        endDateString: "",
        endDateDB: "",
        nrNights: ""
    };

    componentDidMount() {
        let availableRooms = this.state.availableRooms;
        if (this.props.aRooms.length > 0) {
            availableRooms.push("A");
            this.setState({ availableRooms });
        };
        if (this.props.bRooms.length > 0) {
            availableRooms.push("B");
            this.setState({ availableRooms });
        };
        if (this.props.familyCabins.length > 0) {
            availableRooms.push("F");
            this.setState({ availableRooms });
        };
        if (this.props.vip1) {
            availableRooms.push("V1");
            this.setState({ availableRooms });
        };
        if (this.props.vip2) {
            availableRooms.push("V2");
            this.setState({ availableRooms });
        };
        this.setState({ 
            _isMounted: true,
            startDate: this.props.startDate,
            startDateString: this.props.startDateString,
            startDateDB: this.props.startDateDB,
            endDate: this.props.endDate,
            endDateString: this.props.endDateString,
            endDateDB: this.props.endDateDB,
            nrNights: this.props.nrNights
        });
        
    };

    handleShowStart = () => this.setState({ modalShowStart: true });

    handleShowEnd = () => this.setState({ modalShowEnd: true });

    handleShowNoEndDate = () => this.setState({ modalShowNoEndDate: true });

    handleClose = () => this.setState({ modalShow: false, modalShowStart: false, modalShowEnd: false, modalShowNoEndDate: false });

    onDayClickStart = (date) => {
        this.setState({ 
            startDate: date,
            startDateString: date.format("MM/DD/YYYY"),
            startDateDB: date.format("DD/MM/YYYY"),
            endDate: "",
            endDateString: "",
            endDateDB: "",
            nrNights: "",
            modalShowStart: false
        });
    };

    onDayClickEnd = (date) => {
        this.setState({ 
            endDate: date,
            endDateString: date.format("MM/DD/YYYY"),
            endDateDB: date.subtract('1', 'day').format("DD/MM/YYYY"),
            nrNights: date.diff(this.state.startDate, 'day'),
            modalShowEnd: false
        });
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

    renderRoomDescription = (roomLetter) => (
        <>
            { roomLetter === "A" &&
                <>
                    A modern duplex cabin with partial view of Hebgen Lake.
                    <br />
                    <br />
                    <ul>
                        <li>2 Queen Beds</li>
                        <li>Bathroom includes tiled shower with glass doors</li>
                        <li>Small open closet with shelves and space to hang clothing</li>
                        <li>Small fridge, microwave, coffee maker and electric kettle</li>
                        <li>Wi-Fi & Satellite TV</li>
                        <li>Small deck/patio</li>
                    </ul>
                </>
            }
            { roomLetter === "B" &&
                <>
                    A modern duplex cabin with beautiful mountain view.
                    <br />
                    <br />
                    <ul>
                        <li>2 Queen Beds</li>
                        <li>Bathroom includes tiled shower with glass doors</li>
                        <li>Small open closet with shelves and space to hang clothing</li>
                        <li>Small fridge, microwave, coffee maker and electric kettle</li>
                        <li>Wi-Fi & Satellite TV</li>
                        <li>Small deck/patio</li>
                    </ul>
                </>
            }
            { roomLetter === "F" &&
                <>
                    A whole unit with both a mountain view room and lake view room.
                    <br />
                    <br />
                    <ul>
                        <li>4 Queen Beds</li>
                        <li>2 bathrooms including tiled showers with glass doors</li>
                        <li>2 small open closets with shelves and space to hang clothing</li>
                        <li>2 small fridges, microwaves, coffee makers and electric kettles</li>
                        <li>Wi-Fi & Satellite TV</li>
                        <li>2 small decks/patios</li>
                    </ul>
                </>
            }
            { roomLetter === "V1" &&
                <>
                    A deluxe room for deluxe people.
                    <br />
                    <br />
                    <ul>
                        <li>4 Queen Beds</li>
                        <li>2 bathrooms including tiled showers with glass doors</li>
                        <li>2 small open closets with shelves and space to hang clothing</li>
                        <li>2 small fridges, microwaves, coffee makers and electric kettles</li>
                        <li>Wi-Fi & Satellite TV</li>
                        <li>2 small decks/patios</li>
                    </ul>
                </>
            }
            { roomLetter === "V2" &&
                <>
                    A deluxe room for deluxe people.
                    <br />
                    <br />
                    <ul>
                        <li>4 Queen Beds</li>
                        <li>2 bathrooms including tiled showers with glass doors</li>
                        <li>2 small open closets with shelves and space to hang clothing</li>
                        <li>2 small fridges, microwaves, coffee makers and electric kettles</li>
                        <li>Wi-Fi & Satellite TV</li>
                        <li>2 small decks/patios</li>
                    </ul>
                </>
            }
        </>
    );

    renderRoomPicture = (roomLetter) => (
        <>
            { roomLetter === "A" &&
                <img alt="hotel" src={Hotel3} width="100%" />
            }
            { roomLetter === "B" &&
                <img alt="hotel" src={Hotel4} width="100%" />
            }
            { roomLetter === "F" &&
                <img alt="hotel" src={Hotel5} width="100%" />
            }
            { roomLetter === "V1" &&
                <img alt="hotel" src={Hotel6} width="100%" />
            }
            { roomLetter === "V2" &&
                <img alt="hotel" src={Hotel7} width="100%" />
            }
        </>
    );

    isNrOfPeopleValid = () => {
        let validNrOfPeople = true;
        this.props.nrRoomsArray.map ( room => validNrOfPeople = !(parseInt(room.people[0], 10)+parseInt(room.people[1], 10) > this.state.occupancyAB && room.roomLetter !== "F"));
        this.setState({ validNrOfPeople });
        return validNrOfPeople;
    };

    isNrOfPeopleValidExludingUnfinished = () => {
        let validNrOfPeople = true;
        this.props.nrRoomsArray.map ( room => validNrOfPeople = !(parseInt(room.people[0], 10)+parseInt(room.people[1], 10) > this.state.occupancyAB && room.roomLetter !== "F" && room.roomLetter !== null));
        this.setState({ validNrOfPeople });
        return validNrOfPeople;
    };

    handleClose = () => this.setState({ modalShow: false, modalShowStart: false, modalShowEnd: false, modalShowNoEndDate: false });

    handleShow = (roomLetter, priceType) => {
        let roomNumber = this.props.nrRoomsArray.filter( room => room.active )[0].roomNumber;
        this.userHasChosenNrOfPeople(roomNumber);
        this.isNrOfPeopleValid();
        this.setState({ tempRoomLetter: roomLetter, tempPriceType: priceType });
        if (parseInt(roomNumber, 10) >= this.props.nrRoomsArray.length)
            this.setState({ modalShow: true });
        else
            this.props.addRoom(roomLetter, priceType);
    };

    handleClick = (option) => {
        this.props.addRoom(this.state.tempRoomLetter, this.state.tempPriceType);
        this.setState({ modalShow: false });
        if (option === "nextStep") {
            this.goToBilling();
        }
    };

    userHasChosenNrOfPeople = (roomNumber) => {
        let room = this.props.nrRoomsArray[parseInt(roomNumber, 10)-1];
        let userHasChosenNrOfPeople = this.state.userHasChosenNrOfPeople;
        if (room.people[0] === "0" && room.people[1] === "0")
            userHasChosenNrOfPeople[parseInt(roomNumber, 10)-1] = false;
        else
            userHasChosenNrOfPeople[parseInt(roomNumber, 10)-1] = true;
        this.setState({ userHasChosenNrOfPeople });
    };

    changeRoom = (roomNumber) => {
        if (this.isNrOfPeopleValidExludingUnfinished())
            this.props.changeRoom(roomNumber);
        else
            this.setState({ modalShow: true });
    }

    goToBilling = () => {
        if (this.isNrOfPeopleValidExludingUnfinished()) {
            localStorage.setItem('step', 3);
            this.props.goToBilling();
        } else
            this.setState({ modalShow: true });
    };

    renderRoomPrice = (roomLetter, priceType) => {
        let price = "";
        let index = null;
        if (roomLetter === "A") index = 0;
        else if (roomLetter === "B") index = 1;
        else if (roomLetter === "F") index = 2;
        else if (roomLetter === "V1") index = 3;
        else if (roomLetter === "V2") index = 4;
        if (priceType === "REGULAR")
            price = this.props.prices[index].regular.toString();
        else if (priceType === "NONREFUNDABLE")
            price = this.props.prices[index].nonrefundable.toString();
        else if (priceType === "EXTENDED STAY")
            price = this.props.prices[index].extended.toString();
        if (price.includes(".")) {
            let index = price.indexOf(".");
            let priceInteger = price.substring(0, index);
            let priceDecimal = price.substring(index+1, price.length);
            if (priceDecimal.length === 1)
                priceDecimal = `${priceDecimal}0`;
            return (
                <>
                    <div style={{fontSize: "26px", marginRight: "4px"}}>
                        ${ priceInteger }
                    </div>
                    <div style={{fontSize: "13px", marginRight: "6px", marginTop: "5px"}}>
                        { priceDecimal }
                    </div>
                </>
            );
        } else {
            return (
                <div style={{fontSize: "26px", marginRight: "6px"}}>
                    ${ price }
                </div>
            );
        };
    };

    checkAvailability = () => {
        this.setState({ _isMounted: false });
        this.props.setStep(1);
        this.props.setNrNights(this.state.nrNights);
        this.props.setStartDate(this.state.startDate);
        this.props.setStartDateString(this.state.startDateString);
        this.props.setStartDateDB(this.state.startDateDB);
        this.props.setEndDate(this.state.endDate);
        this.props.setEndDateString(this.state.endDateString);
        this.props.setEndDateDB(this.state.endDateDB);
        this.props.checkAvailability(this.state.startDateDB, this.state.endDateDB, "override");
    };

    getIndexFromRoomLetter = (roomLetter) => {
        switch(roomLetter) {
            case "A":
                return 1;
            case "B":
                return 2;
            case "F":
                return 3;
            case "V1":
                return 4;
            case "V2":
                return 5;
            default:
                return 1;
        };
    };

    render() {
        return(
            this.state._isMounted &&
            <>
                <div className="reservation-menu">
                    <div className="reservation-number" style={{cursor: "pointer"}} onClick={this.props.goBackToStep1}>1.</div>
                    <div className="reservation-text" style={{cursor: "pointer"}} onClick={this.props.goBackToStep1}>Choose Date</div>
                    <div className="reservation-space" />
                    <div className="reservation-active">
                        <div className="reservation-number">2.</div>
                        <div className="reservation-text">Choose Room</div>
                    </div>
                    <div className="reservation-space" />
                    <div className="reservation-number">3.</div>
                    <div className="reservation-text">Billing</div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box-container">
                        <div className="reservation-left-box-select-rooms">
                            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>SELECT ROOMS</p>
                            <div className="reservation-hr-container"><div className="reservation-line" /></div>
                            { this.props.nrRoomsArray.map( room => (
                                <div className="reservation-room-container-nopadding" key={parseInt(room.roomNumber, 10)}>
                                    { room.active ?
                                        <div className="reservation-booking-room-active">
                                            <span style={{fontWeight: "bold", fontSize: "13px"}}>ROOM { parseInt(room.roomNumber, 10) }</span>
                                            <div className="reservation-small-choose-rooms-container-left">
                                                <span style={{fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                                                <div className="reservation-dropdown-container2">
                                                    <Dropdown className="reservation-custom-dropdown" text={room.people[0]} drop='down'>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item text='0' onClick={() => this.props.setNrAdults(room.roomNumber, '0')} />
                                                            <Dropdown.Item text='1' onClick={() => this.props.setNrAdults(room.roomNumber, '1')} />
                                                            <Dropdown.Item text='2' onClick={() => this.props.setNrAdults(room.roomNumber, '2')} />
                                                            <Dropdown.Item text='3' onClick={() => this.props.setNrAdults(room.roomNumber, '3')} />
                                                            <Dropdown.Item text='4' onClick={() => this.props.setNrAdults(room.roomNumber, '4')} />
                                                            <Dropdown.Item text='5' onClick={() => this.props.setNrAdults(room.roomNumber, '5')} />
                                                            <Dropdown.Item text='6' onClick={() => this.props.setNrAdults(room.roomNumber, '6')} />
                                                            <Dropdown.Item text='7' onClick={() => this.props.setNrAdults(room.roomNumber, '7')} />
                                                            <Dropdown.Item text='8' onClick={() => this.props.setNrAdults(room.roomNumber, '8')} />
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                            <div className="reservation-small-choose-rooms-container">
                                                <span style={{fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                                                <div className="reservation-dropdown-container2">
                                                    <Dropdown className="reservation-custom-dropdown" text={room.people[1]} drop='down'>
                                                        <Dropdown.Menu>
                                                            <Dropdown.Item text='0' onClick={() => this.props.setNrChildren(room.roomNumber, '0')} />
                                                            <Dropdown.Item text='1' onClick={() => this.props.setNrChildren(room.roomNumber, '1')} />
                                                            <Dropdown.Item text='2' onClick={() => this.props.setNrChildren(room.roomNumber, '2')} />
                                                            <Dropdown.Item text='3' onClick={() => this.props.setNrChildren(room.roomNumber, '3')} />
                                                            <Dropdown.Item text='4' onClick={() => this.props.setNrChildren(room.roomNumber, '4')} />
                                                            <Dropdown.Item text='5' onClick={() => this.props.setNrChildren(room.roomNumber, '5')} />
                                                            <Dropdown.Item text='6' onClick={() => this.props.setNrChildren(room.roomNumber, '6')} />
                                                            <Dropdown.Item text='7' onClick={() => this.props.setNrChildren(room.roomNumber, '7')} />
                                                            <Dropdown.Item text='8' onClick={() => this.props.setNrChildren(room.roomNumber, '8')} />
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </div>
                                            </div>
                                        </div>
                                    :
                                        <div className="reservation-booking-room-inactive">
                                            { room.roomLetter ?
                                                <>
                                            <row>
                                                <span style={{fontWeight: "bold", fontSize: "13px"}}>
                                                    ROOM {parseInt(room.roomNumber, 10)}
                                                </span>
                                                <span style={{fontSize: "11px", marginTop: "1px"}}>
                                                    { room.people[0] }
                                                    { room.people[0] === 1 ? " Adult, " : " Adults, " }
                                                    { room.people[1] }
                                                    { room.people[1] === 1 ? " Child " : " Children " }
                                                </span>
                                            </row>
                                            <row style={{marginTop: "15px"}}>
                                                <span style={{fontWeight: "bold", fontSize: "13px"}}>
                                                    { this.props.renderRoomName(room.roomLetter) }
                                                </span>
                                                <span style={{fontWeight: "bold", fontSize: "13px", color: "#8E7037"}}>
                                                    ${ this.props.nrRoomsArray[parseInt(room.roomNumber, 10)-1].roomPrice }
                                                </span>
                                            </row>
                                            <row style={{fontSize: "x-small"}}>
                                                { this.props.nrRoomsArray[parseInt(room.roomNumber, 10)-1].roomPriceType }
                                            </row>
                                            <row style={{marginTop: "12px", color: "#8E7037", fontSize: "12px"}}>
                                                <u style={{cursor: "pointer"}} onClick={() => this.changeRoom(room.roomNumber)}>Change room</u>
                                                <Icon style={{color: "black"}} name="trash alternate" onClick={() => this.props.deleteRoom(room)} />
                                            </row>
                                                </>
                                            :
                                                <>
                                                    <row>
                                                        <span style={{fontSize: "13px", color: "gray"}}>
                                                            ROOM {parseInt(room.roomNumber, 10)}
                                                        </span>
                                                    </row>
                                                    <row style={{marginTop: "12px", color: "#8E7037", fontSize: "12px"}}>
                                                        <u style={{cursor: "pointer"}} onClick={() => this.props.changeRoom(room.roomNumber)}>Choose room</u>
                                                    </row>
                                                </>
                                            }
                                        </div>
                                    }
                                </div>
                            )) 
                            }
                            { this.props.nrRoomsArray.length > 1 &&
                                <>
                                <div className="reservation-booking-room-total-price">
                                    <span style={{fontWeight: "bold", fontSize: "15px", marginBottom: "5px"}}>TOTAL</span>
                                    <span style={{fontWeight: "bold", fontSize: "15px", color: "#8E7037"}}>${ this.props.totalPrice }</span>
                                </div>
                                <div className="reservation-button-container">
                                    <span className="reservation-custom-button" onClick={this.goToBilling}>
                                        GO TO BILLING
                                    </span>
                                </div>
                                </>
                            }
                        </div>
                        <div className="reservation-left-box-lower">
                            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>YOUR RESERVATION</p>
                            <div className="reservation-hr-container"><div className="reservation-line" /></div>
                            <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>YOUR STAY DATES</p>
                            <span style={{marginLeft: "20px", marginTop: "5px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVAL</span>
                            <div className="reservation-form-container" onClick={this.handleShowStart} >
                                <Form.Control className="reservation-dateform" value={this.state.startDateString} readOnly />
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </div>
                            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>NIGHT(S)</span>
                            <div className="reservation-dropdown-container">
                                <Dropdown className="reservation-custom-dropdown" text={this.state.nrNights} drop='down'>
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
                                </Dropdown>
                            </div>
                            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>DEPARTURE</span>
                            <div className="reservation-form-container" onClick={this.handleShowEnd}>
                                <Form.Control className="reservation-dateform" value={this.state.endDateString} readOnly />
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </div>
                            <div className="reservation-button-container">
                                <div className="reservation-custom-button" onClick={this.checkAvailability}>
                                    CHECK AVAILABILITY
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-right-box-white">
                        { this.props.anyAvailableCabins ?
                            <>
                                { this.state.availableRooms.map( roomLetter =>
                                    <div className="reservation-room-container" key={this.getIndexFromRoomLetter(roomLetter)}>
                                        <div style={{fontSize: "24px"}}>{ this.props.renderRoomName(roomLetter) }</div>
                                        <div className="reservation-inner-room-container">
                                            <div className="reservation-image-container">
                                                { this.renderRoomPicture(roomLetter) }
                                            </div>
                                            <div className="reservation-room-content">
                                                { this.renderRoomDescription(roomLetter) }
                                                <span style={{fontSize: "smaller"}}><u>View more information</u></span>
                                                <br />
                                                <span className="reservation-inner-room-container">
                                                    <div className="reservation-inner-room-price-left">
                                                        <div style={{fontSize: "smaller", fontWeight: "bold"}}>NONREFUNDABLE</div>
                                                        <div className="reservation-room-price">
                                                            { this.renderRoomPrice(roomLetter, "NONREFUNDABLE") }
                                                            <div style={{fontSize: "small", paddingTop: "14px"}}>/night</div>
                                                        </div>
                                                        <div className="reservation-small-custom-button" onClick={() => this.handleShow(roomLetter, "NONREFUNDABLE")}>
                                                            BOOK ROOM
                                                        </div>
                                                    </div>
                                                    <div className="reservation-inner-room-price">
                                                        <div style={{fontSize: "smaller", fontWeight: "bold"}}>REGULAR</div>
                                                        <div className="reservation-room-price">
                                                            { this.renderRoomPrice(roomLetter, "REGULAR") }
                                                            <div style={{fontSize: "small", paddingTop: "14px"}}>/night</div>
                                                        </div>
                                                        <div className="reservation-small-custom-button" onClick={() => this.handleShow(roomLetter, "REGULAR")}>
                                                            BOOK ROOM
                                                        </div>
                                                    </div>
                                                    { parseInt(this.props.nrNights, 10) > 7 &&
                                                        <div className="reservation-inner-room-price">
                                                            <div style={{fontSize: "smaller", fontWeight: "bold"}}>EXTENDED STAY</div>
                                                            <div className="reservation-room-price">
                                                                { this.renderRoomPrice(roomLetter, "EXTENDED STAY") }
                                                                <div style={{fontSize: "small", paddingTop: "14px"}}>/night</div>
                                                            </div>
                                                            <div className="reservation-small-custom-button" onClick={() => this.handleShow(roomLetter, "EXTENDED STAY")}>
                                                                BOOK ROOM
                                                            </div>
                                                        </div>
                                                    }
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        :
                            <div className="reservation-room-container">
                                Sorry, there are no available rooms for these dates. Please try again with other dates.
                            </div>
                        }
                    </div>
                </div>
                <Modal show={this.state.modalShow} onHide={this.handleClose} centered>
                    { this.state.userHasChosenNrOfPeople[this.state.userHasChosenNrOfPeople.length-1] ?
                        this.state.validNrOfPeople ?
                        <>
                            <Modal.Body>
                                Do you want to book another room?
                            </Modal.Body>
                            <Modal.Footer>
                                <span className="reservation-small-custom-button" onClick={() => this.handleClick("anotherRoom")}>
                                    Yes
                                </span>
                                <span className="reservation-small-custom-button" onClick={() => this.handleClick("nextStep")}>
                                    No
                                </span>
                            </Modal.Footer>
                        </>
                        :
                            <Modal.Body>
                                The number of people exceeds the occupancy of the room, please choose a family room instead.
                            </Modal.Body>
                    :
                        <Modal.Body>
                            You have to specify the number of adults and children!
                        </Modal.Body>
                    }
                </Modal>
                <Modal show={this.state.modalShowStart} onHide={this.handleClose} centered>
                    { this.state.endDate !== "" ?
                        <Calendar startDate={this.state.startDate !== "" && this.state.startDate} endDate={this.state.endDate !== "" && this.state.endDate} singleDatePicker={true} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    :
                        <Calendar startDate={this.state.startDate !== "" && this.state.startDate} endDate={null} singleDatePicker={true} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    }
                </Modal>
                <Modal show={this.state.modalShowEnd} onHide={this.handleClose} centered>
                    { this.state.endDate !== "" ?
                        <Calendar startDate={this.state.startDate !== "" && this.state.startDate} endDate={this.state.endDate !== "" && this.state.endDate} singleDatePicker={true} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    :
                        <Calendar startDate={this.state.startDate !== "" && this.state.startDate} endDate={null} singleDatePicker={true} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    }
                </Modal>
                <Modal show={this.state.modalShowNoEndDate} onHide={this.handleClose} centered>
                    <Modal.Body>
                        You have to choose a departure date!
                    </Modal.Body>
                </Modal>
            </>
        );
    };
};

export default Step2;