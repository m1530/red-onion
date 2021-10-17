import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './Breakfast.css';

const Breakfast = () => {
    const [meal, setMeal] = useState([]);

    useEffect(() => {
        fetch('./breakfast.json')
            .then(res => res.json())
            .then(data => setMeal(data))
    }, []);
    return (
        <div className="container">
            <Row xs={1} lg={3} className="gy-5 g-lg-5">
                {
                    meal.map(food => (
                        <Col key={food.id}>
                            <Card className="food-card">
                                <Card.Img variant="top" className="w-50 mx-auto" src={food.img} />
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

export default Breakfast;