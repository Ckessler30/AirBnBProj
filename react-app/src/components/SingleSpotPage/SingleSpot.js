import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchSpot } from '../../store/currentSpot'
import {avgReview, getCity} from '../utils'
import SSReviewSection from "../SSReviewSection/SSReviewSection"
import SingleReview from "../SingleReview/SingleReview"
import CheckIn from "../CheckIn/CheckIn"
import CreateReview from "../CreateReview/CreateReview"

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
            <div className="ss-info-container">
                <div className="ss-host-info">
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
                <div>
                    <h3>
                        Entire {spot.spotType}
                    </h3>
                    <p>You'll have the {spot.spotType.toLowerCase()} to yourself.</p>
                    <h3>Enhanced Clean</h3>
                    <p>This Host committed to Bearbnb's 5-step enhanced cleaning process.</p>
                    <h3>Self check-in</h3>
                    <p>Check yourself in with the lockbox.</p>
                </div>
                <div className="ss-description">
                    <p>{spot.description}</p>
                </div>
                <div>
                    <div>
                        <p>Cleanliness</p>
                        <SSReviewSection spot={spot} revSec={'cleanRating'}/>
                    </div>
                    <div>
                        <p>Accuracy</p>
                        <SSReviewSection spot={spot} revSec={'accurRating'}/>
                    </div>
                    <div>
                        <p>Communication</p>
                        <SSReviewSection spot={spot} revSec={'commRating'}/>
                    </div>
                    <div>
                        <p>Location</p>
                        <SSReviewSection spot={spot} revSec={'locationRating'}/>
                    </div>
                    <div>
                        <p>Check-in</p>
                        <SSReviewSection spot={spot} revSec={'checkInRating'}/>
                    </div>
                    <div>
                        <p>Value</p>
                        <SSReviewSection spot={spot} revSec={'valueRating'}/>
                    </div>
                    <div className="ss-all-reviews">
                        {spot.reviews && spot.reviews.map(review => (
                            <SingleReview review={review}/>
                        ))}
                    </div>
                    <div>
                      <h3>Create a Review</h3>
                        <CreateReview />
                    </div>
                </div>

            </div>
            <div className="ss-check-in">
                <CheckIn spot={spot}/>
            </div>
          </div>
        )}
      </>
    );
}

export default SingleSpot
