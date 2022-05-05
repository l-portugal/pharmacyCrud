import React from "react";
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import {EventClick} from './EventClick'
import { MarkerSatus } from "./Marker";

const mapPosition = [-29.4142176, -66.8907965];

export const Map = ( { pharmacies }) => {

  return (
    <MapContainer center={mapPosition} zoom={12} scrollWheelZoom={true} style={{ height: '100vh', width: '100wh' }}>

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        pharmacies && pharmacies.map( a => <MarkerSatus name={a.name} lat={Number(a.location.latitude)} lon={Number(a.location.longitude)} address={a.address} phone={a.phone} email={a.email}  /> )
      }

      <EventClick /> 
      
    </MapContainer>
  )
}