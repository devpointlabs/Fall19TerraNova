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
                        { this.props.renderLeftBox() }
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