import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { powerPlants } from '../../data.js';
import './powerPlantDetails.scss';

const PowerPlantDetails = () => {
  const { plantId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const plant = powerPlants.find((p) => p.id === Number(plantId));

  if (!plant) {
    return (
      <div className="plant-details-page flex items-center justify-center min-h-[calc(100vh-120px)] bg-gray-100">
        <div className="plant-not-found p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl max-w-md text-center">
          <h2 className="text-3xl font-bold text-gray-800">Power Plant Not Found</h2>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % (plant.images?.length || 1)
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + (plant.images?.length || 1)) % (plant.images?.length || 1)
    );
  };

  return (
    <div className="plant-details-page min-h-[calc(100vh-120px)] bg-gradient-to-br from-gray-100 to-blue-50 py-12 px-4">
      <div className="container max-w-7xl mx-auto">
        <div className="plant-header text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">{plant.title}</h1>
          <p className="text-lg md:text-xl text-gray-600">{plant.desc}</p>
        </div>

        <div className="plant-content flex flex-col lg:flex-row gap-8">
          <div className="plant-gallery flex-1 min-w-0">
            {plant.images && plant.images.length > 0 ? (
              <>
                <div className="main-image relative w-full h-96 rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={plant.images[currentImageIndex]}
                    alt={plant.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
                  />
                  {plant.images.length > 1 && (
                    <>
                      <button
                        className="nav-btn prev absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                        onClick={prevImage}
                        aria-label="Previous Image"
                      >
                        ‹
                      </button>
                      <button
                        className="nav-btn next absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-blue-600 transition-colors"
                        onClick={nextImage}
                        aria-label="Next Image"
                      >
                        ›
                      </button>
                    </>
                  )}
                </div>
                <div className="thumbnail-container flex gap-2 mt-4 overflow-x-auto p-2">
                  {plant.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      className={`thumbnail w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                        index === currentImageIndex ? 'border-blue-500 scale-105' : 'border-transparent'
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="no-image text-center p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg">
                <p className="text-gray-600">No images available</p>
              </div>
            )}
          </div>

          <div className="plant-info flex-1 min-w-0 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <div className="tabs flex gap-2 mb-6">
              {['overview', 'specs', 'location'].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <div className="tab-content transition-opacity duration-500">
              {activeTab === 'overview' && (
                <div className="overview">
                  <p className="description text-lg text-gray-700 mb-6">{plant.description}</p>
                  <div className="stats grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: 'Capacity', value: plant.capacity },
                      { label: 'Type', value: plant.type },
                      { label: 'Status', value: plant.status },
                      { label: 'Commissioned', value: plant.commissioningDate },
                      { label: 'Operator', value: plant.operator },
                    ].map((stat, index) => (
                      <div key={index} className="stat-item p-4 bg-gray-50 rounded-lg shadow-sm">
                        <span className="stat-label block font-semibold text-gray-600">{stat.label}</span>
                        <span className="stat-value text-gray-800">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'specs' && (
                <div className="specifications grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {plant.specifications &&
                    Object.entries(plant.specifications).map(([key, value]) => (
                      <div key={key} className="spec-item p-4 bg-gray-50 rounded-lg shadow-sm">
                        <span className="spec-label block font-semibold text-gray-600">
                          {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
                        </span>
                        <span className="spec-value text-gray-800">{value.toString()}</span>
                      </div>
                    ))}
                </div>
              )}

              {activeTab === 'location' && (
                <div className="location">
                  <p className="text-lg text-gray-700 mb-6">
                    <strong>Location:</strong> {plant.location}
                  </p>
                  <div className="map-placeholder p-6 bg-gray-100 rounded-lg text-center shadow-sm">
                    <p className="text-gray-600 mb-2">Map would display here</p>
                    <p className="text-gray-600">
                      Coordinates: {plant.coordinates.lat}, {plant.coordinates.lng}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerPlantDetails;