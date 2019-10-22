import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import { AuthConsumer } from "../providers/AuthProvider";
import { Navbar as NavbarBS, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink, withRouter } from 'react-router-dom';
import styled from "styled-components";
import "./styles/Navbar.css";
import logo from "../images/logo.png";
import { Icon } from "semantic-ui-react";

class Navbar extends React.Component {
  state = {
    _isMounted: false
  }

  componentDidMount() {
    this.setState({ _isMounted: true })
  }

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
          )
        }
      }
    }
  }

  render() {
    const { auth: { user, handleLogout, } } = this.props;
    return (
      <>
        {this.props.location.pathname !== "/comingsoon" &&
          <>
            <div className="navbar-upper-background">
              <div>
                <Icon style={{ marginRight: "5px", paddingTop: "0px !important", paddingBottom: "0px !important" }} name="snowflake" />
                72°F
                <Icon style={{ marginLeft: "25px", marginRight: "3px" }} name="map marker alternate" />
                35 Kirkwood Creek Road, West Yellowstone, MT 59758
                <Icon style={{ marginLeft: "30px", marginRight: "3px" }} name="phone" />
                (+1)406.646.7200
                </div>
              <div style={{ alignItems: "right" }}>
                <NavbarBS variant="dark" bg="#373737" expand="lg" collapseOnSelect style={{ boxShadow: "none !important" }}>
                  <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
                  <NavbarBS.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" style={{ boxShadow: "none !important" }}>
                      {this.adminVer()}
                      { user ? 
                        <MenuButton
                          exact
                          to="/mytrips"
                          activeStyle={menuButtonActive}
                        >
                          <Icon name="briefcase" style={{ marginBottom: "5px" }} />
                          My trips
                        </MenuButton>
                        :
                        ""
                      }
                      {user ?
                        <div onClick={() => handleLogout(this.props.history)}>
                          <MenuButton
                            to='/login'
                            style={{ marginRight: "10px" }}
                          >
                            <Icon name="user" style={{ marginBottom: "5px" }} />
                            Logout
                        </MenuButton>
                        </div>
                        :
                        <MenuButton
                          exact
                          to="/login"
                          style={{ marginRight: "10px" }}
                          activeStyle={menuButtonActive}
                        >
                          <Icon name="user" style={{ marginBottom: "5px" }} />
                          Sign In or Join
                        </MenuButton>
                      }
                      <NavDropdown className="navbar-navdropdown" alignRight title={<Icon name="dollar sign" />} id="collapsible-nav-dropdown" style={{ marginTop: "3px" }}>
                        <NavDropdown.Item href="#action/3.1"><Icon name="dollar sign" /> (USD)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2"><Icon name="euro sign" /> (EUR)</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3"><Icon name="pound sign" /> (GBP)</NavDropdown.Item>
                      </NavDropdown>
                      <NavDropdown alignRight title="ENG" id="collapsible-nav-dropdown" style={{ marginTop: "3px" }}>
                        <NavDropdown.Item href="#action/3.1">ENG</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">GER</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">SWE</NavDropdown.Item>
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
        {auth =>
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
