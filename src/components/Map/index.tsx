import { useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "./index.scss"

const Map = () => {
    const [state] = useState({
        lat: 51.505,
        lng: -0.09,
        zoom: 13
    })
    return (
        <div className='custom-map'>
            <MapContainer center={[51.505, -0.09]} zoom={state.zoom} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        <span>A pretty CSS3 popup. <br /> Easily customizable.</span>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map