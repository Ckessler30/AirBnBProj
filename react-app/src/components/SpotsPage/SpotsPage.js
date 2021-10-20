import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { avgReview } from "../utils"
import GoogleMaps from "../GoogleMaps/GoogleMaps"

import './SpotsPage.css'


function SpotsPage() {
    const location = useParams()
    const spots = useSelector(state => state.allSpots)
    const filterdSpots = spots.filter(spot => spot.city === location.location)
    return (
        <div className="spot-page-wrapper">
            <p>{filterdSpots.length}+ stays</p>
            <h4>{location.location} getaways</h4>
            {filterdSpots && filterdSpots.map(spot => (
                <a href={`/rooms/${spot.id}`}>
                    <div className="main-spot-pic" style={{"backgroundImage": `url('${spot.spotPics[0]}')`}}></div>
                    <div>
                        <p>{spot.spotType}</p>
                        <p>{spot.name}</p>
                        <p>{spot.totalGuests} guests</p>
                        <p>{spot.numBedrooms} bedrooms</p>
                        <p>{spot.numBeds} bed</p>
                        <p>{spot.numBaths} bath</p>
                        <p>{avgReview(spot.reviews)}({spot.reviews.length} reviews)</p>
                        <p>${spot.price}/night</p>
                    </div>
                </a>
            ))}
            <div>
                <GoogleMaps />
            </div>
        </div>
    )
}

export default SpotsPage
