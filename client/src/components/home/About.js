import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./home.css/About.css";
import collage from "../../images/about/collage.png";
import master_bedrooms from "../../images/about/master_bedrooms.png";
import lake_view from "../../images/about/lake_view.png";
import pool_and_spa from "../../images/about/pool_and_spa.png";
import wifi_coverage from "../../images/about/wifi_coverage.png";
import awesome_packages from "../../images/about/awesome_packages.png";
import cleaning_everyday from "../../images/about/cleaning_everyday.png";
import buffet_breakfast from "../../images/about/buffet_breakfast.png";
import airport_taxi from "../../images/about/airport_taxi.png";

const About = () => (
    <div className="container">
        <div className="upper">
            <div className="column-left">
                <div className="header">About Us</div>
                <div className="hr-div"><hr class="line" /></div>
                <div className="text">
                    <p>Terra Nova Cabins represent the best in western hospitality and comfort, wrapped in a contemporary expression that will inspire your own unique adventures. Both a haven from the world and a basecamp for adventure, Terra Nova Cabins is your new Southwestern Montana destination rental.</p>
                    <p>From early morning walks near the lake, to late night gatherings around a fire, Terra Nova provides the perfect location for your Montana retreat. Explore Yellowstone's natural beauty, or simply stay snuggled up in our cozy cabins and enjoy the views from the inside out.</p>
                    <Button as={NavLink} to="/about" variant="outline-dark" style={{marginTop: "10px", fontSize: "smaller"}}>READ MORE</Button>
                </div>
            </div>
            <div className="column-right"><img src={collage} style={{marginRight: "0px !important;", paddingRight: "0px !important;", display: "flex !important", justifyContent: "flex-end !important"}} width="90%" /></div>
        </div>
        <div className="lower">
            <div className="card-row">
                <div className="card_right">
                    <img src={master_bedrooms} width="24%" />
                    <div className="image-text">MASTER BEDROOMS</div>
                </div>
                <div className="card_right">
                    <img src={lake_view} width="22%" />
                    <div className="image-text">LAKE VIEW</div>
                </div>
                <div className="card_right">
                    <img src={pool_and_spa} width="22%" />
                    <div className="image-text">POOL AND SPA</div>
                </div>
                <div className="card_rightest">
                    <img src={wifi_coverage} width="22%" />
                    <div className="image-text">WIFI COVERAGE</div>
                </div>
            </div>
            <div className="card-row">
                <div className="card_right">
                    <img src={awesome_packages} width="22%" />
                    <div className="image-text">AWESOME PACKAGES</div>
                </div>
                <div className="card_right">
                    <img src={cleaning_everyday} width="23%" />
                    <div className="image-text">CLEANING EVERYDAY</div>
                </div>
                <div className="card_right">
                    <img src={buffet_breakfast} width="22%" />
                    <div className="image-text">BUFFET BREAKFAST</div>
                </div>
                <div className="card_rightest">
                    <img src={airport_taxi} width="26%" />
                    <div className="image-text">AIRPORT TAXI</div>
                </div>
            </div>
        </div>
    </div>
)

export default About;