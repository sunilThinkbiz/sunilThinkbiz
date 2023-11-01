import {useState, useEffect} from 'react'
import { getUpcomingMovies, getImage  } from '../services/movieAPI';

const UseMovie = () => {
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
  return {
    data,
    getImage
  }
}

export default UseMovie