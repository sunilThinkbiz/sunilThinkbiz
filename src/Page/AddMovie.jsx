import React from "react";
import AddMovieState from "../Hooks/AddMovieState";

function MovieForm() {
  const {
    formData,
    handleInputChange,
    handleCastChange,
    handleSubmit,
  } = AddMovieState();

  return (
    <div className="container">
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Image URL:</label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={formData.image}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            className="form-control"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Release Date:</label>
          <input
            type="date"
            name="releaseDate"
            className="form-control"
            value={formData.releaseDate}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Watch Time:</label>
          <input
            type="time"
            name="watchTime"
            className="form-control"
            value={formData.watchTime}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Cast:</label>
          {formData.cast.map((actor, index) => (
            <input
              type="text"
              name="cast"
              value={actor}
              key={index}
              className="form-control"
              onChange={(e) => handleCastChange(e, index)}
            />
          ))}
          <button
            type="button" // Change this to "button" to prevent form submission
            className="btn btn-secondary"
            onClick={() =>
              handleInputChange({
                target: {
                  name: "cast",
                  value: [...formData.cast, ""],
                },
              })
            }
          >
            Add Actor
          </button>
        </div>
        <div className="form-group">
          <label>Director:</label>
          <input
            type="text"
            name="director"
            className="form-control"
            value={formData.director}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Producer:</label>
          <input
            type="text"
            name="producer"
            className="form-control"
            value={formData.producer}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default MovieForm;
