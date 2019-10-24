import React from 'react';
import { withRouter } from 'react-router-dom';
import './styles/RoomsRates.css';
import mountainview from '../images/rooms/mountainview.jpg';
import lakeview from '../images/rooms/lakeview.jpg';
import VIP1 from '../images/rooms/VIP1.jpg';
import VIP2 from '../images/rooms/VIP2.jpg';
import family from '../images/rooms/family.jpg';

const Button = withRouter(({ history, room }) => (
    <span
        className="roomsrates-button"
        onClick={() => { history.push({
            pathname: '/roomdetails',
            room
        }) }}
    >
        VIEW DETAILS
    </span>
));

const RoomsRates = () => (
    <>
        <div className="roomsrates-header">
            ROOMS & RATES
        </div>
        <div className="roomsrates-rooms">
            <div className="roomsrates-room">
                <div className="roomsrates-room-header">MOUNTAIN VIEW</div>
                <img
                    src={mountainview}
                    alt="mountainview"
                    width="100%"
                />
                <p className="roomrates-description">A modern duplex cabin with beautiful mountain view.</p>
                <div className="roomsrates-list-container">
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>Max: 4 Persons</li>
                            <li>Size: 376 ft<sup>2</sup> / 35 m<sup>2</sup></li>
                        </ul>
                    </div>
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>View: Mountain</li>
                            <li>Bed: King-Size or twin beds</li>
                        </ul>
                    </div>
                </div>
                <hr width="100%" style={{margin: "0.5em 0 0.7em 0"}} />
                <div className="roomsrates-details-container">
                    Starting at $260 /night
                    <Button room="B" />
                </div>
                <hr width="100%" style={{marginTop: "0.7em"}} />
            </div>

            <div className="roomsrates-room">
                <div className="roomsrates-room-header">LAKE VIEW</div>
                <img
                    src={lakeview}
                    alt="lakeview"
                    width="100%"
                />
                <p className="roomrates-description">A modern duplex cabin with partial view of Hebgen Lake.</p>
                <div className="roomsrates-list-container">
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>Max: 4 Persons</li>
                            <li>Size: 376 ft<sup>2</sup> / 35 m<sup>2</sup></li>
                        </ul>
                    </div>
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>View: Mountain</li>
                            <li>Bed: King-Size or twin beds</li>
                        </ul>
                    </div>
                </div>
                <hr width="100%" style={{margin: "0.5em 0 0.7em 0"}} />
                <div className="roomsrates-details-container">
                    Starting at $260 /night
                    <Button room="A" />
                </div>
                <hr width="100%" style={{marginTop: "0.7em"}} />
            </div>

            <div className="roomsrates-room">
                <div className="roomsrates-room-header">VIP ROOM #1</div>
                <img
                    src={VIP1}
                    alt="viproom1"
                    width="100%"
                    height="376px"
                />
                <p className="roomrates-description">A deluxe room for deluxe people.</p>
                <div className="roomsrates-list-container">
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>Max: 4 Persons</li>
                            <li>Size: 376 ft<sup>2</sup> / 35 m<sup>2</sup></li>
                        </ul>
                    </div>
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>View: Mountain</li>
                            <li>Bed: King-Size or twin beds</li>
                        </ul>
                    </div>
                </div>
                <hr width="100%" style={{margin: "0.5em 0 0.7em 0"}} />
                <div className="roomsrates-details-container">
                    Starting at $520 /night
                    <Button room="V1" />
                </div>
                <hr width="100%" style={{marginTop: "0.7em"}} />
            </div>

            <div className="roomsrates-room">
                <div className="roomsrates-room-header">VIP ROOM #2</div>
                <img
                    src={VIP2}
                    alt="viproom2"
                    width="100%"
                    height="376px"
                />
                <p className="roomrates-description">A deluxe room for deluxe people.</p>
                <div className="roomsrates-list-container">
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>Max: 4 Persons</li>
                            <li>Size: 376 ft<sup>2</sup> / 35 m<sup>2</sup></li>
                        </ul>
                    </div>
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>View: Mountain</li>
                            <li>Bed: King-Size or twin beds</li>
                        </ul>
                    </div>
                </div>
                <hr width="100%" style={{margin: "0.5em 0 0.7em 0"}} />
                <div className="roomsrates-details-container">
                    Starting at $520 /night
                    <Button room="V2" />
                </div>
                <hr width="100%" style={{marginTop: "0.7em"}} />
            </div>

            <div className="roomsrates-room">
                <div className="roomsrates-room-header">FAMILY ROOM</div>
                <img
                    src={family}
                    alt="familyroom"
                    width="100%"
                />
                <p className="roomrates-description">A whole unit with both a mountain view room and lake view room.</p>
                <div className="roomsrates-list-container">
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>Max: 8 Persons</li>
                            <li>Size: 752 ft<sup>2</sup> / 70 m<sup>2</sup></li>
                        </ul>
                    </div>
                    <div className="roomsrates-ul-column">
                        <ul>
                            <li>View: Lake & Mountain</li>
                            <li>Bed: Two King-Size or twin beds</li>
                        </ul>
                    </div>
                </div>
                <hr width="100%" style={{margin: "0.5em 0 0.7em 0"}} />
                <div className="roomsrates-details-container">
                    Starting at $500 /night
                    <Button room="F" />
                </div>
                <hr width="100%" style={{marginTop: "0.7em"}} />
            </div>
            
        </div>
    </>
);

export default RoomsRates;