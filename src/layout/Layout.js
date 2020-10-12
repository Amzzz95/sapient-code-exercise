import React from 'react'
import { Navbar, Container } from "react-bootstrap";

const Layout = props => {
    const getHeader = () => {
        return (
            <Navbar bg="light" className="mt-3">
                <Navbar.Brand>
                    SpaceX Launch Programs
                </Navbar.Brand>
            </Navbar>
        )
    };

    return (
        <Container>
            {getHeader()}
            {props.children}
        </Container>
    )
}

export default Layout;
