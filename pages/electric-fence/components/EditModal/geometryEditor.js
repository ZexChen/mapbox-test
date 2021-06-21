import React, { useEffect, useState } from 'react';
import DeckGL from 'deck.gl'
import { EditableGeoJsonLayer } from '@nebula.gl/layers';
import { DrawPointMode, DrawLineStringMode, DrawPolygonMode } from '@nebula.gl/edit-modes';
import { StaticMap } from 'react-map-gl';
import { mapboxToken } from '../../../../utils';
import { Divider, NoSsr, Typography } from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components'

const initViewState = {
  longitude: -122.43,
  latitude: 37.775,
  zoom: 12,
}

const ModeContainer = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  background-color: #fff;
  padding: 10px 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
`
const StyledDivider = styled(Divider)`
  margin-top: 5px;
`

export default function GeometryEditor(props) {
  const { setGeoData, geoData } = props;
  const [mode, setMode] = useState('1')
  const [modeConfig, setModeConfig] = useState(() => DrawPointMode)
  const [selectedFeatureIndexes] = useState([])

  const handleChange = (event) => {
    setMode(event.target.value);
  };

  const layer = new EditableGeoJsonLayer({
    id: 'geojosn-layer',
    data: geoData,
    mode: modeConfig,
    selectedFeatureIndexes,
    onEdit: ({updatedData}) => {
      setGeoData(updatedData)
    }
  })

  useEffect(() => {
    if (Number(mode) === 1) {
      setModeConfig(() => DrawPointMode)
    }
    if (Number(mode) === 2) {
      setModeConfig(() => DrawLineStringMode)
    }
    if (Number(mode) === 3) {
      setModeConfig(() => DrawPolygonMode)    
    }
  }, [mode])

  console.log('geoData', geoData)
  return (
    <>
      <DeckGL
        initialViewState={initViewState}
        controller={{
          doubleClickZoom: false
        }}
        layers={[layer]}
        getCursor={layer.getCursor.bind(layer)}
      >
        <StaticMap width="100%" height="100%" mapboxApiAccessToken={mapboxToken} />
      </DeckGL>
      <ModeContainer>
        <FormControl component="fieldset">
          <Typography align="center"><FormLabel component="legend">Modes</FormLabel></Typography>
          <StyledDivider />
          <RadioGroup aria-label="gender" name="gender1" value={mode} onChange={handleChange}>
            <FormControlLabel value='1' control={<Radio />} label="Point" />
            <FormControlLabel value='2' control={<Radio />} label="LineString" />
            <FormControlLabel value='3' control={<Radio />} label="Polygon" />
          </RadioGroup>
        </FormControl>
      </ModeContainer>
    </>
  )
}