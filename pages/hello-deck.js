import React from 'react';
import DeckGL from '@deck.gl/react';
import { MapView, FirstPersonView } from '@deck.gl/core';
import { LineLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0,
}

const data = [
  {
    sourcePosition: [-122.41669, 37.7853],
    targetPosition: [-122.41669, 37.781],
  }
]


export default function HelloDeck() {
  return (
    <DeckGL
      controller
      initialViewState={INITIAL_VIEW_STATE}
    >
      <LineLayer id="line-layer" data={data} />
      <MapView id="map" width="100%" height="100%" controller={true}>
        <StaticMap mapboxApiAccessToken={mapboxToken} />
      </MapView>
    </DeckGL>
  )
}