
import React, { useState } from "react";
import 'mapbox-gl/dist/mapbox-gl.css';
import MapGL from "react-map-gl";
import {
  Editor,
  EditingMode,
  DrawLineStringMode,
  DrawPolygonMode,
} from "react-map-gl-draw";
import { mapboxToken } from '../utils';

const MODES = [
  { id: "drawPolyline", text: "Draw Polyline", handler: DrawLineStringMode },
  { id: "drawPolygon", text: "Draw Polygon", handler: DrawPolygonMode },
  { id: "editing", text: "Edit Feature", handler: EditingMode },
];

const DEFAULT_VIEWPORT = {
  width: 800,
  height: 600,
  longitude: -122.45,
  latitude: 37.78,
  zoom: 14,
};

export default function EditLayer() {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT)
  const [modeId, setModeId] = useState(null)
  const [modeHandler, setModeHandler] = useState(null)
  const switchMode = (evt) => {
    const currentModeId = evt.target.value === modeId ? null : evt.target.value;
    const mode = MODES.find((m) => m.id === currentModeId);
    const modeHandler = mode ? new mode.handler() : null;
    setModeId(modeId)
    setModeHandler(modeHandler)
  };

  const renderToolbar = () => {
    return (
      <div
        style={{ position: "absolute", top: 10, right: 10, maxWidth: "320px" }}
      >
        <select style={{ padding: 6, width: 120, height: 36, borderRadius: 5 }} onChange={switchMode}>
          <option value="">Default</option>
          {MODES.map((mode) => (
            <option key={mode.id} value={mode.id}>
              {mode.text}
            </option>
          ))}
        </select>
      </div>
    );
  };

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapboxApiAccessToken={mapboxToken}
      mapStyle={"mapbox://styles/mapbox/dark-v9"}
      onViewportChange={setViewport}
    >
      <Editor
        clickRadius={12}
        mode={modeHandler}
        onSelect={d => console.log(d)}
      />
      {renderToolbar()}
    </MapGL>
  );
}
