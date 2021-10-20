/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_REVIEWS = "reviews/GET_REVIEWS";

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getReviews = (allReviews) => ({
  type: GET_REVIEWS,
  allReviews,
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllReviews = () => async (dispatch) => {
  const res = await fetch("/api/reviews/");
  const reviews = await res.json();
    // console.log("all reviews",reviews)
 
  dispatch(getReviews(reviews.allReviews));
};

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
    default:
      return state;
  }
};

export default allReviewsReducer;
