import React, { useState } from 'react';
import ReactMapGL, { LinearInterpolator, FlyToInterpolator, WebMercatorViewport } from 'react-map-gl';
import { mapboxToken } from '../utils';

export default function FlyLocation() {
  const [viewport, setViewport] = useState({
    width: 800,
    height: 600,
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
  });

  const goToNYC = () => {
    setViewport({
      ...viewport,
      longitude: -74.1,
      latitude: 40.7,
      zoom: 14,
    });
  };

  const goToSF = () => {
    const {longitude, latitude, zoom} = new WebMercatorViewport(viewport)
        .fitBounds([[-122.4, 37.7], [-122.5, 37.8]], {
          padding: 20,
          offset: [0, -100]
        });
    setViewport({
      ...viewport,
      longitude,
      latitude,
      zoom,
    });
  };

  return (
    <div>
      <ReactMapGL
        {...viewport}
        onViewportChange={setViewport}
        mapboxApiAccessToken={mapboxToken}
        transitionDuration={3000}
        transitionInterpolator={new FlyToInterpolator()}
      />
      <button onClick={goToNYC}>Go To New York</button>
      <button onClick={goToSF}>goToSF</button>
    </div>
  );
}
