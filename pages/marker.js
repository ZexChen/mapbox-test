import React, { useState } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const token = 'pk.eyJ1IjoicGhhbnpleDI0IiwiYSI6ImNrcGRoOGwwMjFmMzAycmxhZWpqMXZvNmMifQ.uNyIMtvPI-G9vQro0VdAgA';

export default function MarkerPage() {
  const [viewport, setViewPort] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 13,
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
        <img width="100" height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/1024px-Circle-icons-computer.svg.png" />
      </Marker>
    </ReactMapGL>
  )
}