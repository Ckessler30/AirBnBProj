import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { NavLink } from "react-router-dom";
import { fetchAllSpots } from "../../store/allSpots"
import {fetchProfile} from '../../store/currProfile'
import { avgReview } from "../utils"
import {RiMedalLine} from 'react-icons/ri'
import {IoShieldCheckmarkOutline} from 'react-icons/io5'

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
    // console.log("HEREEEEEEEEE", userReviews)
    // console.log("HERE",user)
    // console.log("AGAIN", currProfile)

    useEffect(()=> {
          dispatch(fetchProfile(userId))
          dispatch(fetchAllSpots())
    },[dispatch])

    return (
      <div className="pp-container">
        <div className="pp-left">
          <div
            className="profile-pic pp-pic"
            style={{ backgroundImage: `url('${currProfile.profile_pic}')` }}
          ></div>
          <div className="pp-stats">
            <div className="pp-stat">
              <RiMedalLine className="pp-symbols" />
              {currProfile.is_superhost && <p>Superhost</p>}
            </div>
            <div className="pp-stat">
              <IoShieldCheckmarkOutline className="pp-symbols" />
              <p>Identity verified</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="headertxt pp-head">Hi, I'm {currProfile.name}</h2>
          <div>
            <div className="pp-about">
              <h3 className="headertxt">About</h3>
              <p>{currProfile.bio}</p>
            </div>
            <div className="pp-listing">
              <h3>{currProfile.name}'s listings</h3>
              {userListings.length > 0 ?
                userListings.map((listing) => (
                  <NavLink className="inactive pp-spots" to={`/rooms/${listing.id}`}>
                    <div
                    className="profile-listing-pics"
                      style={{
                        backgroundImage: `url('${listing.spotPics[0]}')`,
                      }}
                    ></div>
                    <p>{listing.reviews.length > 0 ? avgReview(listing.reviews) : ''}({listing.reviews.length})</p>
                    <p>{listing.spotType}</p>
                    <p>{listing.name}</p>
                  </NavLink>
                ))
              :
              <p>{user?.id === currProfile.id ? "You do not have any listings" : `${currProfile.name} does not have any listings`}</p>
              }
            </div>
            <div>
                <h3>Reviews</h3>
                {userReviews.length > 0 ? userReviews.map(review => {
                    const spot = listings.filter(listing=> listing.id === review.spotId)[0]
                    // console.log(spot)
                    return (
                      <div>
                        <p>{review.avgRating}</p>
                        <p>{spot.name}</p>
                        <NavLink className="inactive" to={`/rooms/${spot.id}`}>
                          <div
                          className="rev-spot-pics"
                            style={{
                              backgroundImage: `url('${spot.spotPics[0]}')`,
                            }}
                          ></div>
                        </NavLink>
                        <p>{review.reviewText}</p>
                      </div>
                    );
                })
              :
              <p>{user?.id === currProfile.id ? "You have not left any reviews" : `${currProfile.name} has not left any reviews`}</p>
              }
            </div>
          </div>
        </div>
      </div>
    );
}

export default ProfilePage
