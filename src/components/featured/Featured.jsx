import React, { useState } from "react";
import "./Featured.scss";
import { useNavigate } from "react-router-dom";

function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/services?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Powering a sustainable future with{" "}
            <span>clean energy solutions</span>
          </h1>
          <p>
            Sri Lanka Energies (Pvt) Ltd offers innovative solar, electrical, and
            energy consultancy services tailored to meet your needs.
          </p>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="search" />
              <input
                type="text"
                placeholder='Try "solar panel installation"'
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Solar Installations</button>
            <button>Energy Audits</button>
            <button>Electrical Design</button>
            <button>Consulting</button>
          </div>
        </div>
        <div className="right">
          <img src="./img/solar-tech.png" alt="Clean Energy" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
