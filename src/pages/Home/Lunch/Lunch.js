import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Lunch = () => {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('./lunch.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, []);
    return (
        <div id="lunch" className="container">
            <Row xs={1} lg={3} className="g-4">
                {
                    foods.map(food => (
                        <Col key={food.id}>
                            <Card className="food-card">
                                <Card.Img className="w-50 mx-auto" variant="top" src={food.img} />
                                <Card.Body className="text-center">
                                    <Card.Title>{food.name}</Card.Title>
                                    <Card.Text>
                                        {food.details.slice(0, 30)}
                                    </Card.Text>
                                    <Card.Text className="fw-bold fs-4">
                                        {food.price}
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

export default Lunch;