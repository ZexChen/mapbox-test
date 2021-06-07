import React, { useState } from 'react';
import ReactMapGL, { Source, Layer } from 'react-map-gl';
import { mapboxToken } from '../utils';

const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.4, 37.8]
      }
    }
  ]
}

const layerStyle = {
  id: 'point',
  type: 'circle',
  paint: {
    'circle-radius': 10,
    'circle-color': '#007cbf',
  }
}

export default function AddingCustomData() {
  const [viewport, setViewport] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 12
  });
  return (
    <ReactMapGL
      {...viewport}
      width="100wh"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapboxToken}
    >
      <Source
        id="my-data"
        type="geojson"
        data={geojson}
      >
        <Layer {...layerStyle} />
      </Source>
    </ReactMapGL>
  )
}