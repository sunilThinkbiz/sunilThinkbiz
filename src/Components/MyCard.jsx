import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './MyCard.css'; // Import your custom CSS file

function MyCard({ title, description, imageUrl, buttonText }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(false);
  
  const toggleDescription = () => {
    setDescriptionVisible(!isDescriptionVisible);
  };

  return (
    <div className={`my-card`} onClick={toggleDescription}>
      <Card style={{ width: '18rem', height:'auto' }}>
        {!isDescriptionVisible ? (
          <Card.Img 
          variant="top" 
          src={imageUrl}
          style={{height:'300px'}}
        />
        ) : ( 
          <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary">{buttonText}</Button>
        </Card.Body>
        )}
      </Card>
    </div>
  );
}

export default MyCard;
