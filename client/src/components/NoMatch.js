import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
    <>
        <Header as="h3" textAlign="center">
            <p>404 - Page not found!</p>
        </Header>
        <div style={{display: "flex", justifyContent: "center", fontSize: "large", marginBottom: "20px"}}>
            <p><Link to="/">Take me Home</Link></p>
        </div>
    </>
);

export default NoMatch;