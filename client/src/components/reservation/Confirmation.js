import React from "react";

class Confirmation extends React.Component {

    render() {
        return(
            <>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-confirmation-container">
                        <h4>TERRA NOVA</h4>
                        <h4>BOOKING NUMBER #17654034</h4>
                        <div style={{marginTop: "7%"}} className="reservation-confirmation-row">
                            <div className="reservation-confirmation-row-column1">
                                CHECK IN:
                            </div>
                            <div className="reservation-confirmation-row-column2">
                                {`${this.props.startDateDisplay} (2 PM - 2 AM LOCAL TIME)`}
                            </div>
                        </div>
                        <div className="reservation-confirmation-row">
                            <div className="reservation-confirmation-row-column1">
                                CHECK OUT:
                            </div>
                            <div className="reservation-confirmation-row-column2">
                                {`${this.props.endDateDisplay} (BEFORE 11 AM LOCAL TIME)`}
                            </div>
                        </div>
                        <div className="reservation-confirmation-row">
                            <div className="reservation-confirmation-row-column1">
                                YOUR STAY:
                            </div>
                            <div className="reservation-confirmation-row-column2">
                                {`${this.props.nrNights} NIGHT(S), ${this.props.nrRooms} ROOM(S)`}
                            </div>
                        </div>
                        <div className="reservation-confirmation-row">
                            <div className="reservation-confirmation-row-column1">
                                AMOUNT PAID:
                            </div>
                            <div className="reservation-confirmation-row-column2">
                                ${this.props.grandTotal}
                            </div>
                        </div>
                        <div style={{fontSize: "smaller", marginTop: "7%"}}>
                            MORE INFORMATION ABOUT YOUR STAY WILL BE SENT TO YOUR EMAIL ADRESS.
                        </div>
                        <div className="reservation-new-booking-button" onClick={this.props.cleanLocalStorage} >
                            MAKE ANOTHER BOOKING
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default Confirmation;