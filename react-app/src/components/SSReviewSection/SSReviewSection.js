import ProgressBar from 'react-bootstrap/ProgressBar'
import {specRevAvg} from '../utils'

import "bootstrap/dist/css/bootstrap.min.css";
import './SSReview.css'

function SSReviewSection({spotReviews, revSec}) {
    // console.log("REVIEW",spot)
    const avg = specRevAvg(spotReviews, revSec)
    return (
        <div className="progress-bar-wrapper">
            <ProgressBar now={avg} max={5}/> 
            {spotReviews.length > 0 && <p className="prog-num">{avg}</p>}
        </div>
    )
}

export default SSReviewSection
