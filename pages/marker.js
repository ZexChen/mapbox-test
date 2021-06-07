import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const token = 'pk.eyJ1IjoicGhhbnpleDI0IiwiYSI6ImNrcGRoOGwwMjFmMzAycmxhZWpqMXZvNmMifQ.uNyIMtvPI-G9vQro0VdAgA';

export default function MarkerPage() {
  const [viewport, setViewPort] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 14,
  })

  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={token}
      onViewportChange={setViewPort}
    >
      <Marker longitude={-122.41} latitude={37.78} offsetLeft={-20} offsetTop={-10}>
        <div>Marker is Here !!</div>
        <img src="https://www.scdn.co/i/_global/twitter_card-default.jpg" />
      </Marker>
    </ReactMapGL>
  )
}