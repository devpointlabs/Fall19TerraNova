import React from "react";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import RenderCountries from "./RenderCountries";
import styled from "styled-components";

class Step3 extends React.Component {
    state = { 
        _isMounted: false,
        toggleCouponCode: false,
        totalNrRooms: 0,
        totalNrAdults: 0,
        totalNrChildren: 0,
        taxes: [],
        grandTotal: 0
    };

    componentDidMount() {
        this.setTotalNrRooms();
        this.setTotalNrAdults();
        this.setTotalNrChildren();
        let taxes = this.calculateTaxes();
        this.calculateGrandTotal(taxes);
        this.setState({ _isMounted: true });
    };

    setTotalNrRooms = () => {
        let totalNrRooms = 0;
        this.props.nrRoomsArray.map(room => {
            if (room.roomLetter)
                totalNrRooms += 1
        });
        this.setState({ totalNrRooms });
    };

    setTotalNrAdults = () => {
        let totalNrAdults = 0;
        this.props.nrRoomsArray.map( room => (
            totalNrAdults += parseInt(room.people[0], 10)
        ));
        this.setState({ totalNrAdults });
    };

    setTotalNrChildren = () => {
        let totalNrChildren = 0;
        this.props.nrRoomsArray.map( room => (
            totalNrChildren += parseInt(room.people[0], 10)
        ));
        this.setState({ totalNrChildren });
    };

    calculateTaxes = () => {
        let taxes = this.state.taxes;
        this.props.bookedRooms.map((room, index) => {
            taxes.push("");
            taxes[index] = room.cabinPricing.price_total * 0.075;
        });
        this.setState({ taxes });
        return taxes;
    };

    calculateGrandTotal = (taxes) => {
        let totalTaxes = 0;
        this.state.taxes.map( tax => (totalTaxes += tax));
        let grandTotal = this.props.totalPrice + totalTaxes;
        this.setState({ grandTotal });
        this.props.setGrandTotal(grandTotal);
    }

    handleSubmit = () => {

    };

