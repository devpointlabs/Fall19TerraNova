import React from "react";
import { Form, Modal, NavDropdown, Button, Popover, OverlayTrigger } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import { LinkedCalendar, Calendar } from '../rb-datepicker/dist';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "../styles/daterangepicker.css";
import * as dayjs from "dayjs";

class Step1 extends React.Component {
    state = {
        startDate: "",
        endDate: "",
        endDateDB: "",
        nrNights: "1",
        nrRooms: "1",
        rooms: [["1", "1"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"]], //room: (adults: ?, children: ?)
        modalShowStart: false,
        modalShowEnd: false
    };

    componentDidMount() {
        // this.ticker = setInterval( () => this.tick(), 1000 );

    };

    tick = () => {
        let drp_selected = document.getElementsByClassName("drp-selected");
        if (drp_selected && drp_selected.length > 0) {
            let dateString = drp_selected[0].innerText;
            let startDate = dateString.substring(0, 10);
            let endDate = dateString.substring(13);
            this.setState({ startDate: startDate, endDate: endDate });
            this.props.setStartDate(startDate);
            this.props.setEndDate(endDate);
        };
    };

    formatDate = (date) => {
        if (date != "") {
            let year = date.substring(0, 4);
            let month = date.substring(5, 7);
            let day = date.substring(8, 10);
            return `${day}/${month}/${year}`;
        };
    };

    popoverCalendar = () => (
        <Popover id="popover-basic">
          <Calendar onDatesChange={this.onDatesChange} />
        </Popover>
    );

    handleShowStart = () => this.setState({ modalShowStart: true });

    handleCloseStart = () => this.setState({ modalShowStart: false });

    handleShowEnd = () => this.setState({ modalShowEnd: true });

    handleCloseEnd = () => this.setState({ modalShowEnd: false });

    onDayClickStart = (date) => {
        if (date.isAfter(dayjs().subtract('1', 'day'))) {
            this.handleCloseStart();
            this.props.onDayClickStart(date);
        }
    }

    onDayClickEnd = (date) => {
        if (date.isAfter(dayjs().subtract('1', 'day')) && date.isAfter(this.props.startDate)) {
            this.handleCloseEnd();
            this.props.onDayClickEnd(date);
        }
    }

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
                    <div className="reservation-text">Billing & Confirmation</div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box">
            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>YOUR RESERVATION</p>
            <div className="reservation-hr-container"><div className="reservation-line" /></div>
            <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>YOUR STAY DATES</p>
            <span style={{marginLeft: "20px", marginTop: "5px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVE</span>
            <div className="reservation-form-container">
                <Form.Control className="reservation-dateform" value={this.props.startDateString} readOnly />
                {/* <OverlayTrigger trigger="click" placement="right" overlay={this.props.popoverCalendar}> */}
                    <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} onClick={this.handleShowStart} />
                {/* </OverlayTrigger> */}
            </div>
            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>NIGHT(S)</span>
            <div className="reservation-dropdown-container">
                <Dropdown className="reservation-custom-dropdown" text={this.props.nrNights} drop='down'>
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
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <span style={{marginLeft: "20px", marginTop: "5px", fontWeight: "bold", fontSize: "12px"}}>DEPARTURE</span>
            <div className="reservation-form-container">
                <Form.Control 
                    className="reservation-dateform" 
                    value={this.props.endDateString} 
                    readOnly 
                />
                {/* <OverlayTrigger trigger="click" placement="right" overlay={this.props.popoverCalendar}> */}
                    <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} onClick={this.handleShowEnd} />
                {/* </OverlayTrigger> */}
            </div>
            <div className="reservation-button-container">
                <span className="reservation-custom-button" onClick={this.props.checkAvailability}>
                    CHECK AVAILABILITY
                </span>
            </div>
                    </div>
                    <div className="reservation-right-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>AVAILABILITY</p>
                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        { this.props.endDate != "" ?
                            <LinkedCalendar startDate={this.props.startDate != "" && this.props.startDate} endDate={this.props.endDate != "" && this.props.endDate} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onDayClick={this.props.onDayClick} onChange={this.props.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                        :
                            <LinkedCalendar startDate={this.props.startDate != "" && this.props.startDate} endDate={null} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onChange={this.props.onDatesChange} onDayClick={this.props.onDayClick} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                        }
                    </div>
                </div>
                <Modal show={this.state.modalShowStart} onHide={this.handleCloseStart} centered>
                    { this.props.endDate != "" ?
                        <Calendar startDate={this.props.startDate != "" && this.props.startDate} endDate={this.props.endDate != "" && this.props.endDate} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onDayClick={this.onDayClickStart} onChange={this.props.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    :
                        <Calendar startDate={this.props.startDate != "" && this.props.startDate} endDate={null} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onChange={this.props.onDatesChange} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    }
                </Modal>
                <Modal show={this.state.modalShowEnd} onHide={this.handleCloseEnd} centered>
                    { this.props.endDate != "" ?
                        <Calendar startDate={this.props.startDate != "" && this.props.startDate} endDate={this.props.endDate != "" && this.props.endDate} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onDayClick={this.onDayClickEnd} onChange={this.props.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    :
                        <Calendar startDate={this.props.startDate != "" && this.props.startDate} endDate={null} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onChange={this.props.onDatesChange} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    }
                </Modal>
            </>
        );
    };
};

export default Step1;