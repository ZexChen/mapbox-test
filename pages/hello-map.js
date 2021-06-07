import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxglAccessToken = 'pk.eyJ1IjoicGhhbnpleDI0IiwiYSI6ImNrcGRoOGwwMjFmMzAycmxhZWpqMXZvNmMifQ.uNyIMtvPI-G9vQro0VdAgA';

export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  })
  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapboxglAccessToken}
    />
  )
}