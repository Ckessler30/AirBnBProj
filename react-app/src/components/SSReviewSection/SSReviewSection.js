import ProgressBar from 'react-bootstrap/ProgressBar'
import {specRevAvg} from '../utils'

import "bootstrap/dist/css/bootstrap.min.css";
import './SSReview.css'

function SSReviewSection({spot, revSec}) {
    // console.log("REVIEW",spot)
    const avg = specRevAvg(spot.reviews, revSec)
    return (
        <div className="progress-bar-wrapper">
            <ProgressBar now={avg} max={5}/> 
            {spot.reviews.length > 0 && <p>{avg}</p>}
        </div>
    )
}

export default SSReviewSection
