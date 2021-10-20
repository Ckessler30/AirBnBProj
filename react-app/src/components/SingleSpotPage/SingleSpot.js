import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchSpot } from '../../store/currentSpot'
import {avgReview, getCity} from '../utils'

import './SingleSpot.css'

function SingleSpot() {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    // console.log(spotId)
    const spot = useSelector(state => state.currSpot)

    useEffect(() => {
       (async () => {
         await dispatch(fetchSpot(spotId));
       })();
    }, [dispatch])
    

   

    return (
      <>
        {spot.reviews && (
          <div>
            <div className="ss-header">
              <h3>{spot.name}</h3>
              <p>
                {avgReview(spot.reviews)}({spot.reviews.length} reviews)
              </p>
              <p>
                {getCity(spot.stAddress)}, {spot.city}, United States
              </p>
            </div>
            <div className="ss-pics-container">
              {spot.spotPics && (
                <div
                  className="ss-main-pic"
                  style={{ backgroundImage: `url('${spot.spotPics[0]}')` }}
                ></div>
              )}
              {spot.spotPics &&
                spot.spotPics.map((pic) =>
                  spot.spotPics.indexOf(pic) !== 0 ? (
                    <div
                      className="ss-pics"
                      style={{ backgroundImage: `url('${pic}')` }}
                    ></div>
                  ) : null
                )}
            </div>
            <div>
              <h3>
                {spot.spotType} hosted by {spot.user.name}
              </h3>
              <p>{spot.totalGuests} guests</p>
              <p>{spot.numBedrooms} bedrooms</p>
              <p>{spot.numBeds} bed</p>
              <p>{spot.numBaths} bath</p>
              <div
                className="ss-profile-pic"
                style={{ backgroundImage: `url('${spot.user.profile_pic}')` }}
              ></div>
            </div>
          </div>
        )}
      </>
    );
}

export default SingleSpot
