
function SingleReview({review}) {
    console.log("SINGLE REVIEW", review)
    return (
      <div>
        <div className="sr-header">
          <div className="ss-profile-pic" style={{ backgroundImage: `url('${review.user.profilePic}')` }}></div>
          <p>{review.user.name}</p>
        </div>
        <div>
            <p>{review.reviewText}</p>
        </div>
      </div>
    );
}

export default SingleReview
