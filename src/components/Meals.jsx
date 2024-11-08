import Error from "./Error.jsx";
import useHttp from "./hook/useHttp.js";
import MealItem from "./MealItem.jsx";

const config = {};

export default function Meals() {
    const {isLoding,error,data:loadedMeal} = useHttp('http://localhost:3000/meals', config,[]);
    if(isLoding){
        return(<p className="center">Fetching Meal..</p>)
    }
    if(error){
        return(
            <Error title="Failed to fetch data" message={error} />
        );
    }
    // if(!loadedMeal){
    //     return( <p>No meals found</p>)
    // }
    return (
        <ul id="meals">{loadedMeal.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
        ))}</ul>
    );
}