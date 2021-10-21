import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams, useHistory } from "react-router"
import { NavLink } from 'react-router-dom'
import { fetchSpot } from '../../store/currentSpot'
import {avgReview, getCity} from '../utils'
import SSReviewSection from "../SSReviewSection/SSReviewSection"
import SingleReview from "../SingleReview/SingleReview"
import CheckIn from "../CheckIn/CheckIn"
import CreateReview from "../CreateReview/CreateReview"

import './SingleSpot.css'
import { deleteSpot } from "../../store/allSpots"

function SingleSpot() {
    const {spotId} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    // console.log(spotId)
    const {user} = useSelector(state =>  state.session)
    const spot = useSelector(state => state.currSpot)
    const reviews = useSelector(state => state.reviews)
    const spotReviews = reviews.filter(review => review.spotId === spot.id)
    // console.log(spot)
    // console.log(user)
    const madeReview = spotReviews.filter(review=> review?.userId === user?.id).length > 0 ? true : false

    useEffect(() => {
       (async () => {
         await dispatch(fetchSpot(spotId));
       })();
    }, [dispatch])

    const handleDelete = () => {
        dispatch(deleteSpot(spotId))
        history.push(`/users/${user.id}`)
    }

   

    return (
      <>
        {spot.reviews && (
          <div>
            <div className="ss-header">
              <h3>{spot.name}</h3>
              <p>
                {spotReviews.length > 0 && avgReview(spotReviews)}({spotReviews.length} reviews)
              </p>
              <p>
                {getCity(spot.stAddress)}, {spot.city}, United States
              </p>
              {spot.user.id === user.id &&
                <div>
                  <button onClick={()=> history.push(`/rooms/${spotId}/edit`)}>Edit {spot.spotType} listing</button>
                  <button onClick={handleDelete}>Delete {spot.spotType} listing</button>
                </div>
              }
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
                    <NavLink to={`/users/${spot.user.id}`} className="inactive">
                      <div
                          className="ss-profile-pic"
                          style={{ backgroundImage: `url('${spot.user.profile_pic}')` }}
                      ></div>
                    </NavLink>
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
                        {spotReviews&& spotReviews.map(review => (
                            <SingleReview user={user} review={review}/>
                        ))}
                    </div>
                    <div>
                      <h3>Create a Review</h3>
                        <CreateReview madeReview={madeReview} spot={spot}/>
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
