import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../utils'

export default function GeojsonLayer() {
  const layer = new GeoJsonLayer({
    id: 'GeoJsonLayer',
    data: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/website/bart.geo.json',
    
    /* props from GeoJsonLayer class */
    
    // elevationScale: 1,
    extruded: true,
    filled: true,
    getElevation: 30,
    getFillColor: [160, 160, 180, 200],
    getLineColor: f => {
      const hex = f.properties.color;
      // convert to RGB
      return hex ? hex.match(/[0-9a-f]{2}/g).map(x => parseInt(x, 16)) : [0, 0, 0];
    },
    getLineWidth: 1,
    getRadius: 100,
    // lineJointRounded: false,
    // lineMiterLimit: 4,
    // lineWidthMaxPixels: Number.MAX_SAFE_INTEGER,
    lineWidthMinPixels: 2,
    lineWidthScale: 20,
    // lineWidthUnits: 'meters',
    // material: true,
    // pointRadiusMaxPixels: Number.MAX_SAFE_INTEGER,
    // pointRadiusMinPixels: 0,
    // pointRadiusScale: 1,
    // pointRadiusUnits: 'meters',
    stroked: false,
    // wireframe: false,
    
    /* props inherited from Layer class */
    
    // autoHighlight: false,
    // coordinateOrigin: [0, 0, 0],
    // coordinateSystem: COORDINATE_SYSTEM.LNGLAT,
    // highlightColor: [0, 0, 128, 128],
    // modelMatrix: null,
    // opacity: 1,
    pickable: true,
    // visible: true,
    // wrapLongitude: false,
    })  
  return (
    <DeckGL
      controller
      mapStyle={'https://basemaps.cartocdn.com/gl/positron-gl-style/style.json'}
      initialViewState={{
        longitude: -122.4,
        latitude: 37.74,
        zoom: 11,
        maxZoom: 20,
        pitch: 30,
        bearing: 0
      }}
      getTooltip={({object}) => object && (object.properties.name || object.properties.station)}
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