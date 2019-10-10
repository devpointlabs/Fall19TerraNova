import React from "react";
import { Form, NavDropdown, Button, Popover, OverlayTrigger, Modal } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import Hotel3 from '../../images/Hotel3.jpg';
import Hotel4 from '../../images/Hotel4.jpg';
import Hotel5 from '../../images/Hotel5.jpg';
import Hotel6 from '../../images/Hotel6.jpg';
import Hotel7 from '../../images/Hotel7.jpg';

class Step2 extends React.Component {
    state = { 
        modalShow: false,
        availableRooms: [],
        userHasChosenNrOfPeople: [false],
        tempRoom: null,
        occupancyAB: 4
    };

    componentDidMount() {
        let availableRooms = this.state.availableRooms;
        if (this.props.aRooms.length > 0) {
            availableRooms.push("A");
            this.setState({ availableRooms });
        }
        if (this.props.bRooms.length > 0) {
            availableRooms.push("B");
            this.setState({ availableRooms });
        }
        if (this.props.familyCabins.length > 0) {
            availableRooms.push("F");
            this.setState({ availableRooms });
        }
        if (this.props.vip1) {
            availableRooms.push("V1");
            this.setState({ availableRooms });
        }
        if (this.props.vip2) {
            availableRooms.push("V2");
            this.setState({ availableRooms });
        }
    };

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

