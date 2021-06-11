import DeckGL from '@deck.gl/react';
import {ScatterplotLayer} from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function ScatterplotLayerPage() {
  const layer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-stations.json',
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: d => d.coordinates,
    getRadius: d => Math.sqrt(d.exits),
    getFillColor: d => [255, 140, 0],
    getLineColor: d => [0, 0, 0]
  });
  return (
    <DeckGL
      controller
      initialViewState={{
        longitude: -122.4,
        latitude: 37.74,
        zoom: 11,
        maxZoom: 20,
        pitch: 30,
        bearing: 0
      }}
      getTooltip={({object}) => object && `${object.name}\n${object.address}`}
      mapStyle={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'}
      layers={[layer]}
    >
      <StaticMap
        height="100vh"
        width="100vw"
        mapboxApiAccessToken={mapboxToken}
      />
    </DeckGL>
  )
}