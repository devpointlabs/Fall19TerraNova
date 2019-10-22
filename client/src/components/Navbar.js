import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AuthConsumer } from "../providers/AuthProvider";
import { Menu } from 'semantic-ui-react';
import { Navbar as NavbarBS, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, Link, withRouter } from 'react-router-dom';
import styled from "styled-components";
import "./styles/Navbar.css";
import logo from "../images/logo.png";
import { Icon } from "semantic-ui-react";
import axios from 'axios';

class Navbar extends React.Component {
    state = {
        weather: null,
        temperature: null,
        _isMounted: false
    };

    componentDidMount() {
        axios.get("http://api.openweathermap.org/data/2.5/weather?id=5685767&appid=af9da42f618060b239282c8960fa9955")
            .then( response => {
                switch (response.data.weather.main) {
                    case "Thunderstorm":
                        this.setState({ weather: "" });
                        break;
                    case "Drizzle":
                        this.setState({ weather: "" });
                        break;
                    case "Rain":
                        this.setState({ weather: "" });
                        break;
                    case "Snow":
                        this.setState({ weather: "" });
                        break;
                    case "Clear":
                        this.setState({ weather: "" });
                        break;
                    case "Clouds":
                        this.setState({ weather: "" });
                        break;
                    default:
                        this.setState({ weather: "" })
                        break;
                };
                this.setState({ temperature: response.data.main.temp * 9/5 - 459.67 });
            })
        this.setState({ _isMounted: true })
    };

    adminVer = () => {
        if (this.state._isMounted === true) {
            if (this.props.auth.user) {
                if (this.props.auth.user.admin === true) {
                    return (
                        <MenuButton
                            exact
                            to="/admin"
                            activeStyle={menuButtonActive}
                        >
                            Administrator
                        </MenuButton>
                    );
                };
            };
        };
    };

    render() {
        return (
            <>
                { this.props.location.pathname !== "/comingsoon" &&
                    <>
                        <div className="navbar-upper-background">
                            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                                <Icon style={{ marginRight: "5px", marginBottom: "4px" }} name="snowflake" />
                                { this.state.temperature }°F
                                <Icon style={{ marginLeft: "25px", marginRight: "3px", marginBottom: "4px" }} name="map marker alternate" />
                                35 Kirkwood Creek Road, West Yellowstone, MT 59758
                                <Icon style={{ marginLeft: "30px", marginRight: "3px", marginBottom: "16px" }} name="phone" />
                                (+1)406.646.7200
                            </div>
                            <div style={{ alignItems: "right" }}>
                                <NavbarBS variant="dark" bg="#373737" expand="lg" collapseOnSelect style={{ boxShadow: "none !important" }}>
                                    <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                                    <NavbarBS.Collapse id="basic-navbar-nav">
                                        <Nav className="mr-auto" style={{ boxShadow: "none !important" }}>
                                            { this.adminVer() }
                                            <MenuButton
                                                exact
                                                to="/mytrips"
                                                activeStyle={menuButtonActive}
                                            >
                                                <Icon name="briefcase" style={{ marginBottom: "5px" }} />
                                                My trips
                                            </MenuButton>
                                            <MenuButton
                                                exact
                                                to="/login"
                                                style={{ marginRight: "10px" }}
                                                activeStyle={menuButtonActive}
                                            >
                                                <Icon name="user" style={{ marginBottom: "5px" }} />
                                                Sign In or Join
                                            </MenuButton>
                                            <NavDropdown className="navbar-navdropdown" alignRight title={<Icon name="dollar sign" />} id="collapsible-nav-dropdown" style={{marginTop: "3px"}}>
                                                <NavDropdown.Item href=""><Icon name="dollar sign" style={{color: "black"}} /><font style={{color: "black"}}> (USD)</font></NavDropdown.Item>
                                                <NavDropdown.Item disabled><Icon name="euro sign" disabled /> (EUR)</NavDropdown.Item>
                                                <NavDropdown.Item disabled><Icon name="pound sign" disabled /> (GBP)</NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown alignRight title="ENG" id="collapsible-nav-dropdown" style={{marginTop: "3px"}}>
                                                <NavDropdown.Item href=""><font style={{color: "black"}}>ENG</font></NavDropdown.Item>
                                                <NavDropdown.Item disabled>GER</NavDropdown.Item>
                                                <NavDropdown.Item disabled>FRA</NavDropdown.Item>
                                            </NavDropdown>
                                        </Nav>
                                    </NavbarBS.Collapse>
                                </NavbarBS>
                            </div>
                        </div>
                        <NavbarBS className="navbar-background" expand="lg" sticky="top">
                            <div className="navbar-left">
                                <NavbarBS.Brand href="/">
                                    <img src={logo} height="80px" width="50px" />
                                </NavbarBS.Brand>
                            </div>
                            <div className="navbar-right">
                                <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                                <NavbarBS.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                        <NavButton
                                            exact
                                            to="/"
                                            activeStyle={navButtonActive}
                                        >
                                            HOME
                                        </NavButton>
                                        <NavButton
                                            exact
                                            to="/roomsrates"
                                            activeStyle={navButtonActive}
                                        >
                                            ROOMS
                                        </NavButton>
                                        <NavButton
                                            exact
                                            to="/reservation"
                                            activeStyle={navButtonActive}
                                        >
                                            RESERVATION
                                        </NavButton>
                                        <NavButton
                                            exact
                                            to="/gallery"
                                            activeStyle={navButtonActive}
                                        >
                                            GALLERY
                                        </NavButton>
                                        <NavButton
                                            exact
                                            to="/about"
                                            activeStyle={navButtonActive}
                                        >
                                            ABOUT
                                        </NavButton>
                                        <NavButton
                                            exact
                                            to="/contact"
                                            activeStyle={navButtonActive}
                                        >
                                            CONTACT
                                        </NavButton>
                                    </Nav>
                                </NavbarBS.Collapse>
                            </div>
                        </NavbarBS>
                    </>
                }
            </>
        );
    };
};

export class ConnectedNavbar extends React.Component {
    render() {
        return (
            <AuthConsumer>
                { auth =>
                    <Navbar {...this.props} auth={auth} />
                }
            </AuthConsumer>
        );
    };
};

const NavButton = styled(NavLink)`
    display: flex;
    background: #373737;
    color: white;
    padding-top: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 50px;
    margin-right: 0px;
    justify-content: center;
    cursor: pointer;
    height: 40px;
  
    &:hover {
        color: #8E7037;
        text-decoration: none;
    }
`;

const navButtonActive = {
    color: "#8E7037",
    borderBottom: "2px solid #8E7037",
}

const MenuButton = styled(NavLink)`
    display: flex;
    background: #898989;
    color: white;
    justify-content: center;
    cursor: pointer;
    padding-top: 10px;
    height: 36px;
    padding-left: 10px;
    padding-right: 10px;
  
    &:hover {
        color: white;
        text-decoration: none;
        background-color: #555555 !important;
    }
`;

const menuButtonActive = {
    borderBottom: "2px solid white",
}

export default withRouter(ConnectedNavbar);