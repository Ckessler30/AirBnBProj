import { useDispatch } from "react-redux";
import {NavLink} from "react-router-dom"
import { deleteSingleReview } from '../../store/reviews'

function SingleReview({review, user}) {
    const dispatch = useDispatch()
    // console.log("SINGLE REVIEW", review)
    const handleDelete = ()=> {
        dispatch(deleteSingleReview(review.id))
    }
    return (
      <div>
        <div className="sr-header">
          <NavLink to={`/users/${review.userId}`} className="inactive">
            <div className="ss-profile-pic" style={{ backgroundImage: `url('${review.user.profilePic}')` }}></div>
          </NavLink>
          <p>{review.user.name}</p>
        </div>
        <div>
            <p>{review.reviewText}</p>
        </div>
        {user?.id === review.userId &&
          <div>
            <button onClick={handleDelete}>Delete</button>
          </div>
        }
      </div>
    );
}

export default SingleReview
