/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_REVIEWS = "reviews/GET_REVIEWS";
const ADD_REVIEW = "reviews/ADD_REVIEW"

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getReviews = (allReviews) => ({
  type: GET_REVIEWS,
  allReviews,
});

const addReview = (review) => ({
  type: ADD_REVIEW,
  review
})

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews/");
  const reviews = await res.json();
    // console.log("all reviews",reviews)
  console.log("HER", reviews)
  dispatch(getReviews(reviews.allReviews));
};

export const addNewReview = (review) => async (dispatch) => {
  const res = await fetch("/api/reviews/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  const newReview = await res.json()
  // console.log(newReview)
  dispatch(addReview(newReview))
}

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const allReviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = [...action.allReviews];
      return newState;
    case ADD_REVIEW:
      newState = [...state]
      newState.push(action.review)
      return newState
    default:
      return state;
  }
};

export default allReviewsReducer;
