import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./WeatherMap.css";

const WeatherMap = (props) => {
  const [position, setPosition] = useState([props.lat, props.lon]);
  const mypos = position;
  const mapRef = useRef(null);

  const handleMapClicks = (e) => {
    const newPosition = [e.latlng.lat, e.latlng.lng];
    setPosition(newPosition);
    props.updateCity(newPosition[0], newPosition[1]);
  };
  // Update the marker position when the props change
  useEffect(() => {
    setPosition([props.lat, props.lon]);
    if (mapRef.current) {
      mapRef.current.flyTo([props.lat, props.lon], 12, {
        duration: 2,
      });
    }
  }, [props.lat, props.lon]);

  return (
    <div>
      <MapContainer
        center={mypos}
        onClick={handleMapClicks}
        zoom={12}
        scrollWheelZoom={true}
        ref={mapRef}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            {position[0]}° <br /> {position[1]}°
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default WeatherMap;
