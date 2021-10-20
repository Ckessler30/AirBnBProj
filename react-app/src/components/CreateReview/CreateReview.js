import { useState } from 'react'
import StarRatings from 'react-star-ratings'

import './CreateReview.css'

function CreateReview() {
    const [cleanRating, setCleanRating] = useState(0)
    const [accurRating, setAccurRating] = useState(0)
    const [checkInRating, setCheckInRating] = useState(0)
    const [commRating, setCommRating] = useState(0)
    const [locationRating, setLocationRating] = useState(0)
    const [valueRating, setValueRating] = useState(0)
    const [reviewText, setReviewText] = useState(null)

    const changeRating = (newRating, name) => {
        console.log(newRating)
        console.log(name)
        if(name === "cleanRating"){
            setCleanRating(newRating)
        }
        if(name === "accurRating"){
            setAccurRating(newRating)
        }
        if(name === "checkInRating"){
            setCheckInRating(newRating)
        }
        if(name === "commRating"){
            setCommRating(newRating)
        }
        if(name === "locationRating"){
            setLocationRating(newRating)
        }
        if(name === "valueRating"){
            setValueRating(newRating)
        }
    }

    

    return (
        <div>
            <div className="create-rev-rating">
                <p>Cleanliness</p>
            <StarRatings rating={cleanRating} changeRating={changeRating} name="cleanRating" starRatedColor="red" starDimension="20px"/>
            </div>
            <div className="create-rev-rating">
            <p>Accuracy</p>
            <StarRatings rating={accurRating} changeRating={changeRating} name="accurRating" starRatedColor="red" starDimension="20px"/>
            </div>
            <div className="create-rev-rating">
            <p>Check-In</p>
            <StarRatings rating={checkInRating} changeRating={changeRating} name="checkInRating" starRatedColor="red" starDimension="20px"/>
            </div>
            <div className="create-rev-rating">
            <p>Communication</p>
            <StarRatings rating={commRating} changeRating={changeRating} name="commRating" starRatedColor="red" starDimension="20px"/>
            </div>
            <div className="create-rev-rating">
            <p>Location</p>
            <StarRatings rating={locationRating} changeRating={changeRating} name="locationRating" starRatedColor="red" starDimension="20px"/>
            </div>
            <div className="create-rev-rating">
            <p>Value</p>
            <StarRatings rating={valueRating} changeRating={changeRating} name="valueRating" starRatedColor="red" starDimension="20px"/>
            </div>
            <div>
                <h3>Please write your review here</h3>
                <textarea name="" id="" cols="30" rows="5"></textarea>
            </div>
            <button>Submit Review</button>
        </div>
    )
}

export default CreateReview
