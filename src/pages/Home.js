import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Home = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={[51.505, -0.09]} // Startkoordinaten (z.B. London)
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            Hier ist ein Beispiel-Popup auf der Karte.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Home;