    renderRoomDescription = (room) => (
        <>
            { room == "A" &&
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
            { room == "B" &&
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
            { room == "F" &&
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
            { room == "V1" &&
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
            { room == "V2" &&
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

    renderRoomPicture = (room) => (
        <>
            { room == "A" &&
                <img src={Hotel3} width="100%" />
            }
            { room == "B" &&
                <img src={Hotel4} width="100%" />
            }
            { room == "F" &&
                <img src={Hotel5} width="100%" />
            }
            { room == "V1" &&
                <img src={Hotel6} width="100%" />
            }
            { room == "V2" &&
                <img src={Hotel7} width="100%" />
            }
        </>
    );

    renderRoomPrice = (room) => {
        if (room == "A") return Math.round(this.props.aRooms[0].cabinPricing.aveNightlyRate);
        else if (room == "B") return Math.round(this.props.bRooms[0].cabinPricing.aveNightlyRate);
        else if (room == "F") return Math.round(this.props.familyCabins[0].cabinPricing.aveNightlyRate);
        else if (room == "V1") return Math.round(this.props.vip1.cabinPricing.aveNightlyRate);
        else if (room == "V2") return Math.round(this.props.vip2.cabinPricing.aveNightlyRate);
    };

    renderTotalRoomPrice = (room) => {
        if (room == "A") return Math.round(this.props.aRooms[0].cabinPricing.price_total);
        else if (room == "B") return Math.round(this.props.bRooms[0].cabinPricing.price_total);
        else if (room == "F") return Math.round(this.props.familyCabins[0].cabinPricing.price_total);
        else if (room == "V1") return Math.round(this.props.vip1.cabinPricing.price_total);
        else if (room == "V2") return Math.round(this.props.vip2.cabinPricing.price_total);
    };

    isNrOfPeopleValid = (room) => {
        if ((parseInt(this.props.rooms[this.props.rooms.length-1][0], 10)+
            parseInt(this.props.rooms[this.props.rooms.length-1][1], 10)) > this.state.occupancyAB &&
            (room == "A" || room == "B" || room == "V1" || room == "V2")) {
                this.setState({ validNrOfPeople: false })
        } else {
            this.setState({ validNrOfPeople: true })
        }
    };

    handleClose = () => this.setState({ modalShow: false });

    handleShow = (tempRoom) => {
        let roomNumber = parseInt(this.props.nrRoomsArray[this.props.nrRoomsArray.length-1], 10);
        this.userHasChosenNrOfPeople(roomNumber);
        this.isNrOfPeopleValid(tempRoom);
        this.setState({ tempRoom, modalShow: true });
    };

    handleClick = (option) => {
        this.props.addRoom(this.state.tempRoom);
        this.setState({ modalShow: false });
        if (option === "nextStep")
            this.props.goToBilling();
    };

    userHasChosenNrOfPeople = (roomNumber) => {
        let userHasChosenNrOfPeople = this.state.userHasChosenNrOfPeople;
        if (this.props.rooms[roomNumber-1][0] == "0" && this.props.rooms[roomNumber-1][1] == "0")
            userHasChosenNrOfPeople[roomNumber-1] = false;
        else
            userHasChosenNrOfPeople[roomNumber-1] = true;
        this.setState({ userHasChosenNrOfPeople });
    };

    render() {
        return(
            <>
                <div className="reservation-menu">
                    <div className="reservation-number">1.</div>
                    <div className="reservation-text">Choose Date</div>
                    <div className="reservation-space" />
                    <div className="reservation-active">
                        <div className="reservation-number">2.</div>
                        <div className="reservation-text">Choose Room</div>
                    </div>
                    <div className="reservation-space" />
                    <div className="reservation-number">3.</div>
                    <div className="reservation-text">Billing & Confirmation</div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box-container">
                        <div className="reservation-left-box-select-rooms">
                            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>SELECT ROOMS</p>
                            <div className="reservation-hr-container"><div className="reservation-line" /></div>
                            { this.props.nrRoomsArray.map( room => (
                                <>
                                    <div className="reservation-room-container-nopadding" key={parseInt(room, 10)}>
                                        { room == this.props.nrRoomsArray[this.props.nrRoomsArray.length-1] ?
                                            <div className="reservation-booking-room-active">
                                                <span style={{fontWeight: "bold", fontSize: "13px"}}>ROOM { parseInt(room, 10) }</span>
                                                <div className="reservation-small-choose-rooms-container-left">
                                                    <span style={{fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                                                    <div className="reservation-dropdown-container2">
                                                        <this.props.CustomDropdown text={this.props.rooms[parseInt(room, 10)-1][0]} drop='down'>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item text='0' onClick={() => this.props.setNrAdults({room}, '0')} />
                                                                <Dropdown.Item text='1' onClick={() => this.props.setNrAdults({room}, '1')} />
                                                                <Dropdown.Item text='2' onClick={() => this.props.setNrAdults({room}, '2')} />
                                                                <Dropdown.Item text='3' onClick={() => this.props.setNrAdults({room}, '3')} />
                                                                <Dropdown.Item text='4' onClick={() => this.props.setNrAdults({room}, '4')} />
                                                                <Dropdown.Item text='5' onClick={() => this.props.setNrAdults({room}, '5')} />
                                                                <Dropdown.Item text='6' onClick={() => this.props.setNrAdults({room}, '6')} />
                                                                <Dropdown.Item text='7' onClick={() => this.props.setNrAdults({room}, '7')} />
                                                                <Dropdown.Item text='8' onClick={() => this.props.setNrAdults({room}, '8')} />
                                                            </Dropdown.Menu>
                                                        </this.props.CustomDropdown>
                                                    </div>
                                                </div>
                                                <div className="reservation-small-choose-rooms-container">
                                                    <span style={{fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                                                    <div className="reservation-dropdown-container2">
                                                        <this.props.CustomDropdown text={this.props.rooms[parseInt(room, 10)-1][1]} drop='down'>
                                                            <Dropdown.Menu>
                                                                <Dropdown.Item text='0' onClick={() => this.props.setNrChildren({room}, '0')} />
                                                                <Dropdown.Item text='1' onClick={() => this.props.setNrChildren({room}, '1')} />
                                                                <Dropdown.Item text='2' onClick={() => this.props.setNrChildren({room}, '2')} />
                                                                <Dropdown.Item text='3' onClick={() => this.props.setNrChildren({room}, '3')} />
                                                                <Dropdown.Item text='4' onClick={() => this.props.setNrChildren({room}, '4')} />
                                                                <Dropdown.Item text='5' onClick={() => this.props.setNrChildren({room}, '5')} />
                                                                <Dropdown.Item text='6' onClick={() => this.props.setNrChildren({room}, '6')} />
                                                                <Dropdown.Item text='7' onClick={() => this.props.setNrChildren({room}, '7')} />
                                                                <Dropdown.Item text='8' onClick={() => this.props.setNrChildren({room}, '8')} />
                                                            </Dropdown.Menu>
                                                        </this.props.CustomDropdown>
                                                    </div>
                                                </div>
                                            </div>
                                        :
                                            <div className="reservation-booking-room-inactive">
                                                <row>
                                                    <span style={{fontWeight: "bold", fontSize: "13px"}}>
                                                        ROOM {parseInt(room, 10)}
                                                    </span>
                                                    <span style={{fontSize: "11px", marginTop: "1px"}}>
                                                        { this.props.rooms[parseInt(room, 10)-1][0] }
                                                        { this.props.rooms[parseInt(room, 10)-1][0] == 1 ? " Adult, " : " Adults, " }
                                                        { this.props.rooms[parseInt(room, 10)-1][1] }
                                                        { this.props.rooms[parseInt(room, 10)-1][1] == 1 ? " Child " : " Children " }
                                                    </span>
                                                </row>
                                                <row style={{marginTop: "15px"}}>
                                                    <span style={{fontWeight: "bold", fontSize: "13px"}}>
                                                        { this.renderRoomName(this.props.bookedRoomLetters[parseInt(room, 10)-1]) }
                                                    </span>
                                                    <span style={{fontWeight: "bold", fontSize: "13px", color: "#8E7037"}}>
                                                        ${ this.renderTotalRoomPrice(this.props.bookedRoomLetters[parseInt(room, 10)-1]) }
                                                    </span>
                                                </row>
                                            </div>
                                        }
                                    </div>
                                </>
                            )) 
                            }
                            { this.props.nrRoomsArray.length > 1 &&
                                <>
                                <div className="reservation-booking-room-total-price">
                                    <span style={{fontWeight: "bold", fontSize: "15px", marginBottom: "5px"}}>TOTAL</span>
                                    <span style={{fontWeight: "bold", fontSize: "15px", color: "#8E7037"}}>${ this.props.totalPrice }</span>
                                </div>
                                <div className="reservation-button-container">
                                    <span className="reservation-custom-button" onClick={this.props.goToBilling}>
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
                            <span style={{marginLeft: "20px", marginTop: "5px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVE</span>
                            <div className="reservation-form-container">
                                <this.props.DateForm value={this.props.startDate} readOnly />
                                <OverlayTrigger trigger="click" placement="right">
                                    <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                                </OverlayTrigger>
                            </div>
                            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>NIGHT(S)</span>
                            <div className="reservation-dropdown-container">
                                <this.props.CustomDropdown text={this.props.nrNights}>
                                    <Dropdown.Menu>
                                        <Dropdown.Item text='1' onClick={() => this.props.setNrNights('1')} />
                                        <Dropdown.Item text='2' onClick={() => this.props.setNrNights('2')} />
                                        <Dropdown.Item text='3' onClick={() => this.props.setNrNights('3')} />
                                        <Dropdown.Item text='4' onClick={() => this.props.setNrNights('4')} />
                                        <Dropdown.Item text='5' onClick={() => this.props.setNrNights('5')} />
                                        <Dropdown.Item text='6' onClick={() => this.props.setNrNights('6')} />
                                        <Dropdown.Item text='7' onClick={() => this.props.setNrNights('7')} />
                                        <Dropdown.Item text='8' onClick={() => this.props.setNrNights('8')} />
                                        <Dropdown.Item text='9' onClick={() => this.props.setNrNights('9')} />
                                        <Dropdown.Item text='10' onClick={() => this.props.setNrNights('10')} />
                                        <Dropdown.Item text='10+' onClick={() => this.props.setNrNights('10+')} />
                                    </Dropdown.Menu>
                                </this.props.CustomDropdown>
                            </div>
                            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>DEPARTURE</span>
                            <div className="reservation-form-container">
                                <this.props.DateForm value={this.props.endDate} readOnly />
                                    <OverlayTrigger trigger="click" placement="right">
                                        <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                                    </OverlayTrigger>
                            </div>
                            <div className="reservation-button-container">
                                <span className="reservation-custom-button" onClick={this.props.checkAvailability}>
                                    CHECK AVAILABILITY
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-right-box-white">
                        { this.props.anyAvailableCabins ?
                            <>
                                { this.state.availableRooms.map( room =>
                                    <>
                                        <div className="reservation-room-container">
                                            <div style={{fontSize: "24px"}}>{ this.renderRoomName(room) }</div>
                                            <div className="reservation-inner-room-container">
                                                <div className="reservation-image-container">
                                                    { this.renderRoomPicture(room) }
                                                    </div>
                                                <div className="reservation-room-content">
                                                    { this.renderRoomDescription(room) }
                                                    <span style={{fontSize: "smaller"}}><u>View more information</u></span>
                                                    <br />
                                                    <span className="reservation-inner-room-container">
                                                        <span style={{fontSize: "28px", marginRight: "8px"}}>${ this.renderRoomPrice(room) } </span><span style={{paddingTop: "13px"}}>/night</span>
                                                        <span className="reservation-small-custom-button" onClick={() => this.handleShow(room)}>
                                                            BOOK ROOM
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
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
            </>
        );
    };
};

export default Step2;