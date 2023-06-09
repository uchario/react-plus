import React, { useState, useEffect } from 'react';
import useHttp from '../../../hooks/use-http';

import MealItem from '../MealItem/MealItem';
import Card from '../../UI/Card/Card';
import ClipLoader from "react-spinners/ClipLoader";

import styles from './AvailableMeals.module.css';

const AvailableMeals = (props) => {
  const [meals, setMeals] = useState([]);

  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const requestConfig = {
      url: 'https://movie-http-21f07-default-rtdb.firebaseio.com/meals.json'
    };

    const dataTransform = (data) => {
      // console.log(data);
      const loadedMeals = [];
  
      for (const mealKey in data) {
        loadedMeals.push({ 
          id: mealKey, 
          name: data[mealKey].name,
          description: data[mealKey].description,
          price: data[mealKey].price
        });
      }
  
      setMeals(loadedMeals);
    }

    fetchMeals(requestConfig, dataTransform);
  }, [fetchMeals]);

  const loader =  <ClipLoader
                    color="#8a2b06"
                    loading={isLoading}
                    size={50}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                  />

  let content;

  if(isLoading) {
    content = <li>{loader}</li>
  }

  if(!isLoading) {
    content = meals.map(
                  meal => (
                      <MealItem
                        key={meal.id}
                        id={meal.id}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                      />
                  )
              )
  }

  if(!isLoading && error) {
    content = <li>{error}</li>;
  }

  return(
      <section className={styles.meals}>
          <Card>
            <ul>
              {content}
            </ul>
          </Card>
      </section>
  );
};

export default AvailableMeals;