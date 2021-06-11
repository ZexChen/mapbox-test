import DeckGL from '@deck.gl/react';
import {PolygonLayer} from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function PolygonLayerPage() {
  const layer = new PolygonLayer({
    id: 'polygon-layer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-zipcodes.json',
    pickable: true,
    stroked: true,
    filled: true,
    wireframe: true,
    lineWidthMinPixels: 1,
    getPolygon: d => d.contour,
    getElevation: d => d.population / d.area / 10,
    getFillColor: d => [d.population / d.area / 60, 140, 0],
    getLineColor: [80, 80, 80],
    getLineWidth: 1
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
      getTooltip={({object}) => object && `${object.zipcode}\nPopulation: ${object.population}`} 
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