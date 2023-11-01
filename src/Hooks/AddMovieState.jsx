import { useState } from "react";
import axios from "axios";

const initialFormData = {
  image: "",
  description: "",
  releaseDate: "",
  watchTime: "",
  cast: [""],
  director: "",
  producer: "",
};

const AddMovieState = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "cast" ? [value] : value,
    });
  };

  const handleCastChange = (e, index) => {
    const newCast = [...formData.cast];
    newCast[index] = e.target.value;
    setFormData({
      ...formData,
      cast: newCast,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const movieData = {
      image: formData.image,
      description: formData.description,
      releaseDate: formData.releaseDate,
      watchTime: formData.watchTime,
      cast: formData.cast,
      director: formData.director,
      producer: formData.producer,
    };
  
    console.log("Movie Data:", movieData);
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer 307297dd26eb70afc41ee11862fb9be0'
      },
      body: JSON.stringify(movieData), 
    };
    
    fetch(`https://api.themoviedb.org/3/list/{8276513}/add_item`,options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
   
    // try {
    //   const response = await fetch('https://api.themoviedb.org/3/list/list_id/add_item', options);
    //   if (response.ok) {
    //     const responseData = await response.json();
    //     console.log(responseData);
    //   } else {
    //     console.error('Failed to add item to the list');
    //   }
    // } catch (err) {
    //   console.error(err);
    // }
  };
  

  return {
    formData,
    setFormData,
    handleInputChange,
    handleCastChange,
    handleSubmit,
  };
};

export default AddMovieState;
