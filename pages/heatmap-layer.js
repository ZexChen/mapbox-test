import DeckGL from '@deck.gl/react';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function HeatmapLayerPage() {
  const layer = new HeatmapLayer({
    id: 'HeatmapLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/sf-bike-parking.json',
    
    /* props from HeatmapLayer class */
    
    // aggregation: 'SUM',
    // colorDomain: null,
    // colorRange: [[255, 255, 178], [254, 217, 118], [254, 178, 76], [253, 141, 60], [240, 59, 32], [189, 0, 38]],
    getPosition: d => d.COORDINATES,
    // getWeight: 1,
    // intensity: 1,
    radiusPixels: 25,
    // threshold: 0.05,
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    // pickable: false,
    // visible: true,
    // wrapLongitude: false,
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
        bearing: 0,
      }}
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