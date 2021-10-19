/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_BOOKINGS = "bookings/GET_BOOKINGS";

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getBookingsAction = (bookings) => ({
  type: GET_BOOKINGS,
  bookings
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchBookings = () => async (dispatch) => {
  const res = await fetch("/api/bookings/");
  const bookings = await res.json();
    // console.log(bookings.allBookings)
  dispatch(getBookingsAction(bookings.allBookings));
};

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const bookingsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_BOOKINGS:
      newState = [...action.bookings];
      return newState;
    default:
      return state;
  }
};

export default bookingsReducer;
