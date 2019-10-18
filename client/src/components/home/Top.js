import React from 'react';
import { withRouter } from 'react-router-dom';
import { Carousel, Modal } from 'react-bootstrap';
import { Calendar } from '../rb-datepicker/dist';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "../styles/daterangepicker.css";
import yellowstone from '../../images/top/yellowstone.jpg';
import yellowstone1 from '../../images/top/yellowstone1.jpg';
import yellowstone2 from '../../images/top/yellowstone2.jpg';
import calendar from '../../images/calendar-icon.png';
import styled from 'styled-components';
import './homestyles/Top.css';
import * as dayjs from "dayjs";

class Top extends React.Component {
    state = {
        startDate: "",
        startDateString: "",
        startDateDB: "",
        endDate: "",
        endDateString: "",
        endDateStringDB: "",
        nrNights: "1",
        modalShowStart: false,
        modalShowEnd: false,
        modalShowNoEndDate: false,
        startDay: "",
        endDay: "",
        startMonth: "",
        endMonth: "",
        startYear: "",
        endYear: ""
    };

    componentDidMount() {
        let startDate = dayjs();
        let endDate = dayjs(startDate.add('1', 'day'));
        this.setState({ 
            _isMounted: true,
            startDate,
            startDateString: startDate.format("MM/DD/YYYY"),
            startDateDB: startDate.format("DD/MM/YYYY"),
            endDate,
            endDateString: endDate.format("MM/DD/YYYY"),
            endDateDB: startDate.format("DD/MM/YYYY"),
            nrNights: 1,
            _isMounted: true
        });
        this.getDayFromDate(startDate, "start");
        this.getDayFromDate(endDate, "end");
        this.getMonthFromDate(startDate, "start");
        this.getMonthFromDate(endDate, "end");
        this.getYearFromDate(startDate, "start");
        this.getYearFromDate(endDate, "end");
    };

    handleShowStart = () => this.setState({ modalShowStart: true });

    handleShowEnd = () => this.setState({ modalShowEnd: true });

    handleShowNoEndDate = () => this.setState({ modalShowNoEndDate: true });

    handleClose = () => this.setState({ modalShowStart: false, modalShowEnd: false, modalShowNoEndDate: false });

    onDayClickStart = (date) => {
        this.setState({ 
            startDate: date,
            startDateString: date.format("MM/DD/YYYY"),
            startDateDB: date.format("DD/MM/YYYY"),
            endDate: "",
            endDateString: "",
            endDateDB: "",
            endDay: "",
            endMonth: "",
            endYear: "",
            nrNights: "",
            modalShowStart: false
        });
        this.getDayFromDate(date, "start");
        this.getMonthFromDate(date, "start");
        this.getYearFromDate(date, "start");
    };

    onDayClickEnd = (date) => {
        this.setState({ 
            endDate: date,
            endDateString: date.format("MM/DD/YYYY"),
            endDateDB: date.subtract('1', 'day').format("DD/MM/YYYY"),
            nrNights: date.diff(this.state.startDate, 'day'),
            modalShowEnd: false
        });
        this.getDayFromDate(date, "end");
        this.getMonthFromDate(date, "end");
        this.getYearFromDate(date, "end");
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

    Button = withRouter(({ history }) => (
        <span
            className="check-availability-button"
            onClick={() => { history.push({
                pathname: '/reservation',
                state: this.state
            }) }}
        >
            CHECK AVAILABILITY
        </span>
    ));

    getDayFromDate = (date, startOrEnd) => {
        if (startOrEnd === "start")
            this.setState({ startDay: date.$D.toString() });
        else
            this.setState({ endDay: date.$D.toString() });
    };

    getMonthFromDate = (date, startOrEnd) => {
        let startMonthNumber = date.$M+1;
        let month = "";
        switch(startMonthNumber) {
            case 1:
                month = "JAN";
                break;
            case 2:
                month = "FEB";
                break;
            case 3:
                month = "MAR";
                break;
            case 4:
                month = "APR";
                break;
            case 5:
                month = "MAY";
                break;
            case 6:
                month = "JUN";
                break;
            case 7:
                month = "JUL";
                break;
            case 8:
                month = "AUG";
                break;
            case 9:
                month = "SEP";
                break;
            case 10:
                month = "OCT";
                break;
            case 11:
                month = "NOV";
                break;
            case 12:
                month = "DEC";
                break;
        };
        if (startOrEnd === "start")
            this.setState({ startMonth: month });
        else
            this.setState({ endMonth: month });
    };

    getYearFromDate = (date, startOrEnd) => {
        if (startOrEnd === "start")
            this.setState({ startYear: date.$y.toString() });
        else
            this.setState({ endYear: date.$y.toString() });
    };

    render() {
        return (
            <div className="top">
                <div className="text-overlay">
                    <div className="topoverlay">
                        <ContentTop>Welcome To Terra Nova Cabins</ContentTop>
                    </div>
                    <div className="bottomoverlay">
                        <ContentBottom>AT WEST YELLOWSTONE</ContentBottom>
                    </div>
                </div>
                <div className="calendaroverlay">
                    <div className="date-box" onClick={this.handleShowStart}>
                        <span className="date-box-text">ARRIVAL DATE</span>
                        <span className="date-box-row">
                            <span className="date-box-day">{ this.state.startDay }</span>
                            <span className="date-box-month">{ this.state.startMonth }</span>
                            <span className="date-box-year">{ this.state.startYear }</span>
                        </span>
                        <span className="date-box-icon-holder">
                            <img src={calendar} width="50%" />
                        </span>
                    </div> 
                    <div className="date-box" onClick={this.handleShowEnd}>
                        <span className="date-box-text">DEPARTURE DATE</span>
                        <span className="date-box-row">
                            <span className="date-box-day">{ this.state.endDay }</span>
                            <span className="date-box-month">{ this.state.endMonth }</span>
                            <span className="date-box-year">{ this.state.endYear }</span>
                        </span>
                        <span className="date-box-icon-holder">
                            <img src={calendar} width="50%" />
                        </span>
                    </div>
                    <this.Button />
                </div>
                
                <Carousel nextIcon="" prevIcon="" >
                    <Carousel.Item>
                        <img
                            src={yellowstone}
                            alt="First slide"
                            width="100%"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        src={yellowstone1}
                        alt="Second slide"
                        width="100%"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                        src={yellowstone2}
                        alt="Third slide"
                        width="100%"
                    />
                    </Carousel.Item>
                </Carousel>
                <Modal show={this.state.modalShowStart} onHide={this.handleClose} centered>
                    { this.props.endDate != "" ?
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={this.state.endDate != "" && this.state.endDate} singleDatePicker={true} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    :
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={null} singleDatePicker={true} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    }
                </Modal>
                <Modal show={this.state.modalShowEnd} onHide={this.handleClose} centered>
                    { this.props.endDate != "" ?
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={this.state.endDate != "" && this.state.endDate} singleDatePicker={true} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    :
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={null} singleDatePicker={true} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    }
                </Modal>
                <Modal show={this.state.modalShowNoEndDate} onHide={this.handleClose}>
                    You have to choose an end date!
                </Modal>
            </div>
        );
    };
};

const ContentTop = styled.h1`
    position: relative;
    padding-top: 8px;
    color: white;
    font-size: 85px;
    font-family: 'Playfair Display', serif;
`;

const ContentBottom = styled.h3`
    position: relative;
    letter-spacing: 8px;
    color: white;
    font-size: 25px;
    font-family: 'Playfair Display', serif;
`;

export default Top;