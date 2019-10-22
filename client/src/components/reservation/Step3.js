import React from "react";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import styled from "styled-components";
import RenderCountries from "./RenderCountries";
import RenderStates from "./RenderStates";
import CheckoutForm from "./CheckoutForm";
import { Elements } from 'react-stripe-elements';

class Step3 extends React.Component {
    state = { 
        _isMounted: false,
        toggleCouponCode: false,
        totalNrRooms: 0,
        totalNrAdults: 0,
        totalNrChildren: 0,
        taxes: [],
        grandTotal: 0,
        showBankTransfer: false,
        showCreditCard: false,
        country: "United States of America",
        firstName: "",
        lastName: "",
        companyName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        email: "",
        phone: "",
        orderNotes: "",
        coupon: "",
        createAccount: false
    };

    componentDidMount() {
        this.setTotalNrRooms();
        this.setTotalNrAdults();
        this.setTotalNrChildren();
        let taxes = this.calculateTaxes();
        this.calculateGrandTotal(taxes);
        this.setState({ _isMounted: true });
        let state = this.state;
    };

    handleChange = (e) => {
        const { name, value, } = e.target;
        this.setState({ [name]: value, });
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
            totalNrChildren += parseInt(room.people[1], 10)
        ));
        this.setState({ totalNrChildren });
    };

    calculateTaxes = () => {
        let taxes = this.state.taxes;
        this.props.nrRoomsArray.map((room, index) => {
            taxes.push("");
            taxes[index] = room.roomPrice * 0.075;
        });
        this.setState({ taxes });
        return taxes;
    };

    calculateGrandTotal = (taxes) => {
        let totalTaxes = 0;
        taxes.map( tax => (totalTaxes += tax));
        let grandTotal = this.props.totalPrice + totalTaxes;
        this.setState({ grandTotal });
        this.props.setGrandTotal(grandTotal);
    };

    toggleBankTransfer = () => {
        this.setState({ showBankTransfer: !this.state.showBankTransfer })
    };

    toggleCreditCard = () => {
        this.setState({ showCreditCard: !this.state.showCreditCard })
    };

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
                                <span style={{fontWeight: "bold"}}>{ this.props.startDateString }</span>
                            </div>
                            <div className="reservation-row">
                                <span>Check-Out</span>
                                <span style={{fontWeight: "bold"}}>{ this.props.endDateString }</span>
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
                                        <span className="reservation-row-nosideandbottommargin">
                                            <span>{ this.props.startDateString } - { this.props.endDateString }</span>
                                            <span style={{fontWeight: "bold"}}>${ this.props.nrRoomsArray[index].roomPrice }</span>
                                        </span>
                                        <row style={{fontSize: "x-small", marginTop: "3px", marginBottom: "6px"}}>
                                            { this.props.nrRoomsArray[parseInt(room.roomNumber, 10)-1].roomPriceType }
                                        </row>
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
                                                ${ Math.round((room.roomPrice + this.state.taxes[index]) * 100) / 100 }
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
                                    <Form.Control
                                        name="country"
                                        value={this.state.country}
                                        as="select"
                                        required
                                        onChange={this.handleChange}
                                    >
                                        <RenderCountries />
                                    </Form.Control>
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>FIRST NAME <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="firstName"
                                        value={this.state.firstName}
                                        placeholder="First name"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>LAST NAME <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="lastName"
                                        value={this.state.lastName}
                                        placeholder="Last name"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label style={{fontSize: "smaller"}}>COMPANY NAME</Form.Label>
                                    <Form.Control
                                        name="companyName"
                                        value={this.state.companyName}
                                        placeholder="Company name"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>ADDRESS <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="address1"
                                        value={this.state.address1}
                                        placeholder="Street address"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Control
                                        name="address2"
                                        value={this.state.address2}
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>TOWN / CITY <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="city"
                                        value={this.state.city}
                                        placeholder="Town / City"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                { this.state.country === "United States of America" &&
                                    <Col>
                                        <Form.Label required style={{fontSize: "smaller"}}>STATE <span style={{color: "red"}}>*</span></Form.Label>
                                        <Form.Control
                                            name="state"
                                            value={this.state.state}
                                            as="select"
                                            placeholder="State"
                                            required
                                            onChange={this.handleChange}
                                        >
                                            <RenderStates />
                                        </Form.Control>
                                    </Col>
                                }
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>ZIP CODE <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="zip"
                                        value={this.state.zip}
                                        placeholder="Zip code"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>EMAIL ADDRESS <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="email"
                                        value={this.state.email}
                                        placeholder="Email address"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>PHONE NUMBER <span style={{color: "red"}}>*</span></Form.Label>
                                    <Form.Control
                                        name="phone"
                                        value={this.state.phone}
                                        placeholder="Phone number"
                                        required
                                        onChange={this.handleChange}
                                    />
                                </Col>
                            </CustomRow>
                            <CustomRow>
                                <Col>
                                    <Form.Label required style={{fontSize: "smaller"}}>BOOKING NOTES</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="address1"
                                        value={this.state.address1}
                                        placeholder="Notes about your booking, e.g. special requests"
                                        onChange={this.handleChange}
                                    />
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
                                    <input type="radio" name="payment-choice" value="card" style={{marginRight: "10px", marginBottom: "20px"}} onClick={this.toggleCreditCard} />
                                    CREDIT CARD
                                    </label>
                                    { this.state.showCreditCard &&
                                      <Elements> 
                                        <CheckoutForm />
                                      </Elements>
                                    }
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