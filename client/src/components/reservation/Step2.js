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
        numbers: ["A", "B", "F", "V1", "V2"]
    };

    renderRoomName = (room) => (
        <>
        { room == "A" &&
            <div style={{fontSize: "24px"}}>LAKE VIEW CABIN</div>
        }
        { room == "B" &&
            <div style={{fontSize: "24px"}}>MOUNTAIN VIEW CABIN</div>
        }
        { room == "F" &&
            <div style={{fontSize: "24px"}}>FAMILY CABIN</div>
        }
        { room == "V1" &&
            <div style={{fontSize: "24px"}}>VIP ROOM 1</div>
        }
        { room == "V2" &&
            <div style={{fontSize: "24px"}}>VIP ROOM 2</div>
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

    handleClose = () => this.setState({ modalShow: false });

    handleShow = () => this.setState({ modalShow: true });

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
                                <div className="reservation-room-container-nopadding" key={parseInt(room, 10)-1}>
                                    <div className="reservation-booking-room-active">
                                        <div className="reservation-small-choose-rooms-container-left">
                                            <span style={{fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                                            <div className="reservation-dropdown-container2">
                                                <this.props.CustomDropdown text={this.props.rooms[parseInt(room, 10)-1][0]}>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item text='1' onClick={() => this.props.setNrAdults({room}, '1')} />
                                                        <Dropdown.Item text='2' onClick={() => this.props.setNrAdults({room}, '2')} />
                                                        <Dropdown.Item text='3' onClick={() => this.props.setNrAdults({room}, '3')} />
                                                        <Dropdown.Item text='4' onClick={() => this.props.setNrAdults({room}, '4')} />
                                                        <Dropdown.Item text='5' onClick={() => this.props.setNrAdults({room}, '5')} />
                                                        <Dropdown.Item text='6' onClick={() => this.props.setNrAdults({room}, '6')} />
                                                        <Dropdown.Item text='7' onClick={() => this.props.setNrAdults({room}, '7')} />
                                                        <Dropdown.Item text='8' onClick={() => this.props.setNrAdults({room}, '8')} />
                                                        <Dropdown.Item text='9' onClick={() => this.props.setNrAdults({room}, '9')} />
                                                        <Dropdown.Item text='10' onClick={() => this.props.setNrAdults({room}, '10')} />
                                                    </Dropdown.Menu>
                                                </this.props.CustomDropdown>
                                            </div>
                                        </div>
                                        <div className="reservation-small-choose-rooms-container">
                                            <span style={{fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                                            <div className="reservation-dropdown-container2">
                                                <this.props.CustomDropdown text={this.props.rooms[parseInt(room, 10)-1][1]}>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item text='1' onClick={() => this.props.setNrChildren({room}, '1')} />
                                                        <Dropdown.Item text='2' onClick={() => this.props.setNrChildren({room}, '2')} />
                                                        <Dropdown.Item text='3' onClick={() => this.props.setNrChildren({room}, '3')} />
                                                        <Dropdown.Item text='4' onClick={() => this.props.setNrChildren({room}, '4')} />
                                                        <Dropdown.Item text='5' onClick={() => this.props.setNrChildren({room}, '5')} />
                                                        <Dropdown.Item text='6' onClick={() => this.props.setNrChildren({room}, '6')} />
                                                        <Dropdown.Item text='7' onClick={() => this.props.setNrChildren({room}, '7')} />
                                                        <Dropdown.Item text='8' onClick={() => this.props.setNrChildren({room}, '8')} />
                                                        <Dropdown.Item text='9' onClick={() => this.props.setNrChildren({room}, '9')} />
                                                        <Dropdown.Item text='10' onClick={() => this.props.setNrChildren({room}, '10')} />
                                                    </Dropdown.Menu>
                                                </this.props.CustomDropdown>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) }
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
            {/* <p style={{marginLeft: "20px", marginTop: "10px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>ROOMS AND GUESTS</p>
            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>ROOM(S)</span>
            <div className="reservation-dropdown-container" style={{marginBottom: "0px !important"}}>
                <this.props.CustomDropdown text={this.props.nrRooms}>
                    <Dropdown.Menu>
                        <Dropdown.Item text='1' onClick={() => this.setNrRooms('1')} />
                        <Dropdown.Item text='2' onClick={() => this.setNrRooms('2')} />
                        <Dropdown.Item text='3' onClick={() => this.setNrRooms('3')} />
                        <Dropdown.Item text='4' onClick={() => this.setNrRooms('4')} />
                        <Dropdown.Item text='5' onClick={() => this.setNrRooms('5')} />
                    </Dropdown.Menu>
                </this.props.CustomDropdown>
            </div>
            { this.props.nrRoomsArray.map( room => (
                <div className="reservation-choose-rooms-container" key={parseInt(room, 10)-1}>
                    <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px", width: "25%"}}>ROOM {room}</span>
                    <div className="reservation-choose-rooms-small-container">
                        <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                        <div className="reservation-dropdown-container">
                            <this.props.CustomDropdown text={this.props.rooms[parseInt(room, 10)-1][0]}>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' onClick={() => this.setNrAdults({room}, '1')} />
                                    <Dropdown.Item text='2' onClick={() => this.setNrAdults({room}, '2')} />
                                    <Dropdown.Item text='3' onClick={() => this.setNrAdults({room}, '3')} />
                                    <Dropdown.Item text='4' onClick={() => this.setNrAdults({room}, '4')} />
                                    <Dropdown.Item text='5' onClick={() => this.setNrAdults({room}, '5')} />
                                </Dropdown.Menu>
                            </this.props.CustomDropdown>
                        </div>
                    </div>
                    <div className="reservation-choose-rooms-small-container" style={{width: "30%", marginRight: "15px"}}>
                        <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                        <div className="reservation-dropdown-container">
                            <this.props.CustomDropdown text={this.props.rooms[parseInt(room, 10)-1][1]} flip="true">
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' onClick={() => this.setNrChildren({room}, '1')} />
                                    <Dropdown.Item text='2' onClick={() => this.setNrChildren({room}, '2')} />
                                    <Dropdown.Item text='3' onClick={() => this.setNrChildren({room}, '3')} />
                                    <Dropdown.Item text='4' onClick={() => this.setNrChildren({room}, '4')} />
                                    <Dropdown.Item text='5' onClick={() => this.setNrChildren({room}, '5')} />
                                </Dropdown.Menu>
                            </this.props.CustomDropdown>
                        </div>
                    </div>
                </div>
            )) } */}
                            <div className="reservation-button-container">
                                <span className="reservation-custom-button" onClick={this.props.checkAvailability}>
                                    CHECK AVAILABILITY
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-right-box-white">
                        { this.state.numbers.map( number =>
                            <>
                                <div className="reservation-room-container">
                                    { this.renderRoomName(number) }
                                    <div className="reservation-inner-room-container">
                                        <div className="reservation-image-container">
                                            { this.renderRoomPicture(number) }
                                            </div>
                                        <div className="reservation-room-content">
                                            { this.renderRoomDescription(number) }
                                            <span style={{fontSize: "smaller"}}><u>View more information</u></span>
                                            <br />
                                            <span className="reservation-inner-room-container">
                                                <span style={{fontSize: "28px", marginRight: "8px"}}>$130 </span><span style={{paddingTop: "13px"}}>/day</span>
                                                <span className="reservation-small-custom-button" onClick={this.handleShow}>
                                                    BOOK ROOM
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <Modal show={this.state.modalShow} onHide={this.handleClose} centered>
                    <Modal.Body>
                        Do you want to book another room?
                    </Modal.Body>
                    <Modal.Footer>
                        <span className="reservation-small-custom-button" onClick={this.props.addRoom}>
                            Yes
                        </span>
                        <span className="reservation-small-custom-button" onClick={this.props.goToBilling}>
                            No
                        </span>
                    </Modal.Footer>
                </Modal>
            </>
        );
    };
};

export default Step2;