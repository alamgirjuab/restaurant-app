import React, { useEffect, useState } from 'react';
import SingleFoodItem from '../SingleFoodItem/SingleFoodItem';
import './FoodItems.css';

const FoodItems = () => {
    const [foodItems, setFoodItems] = useState([]);
    const uri = 'http://localhost:5000/FoodItemsLists';
    useEffect(() => {
        fetch(uri)
            .then(res => res.json())
            .then(data => setFoodItems(data))
    }, [])
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 g-4 my-5">
                {
                    foodItems.map(food => <SingleFoodItem key={food._id} food={food} />)
                }
            </div>
        </div>
    );
};

export default FoodItems;