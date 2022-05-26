import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './SingleFoodItem.css';

const SingleFoodItem = ({ food }) => {
    const { description, name, img } = food;
    return (
        <div>
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={img} className="w-75 img-fluid m-auto" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleFoodItem;