import React, { useState } from 'react';
import ReactMapGL, { Popup } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function popup() {
  const [viewport, setViewport] = useState({
    longitude: -122.45,
    latitude: 37.78,
    zoom: 13,
  })
  const [showPopup, togglePopup] = useState(true)
  return (
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      onViewportChange={setViewport}
      mapboxApiAccessToken={mapboxToken}
    >
      {
        showPopup && (
          <Popup
            closeButton
            closeOnClick={false}
            longitude={-122.41}
            latitude={37.78}
            onClose={() => togglePopup(false)}
          >
            <div style={{ width: 100, textAlign: 'center' }}>Popup Message</div>
          </Popup>
        )
      }

    </ReactMapGL>
  )
}