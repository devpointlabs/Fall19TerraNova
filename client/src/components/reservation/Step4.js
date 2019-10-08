import React from "react";

class Step4 extends React.Component {
    render() {
        return(
            <>
            <div className="reservation-menu">
                    <div className="reservation-number">1.</div>
                    <div className="reservation-text">Choose Date</div>
                    <div className="reservation-space" />
                    <div className="reservation-number">2.</div>
                    <div className="reservation-text">Choose Room</div>
                    <div className="reservation-space" />
                    <div className="reservation-number">3.</div>
                    <div className="reservation-text">Make Reservation</div>
                    <div className="reservation-space" />
                    <div className="reservation-active">
                    <div className="reservation-number">4.</div>
                    <div className="reservation-text">Confirmation</div>
                    </div>
                </div>
            </>
        )
    }
}

export default Step4;