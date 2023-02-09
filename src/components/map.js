import React, { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

export default function MapTest () {

    const [state, setState] = useState({
       lat: 40.6901,
       lng: -73.8566,
       zoom: 13,
    })
       return (
        <>
     <div></div>


  

<MapContainer center={[state.lat, state.lng]} zoom={state.zoom} scrollWheelZoom={false} style={{ width: '100%', height: '900px'}}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
</>
)
}