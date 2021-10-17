import { React, useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap'

const Dinner = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('./dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, []);
    return (
        <div className="container">
            <Row xs={1} lg={3} className="g-4">
                {
                    dinners.map(dinner => (
                        <Col key={dinner.id}>
                            <Card className="food-card">
                                <Card.Img className="w-50 mx-auto" variant="top" src={dinner.img} />
                                <Card.Body className="text-center">
                                    <Card.Title>{dinner.name}</Card.Title>
                                    <Card.Text>
                                        {dinner.details.slice(0, 30)}
                                    </Card.Text>
                                    <Card.Text className="fw-bold fs-4">
                                        {dinner.price}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </div>
    );
};

export default Dinner;