import DeckGL from '@deck.gl/react';
import { PathLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function PathLayerPage() {
  const layer = new PathLayer({
    id: 'PathLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart-lines.json',
    
    /* props from PathLayer class */
    
    // billboard: false,
    getColor: d => {
      const hex = d.color;
      // convert to RGB
      return hex.match(/[0-9a-f]{2}/g).map(x => parseInt(x, 16));
    },
    getPath: d => d.path,
    getWidth: d => 5,
    // miterLimit: 4,
    // rounded: false,
    // widthMaxPixels: Number.MAX_SAFE_INTEGER,
    widthMinPixels: 2,
    widthScale: 20,
    // widthUnits: 'meters',
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    parameters: {
      depthMask: false
    },
    pickable: true,
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
        bearing: 0
      }}
      getTooltip={({object}) => object && object.name} 
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