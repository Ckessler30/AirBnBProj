import { GoogleMap, useJsApiLoader, useLoadScript} from '@react-google-maps/api'
import './GoogleMaps.css'

const mapContainerStyle= {
    width: '100%',
    height: '100%'
}
const center = {
  lat: 38.00234,
  lng: -78.224935,
};


function GoogleMaps() {
    const { isLoaded, loadError } = useLoadScript({
      googleMapsApiKey: "AIzaSyCTF4z3Ho1G4Jzkb6ZoIizcat-HwzOmFs0",
    });
    if(loadError) return "Error loading maps"
    if(!isLoaded) return "Loading Maps"
    return (
        <div className="map-wrapper">
            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center}></GoogleMap>
        </div>
    )
}

export default GoogleMaps
