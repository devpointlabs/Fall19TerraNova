import React from "react";

class Confirmation extends React.Component {
    render() {
        return(
            <>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "83%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-confirmation-container">
                        <h2>TERRA NOVA</h2>
                        <h2>BOOKING NUMBER #17654034</h2>
                        <div className="reservation-confirmation-row">
                            <div className="reservation-confirmation-row-column1">
                                CHECK IN:
                            </div>
                            <div className="reservation-confirmation-row-column2">
                                CHECK IN:
                            </div>
                        </div>
                        <div className="reservation-row">
                            <div className="reservation-confirmation-row-column1">
                                CHECK OUT:
                            </div>
                        </div>
                        <div className="reservation-row">
                            <div className="reservation-confirmation-row-column1">
                                YOUR STAY:
                            </div>
                        </div>
                        <div className="reservation-row">
                            <div className="reservation-confirmation-row-column1">
                                AMOUNT PAID:
                            </div>
                        </div>
                        <div style={{fontSize: "12px"}}>
                            MORE INFORMATION ABOUT YOUR STAY WILL BE SENT TO YOUR EMAIL ADRESS.
                        </div>
                    </div>
                </div>
            </>
        );
    };
};

export default Confirmation;