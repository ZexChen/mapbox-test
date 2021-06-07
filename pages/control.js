import React, { useState } from 'react';
import ReactMapGL, { ScaleControl, NavigationControl, AttributionControl, FullscreenControl, GeolocateControl} from 'react-map-gl';
import { mapboxToken } from '../utils';

const attributionStyle = {
  right: 0,
  top: 0,
}

const fullscreenControlStyle = {
  right: 40,
  top: 10,
}

const geolocateControlStyle= {
  right: 80,
  top: 10
};

const navControlStyle= {
  right: 120,
  top: 10
};

const scaleControlStyle = {
  right: 160,
  top: 10,
}

export default function controlPage() {
  const [viewport, setViewport] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 13,
  });
  return (
    <ReactMapGL
      {...viewport}
      attributionControl={false}
      mapboxApiAccessToken={mapboxToken}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
    >
      <AttributionControl compact={true} style={attributionStyle} />
      <FullscreenControl style={fullscreenControlStyle} />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{enableHighAccuracy: true}}
        trackUserLocation={true}
        auto
      />
      <NavigationControl style={navControlStyle} />
      <ScaleControl maxWidth={100} unit="metric" style={scaleControlStyle} />
    </ReactMapGL>
  )
}