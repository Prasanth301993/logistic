import React from 'react';
import { Jumbotron, Container,Badge } from 'react-bootstrap';

function JContainer() {
    return (

        <Jumbotron fluid>
            <Container className="text-center">
                <h1>MAJOR SERVICES</h1>
                <Badge variant="warning" className="px-4"> </Badge>
                <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit enean commodo eget dolor aenean massa eget dolor aenean massa
                </p>
            </Container>
        </Jumbotron>

    );
}

export default JContainer;
