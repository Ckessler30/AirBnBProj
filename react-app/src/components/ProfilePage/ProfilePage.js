import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import {fetchProfile} from '../../store/currProfile'
import { avgReview } from "../utils"

import "./ProfilePage.css"

function ProfilePage() {
    const dispatch = useDispatch()
    const {userId} = useParams()
    const {user} = useSelector(state => state.session)
    const currProfile = useSelector(state=> state.currProfile)
    const listings = useSelector(state=> state.allSpots)
    const reviews = useSelector(state => state.reviews)
    const userReviews = reviews.filter(review => review.userId === currProfile.id)
    const userListings = listings.filter(listing=> listing.user.id === currProfile.id)
    console.log("HEREEEEEEEEE", userReviews)
    // console.log("HERE",user)
    // console.log("AGAIN", currProfile)

    useEffect(()=> {
          dispatch(fetchProfile(userId))
    },[dispatch])

    return (
      <div>
        <div>
          <div
            className="profile-pic"
            style={{ backgroundImage: `url('${currProfile.profile_pic}')` }}
          ></div>
          {currProfile.is_superhost && <p>Superhost</p>}
          <p>Identity verified</p>
        </div>
        <div>
          <h2>Hi, I'm {currProfile.name}</h2>
          <div>
            <h3>About</h3>
            <p>{currProfile.bio}</p>
            <div>
              <h3>{currProfile.name}'s listings</h3>
              {userListings &&
                userListings.map((listing) => (
                  <div>
                    <div
                    className="profile-listing-pics"
                      style={{
                        backgroundImage: `url('${listing.spotPics[0]}')`,
                      }}
                    ></div>
                    <p>{avgReview(listing.reviews)}({listing.reviews.length})</p>
                    <p>{listing.spotType}</p>
                    <p>{listing.name}</p>
                  </div>
                ))}
            </div>
            <div>
                <h3>Reviews</h3>
                {userReviews && userReviews.map(review => {
                    const spot = listings.filter(listing=> listing.id === review.spotId)[0]
                    // console.log(spot)
                    return (
                      <div>
                        <p>{review.avgRating}</p>
                        <p>{spot.name}</p>
                        <div
                        className="rev-spot-pics"
                          style={{
                            backgroundImage: `url('${spot.spotPics[0]}')`,
                          }}
                        ></div>
                        <p>{review.reviewText}</p>
                      </div>
                    );
                })}
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfilePage
