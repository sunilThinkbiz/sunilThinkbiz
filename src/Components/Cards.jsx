import React, { useState, useEffect } from 'react';
import MyCard from './MyCard'; // Make sure to adjust the import path based on your project structure
import { getUpcomingMovies, getImage  } from '../services/movieAPI';

function BasicExample() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUpcomingMovies()
      .then((movies) => {
        setData(movies);
      })
      .catch((error) => {
        console.error('Error fetching upcoming movies:', error);
      });
  }, []);
console.log(data)
  return (
    <div className="d-flex justify-content-center flex-wrap ">
      {data.map((value, index) => (
        <MyCard
          title={value.title}
          description={value.overview}
          imageUrl={getImage(value.poster_path)} // You may need to define the `getImage` function
          buttonText="Go to Card 1"
        />
      ))}
    </div>
  );
}

export default BasicExample;
