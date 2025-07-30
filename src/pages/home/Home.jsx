import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";
import kumbalgamuwa from "../../assets/kum.jpeg"
import mempcover from "../../assets/memp54.jpeg"
import Aluminumcover from "../../assets/alu.jpeg"
import consultaion from "../../assets/energy-consultation.jpg"
import manpower from "../../assets/manpower.jpeg"
import slecover from "../../assets/sle1.jpg"



function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      
     <div className="explore">
  <div className="container">
    <h1>Explore Our Energy Solutions</h1>
    <div className="items">
      <div className="item">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUEbby6hNcedOlUzhWxlGKl6YqYlIEjqnM6g&s"
          alt="Solar Power Development"
        />
        <div className="line"></div>
        <span>Solar Power Development</span>
      </div>
      <div className="item">
        <img
          src={mempcover}
          alt="Meter Board Manufacturing"
        />
        <div className="line"></div>
        <span>Meter Board Manufacturing</span>
      </div>
      <div className="item">
        <img
          src={kumbalgamuwa}
          alt="Energy Generation"
        />
        <div className="line"></div>
        <span>Energy Generation</span>
      </div>
      <div className="item">
        <img
          src={Aluminumcover}
          alt="Aluminium Recycling"
          
        />
        <div className="line"></div>
        <span>Aluminium Recycling</span>
      </div>
      <div className="item">
        <img
          src={consultaion}
          alt="Energy Consulting"
        />
        <div className="line"></div>
        <span>Energy Consulting</span>
      </div>
      <div className="item">
        <img
          src={manpower}
          alt="SLE Man Power"
        />
        <div className="line"></div>
        <span>SLE Man Power</span>
      </div>
    </div>
  </div>
</div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              Sri Lanka Energies <i>(pvt) ltd</i>
            </h1>
            <h1>
              Renewable Energy Solutions 
            </h1>
            <p>
              Upgrade to a tailored energy experience with tools and services designed for commercial success.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect with Expert Energy Consultants
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Customized Solutions by Energy Specialists
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Optimize Energy Efficiency with Advanced Tools
            </div>
            <button>Explore Business Energy Solutions</button>
          </div>
          <div className="item">
            <img
              src="https://example.com/images/energy-business.png"
              alt=""
            />
          </div>
           <div className="item">
            <img
              src={slecover}
              alt=""
            />
          </div>
        </div>
        
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;