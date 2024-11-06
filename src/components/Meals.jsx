import { useEffect } from "react";
import { useState } from "react";
import MealItem from "./MealItem.jsx";

export default function Meals() {
    const [loadedMeal, setLoadedMeal] = useState([]);
    useEffect(() => {
        async function fetchMeals() {
            const response =await fetch('http://localhost:3000/meals');
            if (!response.Ok) {

            }
            const meals =await response.json();
            setLoadedMeal(meals);
        }
        fetchMeals();
    }, []);
    return (
        <ul id="meals">{loadedMeal.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}</ul>
    );
}