import React from 'react';
import MyCard from './MyCard'; // Make sure to adjust the import path based on your project structure
import UseMovie from '../Hooks/UseMovie';

function BasicExample() {
const {data, getImage}=UseMovie()
console.log("hgdfhjfjhfjhf",data)
  return (
    <div className="d-flex justify-content-center flex-wrap ">
      {data.map((value, index) => (
        <MyCard
          title={value.title}
          description={value.overview}
          imageUrl={getImage(value.poster_path)}
          releaseDate={value.release_date}
          
          // You may need to define the `getImage` function
          buttonText="Go to Card 1"
        />
      ))}
    </div>
  );
}

export default BasicExample;
