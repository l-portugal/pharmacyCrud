import React, {useState, useEffect} from "react";
import { Marker, Popup } from 'react-leaflet'
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
import '../../index.css';

// import L from 'leaflet';

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
//   iconUrl: require('leaflet/dist/images/marker-icon.png'),
//   shadowUrl: require('leaflet/dist/images/marker-shadow.png')
// });

export const MarkerSatus = ( props ) => {
  const { name, lat, lon, address, phone, email } = props;

  const iconMarkup = renderToStaticMarkup(
    <i className=" fa fa-plus-circle fa-2x" style={{ color: 'green', backgroundColor: 'white', borderRadius:100 }} />
  );

  const customMarkerIcon = divIcon({
    html: iconMarkup
  });

  return (
    <Marker position={[lat, lon]} icon={customMarkerIcon} >
      <Popup>
        <h3>{name}</h3>
        <b>Dirección:</b> { address }
        <br/>
        <b>Teléfono:</b> { phone }
        <br/>
        <b>E-mail:</b> { email }
      </Popup>
    </Marker>
  )
}