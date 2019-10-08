import React from 'react';
import { Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import "./homestyles/About.css";
import collage from "../../images/about/collage.png";
import master_bedrooms from "../../images/about/master_bedrooms.png";
import lake_view from "../../images/about/lake_view.png";
import pool_and_spa from "../../images/about/pool_and_spa.png";
import wifi_coverage from "../../images/about/wifi_coverage.png";
import awesome_packages from "../../images/about/awesome_packages.png";
import cleaning_everyday from "../../images/about/cleaning_everyday.png";
import buffet_breakfast from "../../images/about/buffet_breakfast.png";
import airport_taxi from "../../images/about/airport_taxi.png";
import styled from "styled-components";

const About = () => (
    <div className="about-container">
        <div className="about-upper">
            <div className="about-column-left">
                <div className="about-header">About Us</div>
                <div className="about-hr-div"><hr className="about-line" /></div>
                <div className="about-text">
                    <p>Terra Nova Cabins represent the best in western hospitality and comfort, wrapped in a contemporary expression that will inspire your own unique adventures. Both a haven from the world and a basecamp for adventure, Terra Nova Cabins is your new Southwestern Montana destination rental.</p>
                    <p>From early morning walks near the lake, to late night gatherings around a fire, Terra Nova provides the perfect location for your Montana retreat. Explore Yellowstone's natural beauty, or simply stay snuggled up in our cozy cabins and enjoy the views from the inside out.</p>
                    <br />
                    <CustomButton as={NavLink} to="/about">READ MORE</CustomButton>
                </div>
            </div>
            <div className="about-column-right"><img src={collage} style={{marginRight: "0px !important", paddingRight: "0px !important", display: "flex !important", justifyContent: "flex-end !important"}} width="90%" /></div>
        </div>
        <div className="about-lower">
            <div className="about-card-row">
                <div className="about-card">
                    <img src={master_bedrooms} width="24%" />
                    <div className="about-image-text">MASTER BEDROOMS</div>
                </div>
                <div className="about-card">
                    <img src={lake_view} width="22%" />
                    <div className="about-image-text">LAKE VIEW</div>
                </div>
                <div className="about-card">
                    <img src={pool_and_spa} width="22%" />
                    <div className="about-image-text">POOL AND SPA</div>
                </div>
                <div className="about-card-right">
                    <img src={wifi_coverage} width="22%" />
                    <div className="about-image-text">WIFI COVERAGE</div>
                </div>
            </div>
            <div className="about-card-row">
                <div className="about-card">
                    <img src={awesome_packages} width="22%" />
                    <div className="about-image-text">AWESOME PACKAGES</div>
                </div>
                <div className="about-card">
                    <img src={cleaning_everyday} width="23%" />
                    <div className="about-image-text">CLEANING EVERYDAY</div>
                </div>
                <div className="about-card">
                    <img src={buffet_breakfast} width="22%" />
                    <div className="about-image-text">BUFFET BREAKFAST</div>
                </div>
                <div className="about-card-right">
                    <img src={airport_taxi} width="26%" />
                    <div className="about-image-text">AIRPORT TAXI</div>
                </div>
            </div>
        </div>
    </div>
);

const CustomButton = styled(Button)`
    border-radius: 0 !important;
    border: 2px solid black !important;
    background: white !important;
    color: black !important;
    font-size: smaller !important;
    padding-left: 17px !important;
    padding-right: 17px !important;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
        background-color: #8E7037 !important;
    }
`;

export default About;