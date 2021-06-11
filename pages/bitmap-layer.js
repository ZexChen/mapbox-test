import DeckGL from '@deck.gl/react';
import { BitmapLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function BitmapLayerPage(data, viewState) {
  const layer = new BitmapLayer({
    id: 'bitmap-layer',
    bounds: [
      [-80.425, 37.936],
      [-80.425, 46.437],
      [-71.516, 46.437],
      [-71.516, 37.936],  
    ],
    image: 'https://docs.mapbox.com/mapbox-gl-js/assets/radar.gif'
  });
  return (
    <DeckGL
      controller
      mapStyle={'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json'}
      initialViewState={{
        longitude: -75.789,
        latitude: 41.874,
        zoom: 5,
        maxZoom: 9
      }}
      layers={[layer]}
    >
      <StaticMap
        width="100vw"
        height="100vh"
        mapboxApiAccessToken={mapboxToken}
      />
    </DeckGL>
  )
}