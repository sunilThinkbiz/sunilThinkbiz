import React from 'react'
import Card from 'react-bootstrap/Card';
import { useLocation } from 'react-router-dom';
const DetailPage = () => {
    const location = useLocation();
    const { state } = location;
  
    // if (!state) {
    
    //   return <div>No details selected.</div>;
    // }
  
    const { title, description, imageUrl,releaseDate } = state;
    
  return (
    <div className={`my-card`} >
    <Card  className="d-flex" style={{width:"700px", display:"flex",height:"450px"}}>
      <Card.Img style={{width:"700px", height:"450px"}} variant="top" src={imageUrl} alt={title} />
      <Card.Body style={{width:"700px"}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5>Release Date:<p>{releaseDate}</p> </h5>
      </Card.Body>
    </Card>
  </div>
  )
}

export default DetailPage