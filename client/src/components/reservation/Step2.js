import React from "react";

class Step2 extends React.Component {
    render() {
        return(
            <>
                <div className="reservation-menu">
                    <div className="reservation-number">1.</div>
                    <div className="reservation-text">Choose Date</div>
                    <div className="reservation-space" />
                    <div className="reservation-active">
                        <div className="reservation-number">2.</div>
                        <div className="reservation-text">Choose Room</div>
                    </div>
                    <div className="reservation-space" />
                    <div className="reservation-number">3.</div>
                    <div className="reservation-text">Make Reservation</div>
                    <div className="reservation-space" />
                    <div className="reservation-number">4.</div>
                    <div className="reservation-text">Confirmation</div>
                </div>
                <div className="reservation-hr-container"><hr style={{marginTop: "-1px", width: "60%"}} /></div>
                <div className="reservation-container">
                    <div className="reservation-left-box-container">
                        <div className="reservation-left-box-select-rooms">
                            <p align="center" style={{marginTop: "20px", fontWeight: "bold", fontSize: "15px"}}>SELECT ROOMS</p>
                            <div className="reservation-hr-container"><div className="reservation-line" /></div>
                        </div>
                        <div className="reservation-left-box-lower">
                            { this.props.renderLeftBox() }
                        </div>
                    </div>
                    <div className="reservation-right-box-white">
                        test
                    </div>
                </div>
            </>
        )
    }
}

export default Step2;