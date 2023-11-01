import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MyCard.css'; // Import your custom CSS file
import {useNavigate} from "react-router-dom"

function MyCard({ title, description, imageUrl,releaseDate}) {
  
const navigate=useNavigate()
const handleClickDetails = () => {
  navigate('/movie-detail', { state: { title, description, imageUrl,releaseDate } });
};
  return (
    <div className={`my-card`} >
      <Card style={{ width: '18rem', height:'auto' }}>
      
          <Card.Img 
          variant="top" 
          src={imageUrl}
          style={{height:'300px'}}
        />
     
          <Card.Title>{title}</Card.Title>
          <div className='d-flex justify-content-between"'>
          <Button variant="outline-dark">Edit</Button>
          <Button onClick={handleClickDetails} variant="outline-dark">Details</Button>
          <Button  variant="outline-dark">Delete</Button>
          </div>
       
        
      </Card>
    </div>
  );
}

export default MyCard;
