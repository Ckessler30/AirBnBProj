/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_SPOT = "currentSpots/GET_SPOT";

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getCurrSpotAction = (spot) => ({
  type: GET_SPOT,
  payload: spot,
});

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchSpot = (id) => async (dispatch) => {
  const currSpot = await fetch(`/api/spots/${id}`);
  const spot = await currSpot.json();
    console.log(spot)
  dispatch(getCurrSpotAction(spot));
};

export const updateSpot = (updatedSpot) => async(dispatch)=> {
    
}

/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = {};

const currSpotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOT:
      newState = {...action.payload};
      return newState;
    default:
      return state;
  }
};

export default currSpotReducer;
