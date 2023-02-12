import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "./WeatherMap.css";
const WeatherMap = (props) => {
  const position = [props.lat, props.lon];
  console.log(position);
  return (
    <MapContainer
      center={[position[0], position[1]]}
      zoom={12}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[position[0], position[1]]}>
        <Popup>
          {position[0]}° <br /> {position[1]}°
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default WeatherMap;
