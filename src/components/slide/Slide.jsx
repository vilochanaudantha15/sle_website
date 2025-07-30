import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'infinite-react-carousel';
import { powerPlants } from '../../data.js';
import './Slide.scss';

const Slide = ({ slidesToShow, arrowsScroll }) => {
  const navigate = useNavigate();

  const handleTileClick = (plantId) => {
    navigate(`/plant/${plantId}`);
  };

  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {powerPlants.map((plant, index) => (
            <div
              key={plant.id}
              className="plant-tile"
              style={{ '--tile-index': index }} // Add index for staggered animation
              onClick={() => handleTileClick(plant.id)}
            >
              <div className="image-container">
                <img
                  src={plant.images[0] || 'https://via.placeholder.com/300'}
                  alt={plant.title}
                  className="tile-image"
                />
                <div className="tile-overlay">
                  <div className="tile-content">
                    <h3>{plant.title}</h3>
                    <p>{plant.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Slide;