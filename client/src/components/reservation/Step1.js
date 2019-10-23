import React from "react";
import { withRouter } from 'react-router-dom';
import { Form, Modal } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import { LinkedCalendar, Calendar } from '../rb-datepicker/dist';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "../styles/daterangepicker.css";
import * as dayjs from "dayjs";

class Step1 extends React.Component {
    state = {
        _isMounted: false,
        startDate: "",
        endDate: "",
        endDateDB: "",
        nrNights: "1",
        nrRooms: "1",
        rooms: [["1", "1"], ["0", "0"], ["0", "0"], ["0", "0"], ["0", "0"]], //room: (adults: ?, children: ?)
        modalShowStart: false,
        modalShowEnd: false,
        modalShowNoEndDate: false
    };

    componentDidMount() {
        this.setState({ _isMounted: true });
    }

    handleShowStart = () => this.setState({ modalShowStart: true });

    handleShowEnd = () => this.setState({ modalShowEnd: true });

    handleShowNoEndDate = () => this.setState({ modalShowNoEndDate: true });

    handleClose = () => this.setState({ modalShowStart: false, modalShowEnd: false, modalShowNoEndDate: false });

    onDayClickStart = (date) => {
        if (date.isAfter(dayjs().subtract('1', 'day'))) {
            this.handleClose();
            this.props.onDayClickStart(date);
        };
    };

    onDayClickEnd = (date) => {
        if (date.isAfter(dayjs().subtract('1', 'day')) && date.isAfter(this.props.startDate)) {
            this.handleClose();
            this.props.onDayClickEnd(date);
        };
    };

    checkAvailability = () => {
        if (this.props.endDate !== "") {
            this.setState({ _isMounted: false });
            this.props.addToLocalStorageStep1();
            this.props.checkAvailability();
        } else {
            this.setState({ modalShowNoEndDate: true });
        };
    };

    Button = withRouter(({ history }) => (
        <span
            className="reservation-custom-button"
            onClick={
                this.state.endDate !== "" ?
                    (() => this.checkAvailability(history))
                : 
                this.state._isMounted &&
                    (() => this.setState({ modalShowNoEndDate: true }))
            }
        >
            CHECK AVAILABILITY
        </span>
    ));

    addToLocalStorage = () => {
        localStorage.setItem('startDateString', this.props.startDateString);
        localStorage.setItem('endDateString', this.props.endDateString);
        localStorage.setItem('startDateDB', this.props.startDateDB);
        localStorage.setItem('endDateDB', this.props.endDateDB);
        localStorage.setItem('startDateParse', this.props.startDate.format("YYYY-MM-DD"));
        localStorage.setItem('endDateParse', this.props.endDate.format("YYYY-MM-DD"));
        localStorage.setItem('nrNights', this.props.nrNights);
        localStorage.setItem('step', 2);
    };

    render() {
        return(
            this.state._isMounted &&
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
                    <div className="reservation-text">Billing</div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>YOUR RESERVATION</p>
                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        <p style={{marginLeft: "20px", marginTop: "25px", fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>YOUR STAY DATES</p>
                        <span style={{marginLeft: "20px", marginTop: "5px", marginRight: "0px", fontWeight: "bold", fontSize: "12px"}}>ARRIVAL</span>
                        <div className="reservation-form-container" onClick={this.handleShowStart}>
                            <Form.Control className="reservation-dateform" value={this.props.startDateString} readOnly />
                            <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
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
                        <div className="reservation-form-container" onClick={this.handleShowEnd}>
                            <Form.Control 
                                className="reservation-dateform" 
                                value={this.props.endDateString} 
                                readOnly 
                            />
                            <Icon name="calendar alternate outline" style={{marginTop: "6px", marginRight: "8px"}} />
                        </div>
                        <div className="reservation-button-container">
                            <span className="reservation-custom-button" onClick={this.checkAvailability}>
                                CHECK AVAILABILITY
                            </span>
                        </div>
                    </div>
                    <div className="reservation-right-box">
                        <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>AVAILABILITY</p>
                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        { this.props.endDate !== "" ?
                            <LinkedCalendar startDate={this.props.startDate !== "" && this.props.startDate} endDate={this.props.endDate !== "" && this.props.endDate} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onDayClick={this.props.onDayClick} onChange={this.props.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                        :
                            <LinkedCalendar startDate={this.props.startDate !== "" && this.props.startDate} endDate={null} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onChange={this.props.onDatesChange} onDayClick={this.props.onDayClick} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                        }
                    </div>
                </div>
                <Modal show={this.state.modalShowStart} onHide={this.handleCloseStart} centered>
                    { this.props.endDate !== "" ?
                        <Calendar startDate={this.props.startDate !== "" && this.props.startDate} endDate={this.props.endDate !== "" && this.props.endDate} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onDayClick={this.onDayClickStart} onChange={this.props.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    :
                        <Calendar startDate={this.props.startDate !== "" && this.props.startDate} endDate={null} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onChange={this.props.onDatesChange} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    }
                </Modal>
                <Modal show={this.state.modalShowEnd} onHide={this.handleClose} centered>
                    { this.props.endDate !== "" ?
                        <Calendar startDate={this.props.startDate !== "" && this.props.startDate} endDate={this.props.endDate !== "" && this.props.endDate} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onDayClick={this.onDayClickEnd} onChange={this.props.onDatesChange} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
                    :
                        <Calendar startDate={this.props.startDate !== "" && this.props.startDate} endDate={null} onDatesChange={this.props.onDatesChange} singleDatePicker={true} onChange={this.props.onDatesChange} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs().subtract('1', 'day')} />
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

export default Step1;