import React from 'react'
import './aboutstyles/HotelStatistics.css';
import styled from 'styled-components';
import Shannon from '../../images/aboutus/shancircle.png'
import Adam from "../../images/aboutus/adam.png";
import Noah from "../../images/aboutus/noah.png";


const StatContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 7%;
    padding-right: 7%;
    height: 100%;
    width: 100%;
    -webkit-user-select: none;
    background-color: rgb(44, 44, 44) !important;   
`
const StatContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: -6% !important;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
    width: 100%;
    -webkit-user-select: none;
`
const StatColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 1%;
    margin-left: 1%;
    height: 10%;
    width: 100%;
    margin-bottom: 2%;
    -webkit-user-select: none;

`
const H1 = styled.span`
    display: flex;
    justify-content: center;
    font-family: Lato,'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 35px;
    color: white;
    margin-bottom: 5%;
`
const H2 = styled.span`
    display: flex;
    font-family: 'Open Sans;', sans-serif;
    font-size: 60px;
    color: white;
    font-display: bold;
`

const H3 = styled.div`
    margin-top: 5%;
    display: flex;
    font-family: 'Open Sans;' sans-serif;
    font-weight: normal;
    font-size: 20px;
    color: white;
`
const H4 = styled.span`
    margin-top: 4%;
    display: flex;
    font-family: Lato,'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 250%;
    color: rgb(44, 44, 44);
    font-display: bold;
`
const H5 = styled.span`
    display: flex;
    font-family: Lato,'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 160%;
    color: rgb(44, 44, 44);
    font-display: thinner;
    margin-top: 1%;
`
const TeamContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 2%;
    padding-bottom: 5%;
    padding-left: 7%;
    padding-right: 7%;
    height: 100%;
    width: 100%;
    -webkit-user-select: none;
    background-color:  white;
`
const TeamContainer2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    height: 100%;
    width: 100%;
    -webkit-user-select: none;
    background-color:  white;
`
const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 100%;
    -webkit-user-select: none;
    background-color:  white;
`
const Column = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: center; 
    align-items: center;
    border-right: 1px solid white;
`
const ColumnTeam = styled.div`
    position: relative;
    margin-top: 5%;
    width: 25%;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
`

const ColumnRight = styled.div`
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    width: 25%;
    justify-content: center; 
    align-items: center;
`

const HotelStatistics = () => (
    <>
        <StatContainer>
            <StatContainer2>
                <H1>HOTEL STATISTICS</H1>
            </StatContainer2>
            <StatColumnContainer>
                <Column>  
                    <H2>768 </H2>  
                    <H3>GUEST STAYS</H3>
                </Column>
                <Column>
                    <H2>632</H2>  
                    <H3>ROOMS BOOKED</H3>
                </Column>
                <Column>
                    <H2>1024</H2>  
                    <H3>MEMBER STAYS</H3>
                </Column>
                <ColumnRight>
                    <H2>256</H2>  
                    <H3>MEALS SERVED</H3>
                </ColumnRight>
            </StatColumnContainer>
        </StatContainer>
        <TeamContainer>
            <TeamContainer2>
                 <H4>TEAM MEMBERS</H4>
                 <H5>These are the people who make magic happen.</H5>
            </TeamContainer2>   
            <ColumnContainer>
                <ColumnTeam>
                    <img src={Noah} className="dot" />
                    <div className="names">NOAH ANDERSON</div>
                    <div className="position">BACKEND WIZARD</div>
                    <div className="text">
                            Mea omnium explicari te, eu sit vidit
                            haram fabellas, his no legere
                            feugaitper in laudem on malorum 
                            epicuri, natum evertitur nu per.
                    </div>
                </ColumnTeam>
                <ColumnTeam>
                    <span className="dot"></span>
                    <div className="names">MIKELLE BROWN</div>
                    <div className="position">DESIGN GURU</div>
                    <div className="text">
                            Mea omnium explicari te, eu sit vidit
                            haram fabellas, his no legere
                            feugaitper in laudem on malorum 
                            epicuri, natum evertitur nu per.
                        </div>
                </ColumnTeam>
                <ColumnTeam>

                    <img src={Shannon} className="dot"></img>
                    <div className="names">SHANNON JONES</div>
                    <div className="position">STYLING SORCERESS</div>
                    <div className="text">
                        Curious and creative guy with a master degree in physics and meteorology, who after an exchange semester in New Zealand realized that a career within IT is the way to go.
                    </div>
                </ColumnTeam>
                <ColumnTeam>
                    <img src={Adam} className="dot" />
                    <div className="names">ADAM VON KRAEMER</div>
                    <div className="position">FRONTEND NINJA</div>
                    <div className="text">
                        Curious and creative guy with a master degree in physics and meteorology, who after an exchange semester in New Zealand realized that a career within IT and programming is the way to go.
                    </div>
                </ColumnTeam>      
            </ColumnContainer>
        </TeamContainer>
    </>
);

export default HotelStatistics;
