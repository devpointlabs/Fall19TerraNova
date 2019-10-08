import React from 'react';
import { Form, NavDropdown, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import { LinkedCalendar } from './rb-datepicker/dist';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "./reservationstyles/daterangepicker.css";

class Step1 extends React.Component {
    state = {
        startDate: "",
        endDate: "",
        endDateDB: "",
        nrNights: "1",
        nrRooms: "1",
        nrRoomsArray: ["1"],
        rooms: [["1", "1"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"]] //room: (adults: ?, children: ?)
    }

    componentDidMount() {
        this.ticker = setInterval( () => this.tick(), 250 );
        let drp_selected = document.getElementsByClassName("drp-selected");
        if (drp_selected && drp_selected.length > 0) {
            let dateString = drp_selected[0].innerText;
            let startDate = dateString.substring(0, 10);
            let endDate = dateString.substring(13);
            this.setState({ startDate: startDate, endDate: endDate });
            this.props.setStartDate(startDate);
            this.props.setEndDate(endDate);
        }
    }

    tick = () => {
        let drp_selected = document.getElementsByClassName("drp-selected");
        if (drp_selected && drp_selected.length > 0) {
            let dateString = drp_selected[0].innerText;
            let startDate = dateString.substring(0, 10);
            let endDate = dateString.substring(13);
            this.setState({ startDate: startDate, endDate: endDate });
            this.props.setStartDate(startDate);
            this.props.setEndDate(endDate);
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

    onDayClick = ({date}) => {
        debugger
        console.log(date)
    }

    popoverCalendar = (
        <Popover id="popover-basic">
          <LinkedCalendar onDatesChange={this.onDatesChange} />
        </Popover>
    );

    render() {
        return(
            <>
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
                            <this.props.DateForm value={this.state.startDate} readOnly />
                            <OverlayTrigger trigger="click" placement="right" overlay={this.popoverCalendar}>
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </OverlayTrigger>
                        </div>
                        <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>NIGHT(S)</span>
                        <div className="reservation-dropdown-container">
                            <this.props.CustomDropdown text={this.state.nrNights}>
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
                            <this.props.DateForm value={this.state.endDate} readOnly />
                            <OverlayTrigger trigger="click" placement="right" overlay={this.popoverCalendar}>
                                <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                            </OverlayTrigger>
                        </div>
                        <p style={{marginLeft: "20px", marginTop: "10px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>ROOMS AND GUESTS</p>
                        <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>ROOM(S)</span>
                        <div className="reservation-dropdown-container" style={{marginBottom: "0px !important"}}>
                            <this.props.CustomDropdown text={this.state.nrRooms}>
                                <Dropdown.Menu>
                                    <Dropdown.Item text='1' onClick={() => this.props.setNrRooms('1')} />
                                    <Dropdown.Item text='2' onClick={() => this.props.setNrRooms('2')} />
                                    <Dropdown.Item text='3' onClick={() => this.props.setNrRooms('3')} />
                                    <Dropdown.Item text='4' onClick={() => this.props.setNrRooms('4')} />
                                    <Dropdown.Item text='5' onClick={() => this.props.setNrRooms('5')} />
                                </Dropdown.Menu>
                            </this.props.CustomDropdown>
                        </div>
                        
                            { this.state.nrRoomsArray.map( room => (
                                <div className="reservation-room-container" key={parseInt(room, 10)-1}>
                                    <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px", width: "25%"}}>ROOM {room}</span>
                                    <div className="reservation-small-room-container">
                                        <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>ADULT(S)</span>
                                        <div className="reservation-dropdown-container">
                                            <this.props.CustomDropdown text={this.state.rooms[parseInt(room, 10)-1][0]}>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item text='1' onClick={() => this.props.setNrAdults({room}, '1')} />
                                                    <Dropdown.Item text='2' onClick={() => this.props.setNrAdults({room}, '2')} />
                                                    <Dropdown.Item text='3' onClick={() => this.props.setNrAdults({room}, '3')} />
                                                    <Dropdown.Item text='4' onClick={() => this.props.setNrAdults({room}, '4')} />
                                                    <Dropdown.Item text='5' onClick={() => this.props.setNrAdults({room}, '5')} />
                                                </Dropdown.Menu>
                                            </this.props.CustomDropdown>
                                        </div>
                                    </div>
                                    <div className="reservation-small-room-container" style={{width: "30%", marginRight: "15px"}}>
                                        <span style={{marginLeft: "20px", fontWeight: "bold", fontSize: "12px"}}>CHILD(REN)</span>
                                        <div className="reservation-dropdown-container">
                                            <this.props.CustomDropdown text={this.state.rooms[parseInt(room, 10)-1][1]} flip="true">
                                                <Dropdown.Menu>
                                                    <Dropdown.Item text='1' onClick={() => this.props.setNrChildren({room}, '1')} />
                                                    <Dropdown.Item text='2' onClick={() => this.props.setNrChildren({room}, '2')} />
                                                    <Dropdown.Item text='3' onClick={() => this.props.setNrChildren({room}, '3')} />
                                                    <Dropdown.Item text='4' onClick={() => this.props.setNrChildren({room}, '4')} />
                                                    <Dropdown.Item text='5' onClick={() => this.props.setNrChildren({room}, '5')} />
                                                </Dropdown.Menu>
                                            </this.props.CustomDropdown>
                                        </div>
                                    </div>
                                </div>
                            )) }
                        
                        <div className="reservation-button-container">
                            <span className="reservation-custom-button" onClick={this.props.checkAvailability}>
                                CHECK AVAILABILITY
                            </span>
                        </div>
                    </div>
                    <div className="reservation-right-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>AVAILABILITY</p>
                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        <LinkedCalendar applyButtonClasses="" buttonClasses="" onDatesChange={this.onDatesChange} singleDatePicker={true} onChange={this.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} />
                    </div>
                </div>
            </>
        );
    };
};

export default Step1;