    render() {
        return(
            this.state._isMounted &&
            <>
                <div className="reservation-menu">
                    <div className="reservation-number">1.</div>
                    <div className="reservation-text">Choose Date</div>
                    <div className="reservation-space" />
                    <div className="reservation-number">2.</div>
                    <div className="reservation-text">Choose Room</div>
                    <div className="reservation-space" />
                    <div className="reservation-active">
                        <div className="reservation-number">3.</div>
                        <div className="reservation-text">Billing & Confirmation</div>
                    </div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box-container">
                        <div className="reservation-left-box-select-rooms">
                            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>DATES</p>
                            <div className="reservation-hr-container"><div className="reservation-line" /></div>
                            <br />
                            <div className="reservation-row">
                                <span>Check-In</span>
                                <span style={{fontWeight: "bold"}}>{ this.props.startDate }</span>
                            </div>
                            <div className="reservation-row">
                                <span>Check-Out</span>
                                <span style={{fontWeight: "bold"}}>{ this.props.endDate }</span>
                            </div>
                            <div className="reservation-row">
                                <span>Night(s)</span>
                                <span style={{fontWeight: "bold"}}>{ this.props.nrNights }</span>
                            </div>
                            <div className="reservation-row">
                                <span>Room(s)</span>
                                <span style={{fontWeight: "bold"}}>{ this.state.totalNrRooms }</span>
                            </div>
                            <div className="reservation-row">
                                <span>Guest(s)</span>
                                <span style={{fontWeight: "bold", marginBottom: "3%"}}>
                                    { this.state.totalNrAdults } Adult(s), { this.state.totalNrChildren } Child(ren)
                                </span>
                            </div>
                        </div>
                        <div className="reservation-left-box-lower">
                            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>ROOMS</p>
                            <div className="reservation-hr-container"><div className="reservation-line" /></div>
                            { this.props.nrRoomsArray.map( (room, index) => (
                                room.roomLetter != null &&
                                <>
                                    <div className="reservation-room-information-container" key={index+1}>
                                        <div className="reservation-row-nosidemargin">
                                            <p style={{fontWeight: "bold", fontSize: "13px"}}>ROOM {index+1}</p>
                                            { room.people[0] } Adult(s), { room.people[1] } Child(ren)
                                        </div>
                                        <p style={{fontWeight: "bold", fontSize: "14px", color: "#8E7037"}}>{ this.props.renderRoomName(room.roomLetter) }</p>
                                        <div className="reservation-hr-container"><div className="reservation-line" style={{marginBottom: "5%"}} /></div>
                                        <p style={{fontWeight: "bold", fontSize: "13px"}}>ROOM PRICE</p>
                                        <div className="reservation-row-nosidemargin">
                                            <span>{ this.props.startDate } - { this.props.endDate }</span>
                                            <span style={{fontWeight: "bold"}}>${ this.props.renderTotalRoomPrice(room.roomLetter) }</span>
                                        </div>
                                        <div className="reservation-hr-container"><div className="reservation-line" style={{marginBottom: "5%"}} /></div>
                                        <div className="reservation-row-nosidemargin">
                                            <span>Service</span>
                                            <span style={{fontWeight: "bold"}}>FREE</span>
                                        </div>
                                        <div className="reservation-row-nosidemargin">
                                            <span>Tax</span>
                                            <span style={{fontWeight: "bold"}}>${ Math.round(this.state.taxes[index] * 100) / 100 }</span>
                                        </div>
                                        <div className="reservation-row-nosidemargin">
                                            <p style={{fontWeight: "bold", fontSize: "13px"}}>TOTAL ROOM {index+1}</p>
                                            <span style={{fontWeight: "bold"}}>
                                                ${ Math.round((this.props.renderTotalRoomPrice(room.roomLetter) + this.state.taxes[index]) * 100) / 100 }
                                            </span>
                                        </div>
                                    </div>
                                    { index != this.props.nrRoomsArray.length-1 &&
                                        <div className="reservation-hr-container"><div className="reservation-line" /></div>
                                    }
                                </>
                            )) }
                            <div className="reservation-grand-total-container">
                                <span>TOTAL</span>
                                <span>${ Math.round(this.state.grandTotal * 100) / 100 }</span>
                            </div>
                        </div>
                    </div>
                    <div className="reservation-right-box-white">
                        <Form onSubmit={this.handleSubmit}>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>COUNTRY <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control as="select" placeholder="United States">
                                        <RenderCountries />
                                    </Form.Control>
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>FIRST NAME <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="First name" />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>LAST NAME <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="Last name" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label style={{fontSize: "smaller"}}>COMPANY NAME</Form.Label>
                                    <Form.Control placeholder="Company name" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>ADDRESS <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="Street address" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Control placeholder="Apartment, suite, unit, etc. (optional)" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>TOWN / CITY <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="Town / City" />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>STATE <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="State" />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>ZIP CODE <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="Zip code" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>EMAIL ADDRESS <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="Email address" />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>PHONE NUMBER <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control placeholder="Phone number" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>BOOKING NOTES</Form.Label>
                                    <Form.Control as="textarea" placeholder="Notes about your booking, e.g. special requests" />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Check custom type="checkbox" id="create-account" label="CREATE AN ACCOUNT?" style={{fontSize: "smaller"}} />
                                </Col>
                            </CustomRow>
                            <div className="reservation-coupon-box">
                                { !this.state.toggleCouponCode ?
                                    <>
                                        Have a coupon?
                                        <span style={{fontWeight: "bold", marginLeft: "4px", cursor: "pointer"}} onClick={() => this.setState({ toggleCouponCode: !this.state.toggleCouponCode })}>
                                            Click here to enter your code
                                        </span>
                                    </>
                                :
                                    <>
                                        <span style={{width: "15%", marginTop: "0.8%"}}>Coupon code:</span>
                                        <Form.Control placeholder="Coupon code" />
                                        <span className="reservation-custom-button-submit">Submit</span>
                                    </>
                                }
                            </div>
                            <div className="reservation-radio">
                            <label>
                                    <input type="radio" name="payment-choice" value="bank" style={{marginRight: "10px", marginBottom: "20px"}} />
                                    DIRECT BANK TRANSFER
                                    </label>
                                    <label>
                                    <input type="radio" name="payment-choice" value="check" style={{marginRight: "10px", marginBottom: "20px"}} />
                                    CHECK PAYMENT
                                    </label>
                                    <label>
                                    <input type="radio" name="payment-choice" value="card" style={{marginRight: "10px", marginBottom: "20px"}} />
                                    CREDIT CARD
                                    </label>
                            </div>
                            <span className="reservation-custom-button-placeorder">PLACE ORDER</span>
                        </Form>
                    </div>
                </div>
            </>
        );
    };
};

const CustomRow = styled(Row)`
    margin-bottom: 20px;
`

export default Step3;