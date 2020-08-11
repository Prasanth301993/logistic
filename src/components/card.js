import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';

function Cards() {
    return (
        <React.Fragment>
            <Container>
                <Row>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://webassets.tomtom.com/m/5460d6e3bc5f7d9/original/OG-Image-Fleet-Management-Logistics-industries_1200x630.jpg" width="100" height="180" />
                            <Card.Body>
                                <Card.Title>OCEAN FREIGHT</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                 </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card >
                            <Card.Img variant="top" src="https://www.wagenborg.com/media/2225/ff82890.jpg" width="100" height="180" />
                            <Card.Body>
                                <Card.Title>ROADWAY FREIGHT</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/PD_jQXlRylK4KmAb1l829miNRrW57KCbLFJN9O-LOiwhpAWFAXbWfR82ocJ3AHLEfjShprcDb8I6Ja4aXYaGBhdPeIbnEhld7k8AeNFXvWYLJpw1vuxqvXgtouHi8yFKuEyjpH-cfA" width="100" height="180" />
                            <Card.Body>
                                <Card.Title>AIR FREIGHT</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>

    );
}

export default Cards;
