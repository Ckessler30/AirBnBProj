/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_SPOT = "currentSpots/GET_SPOT";
const UPDATE_SPOT = "currentSpots/UPDATE_SPOT"


/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getCurrSpotAction = (spot) => ({
  type: GET_SPOT,
  payload: spot,
});

const updateSpotAction = (spot) => ({
    type: UPDATE_SPOT,
    spot
})


/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchSpot = (id) => async (dispatch) => {
  const currSpot = await fetch(`/api/spots/${id}`);
  const spot = await currSpot.json();
    // console.log(spot)
  dispatch(getCurrSpotAction(spot));
};

export const updateSpot = (updatedSpot) => async(dispatch)=> {
    // console.log("LOOK", updatedSpot)
    const res = await fetch(`/api/spots/${updatedSpot.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSpot)
    })
    const spot = await res.json()
    // console.log(spot)
    dispatch(updateSpotAction(spot))
}

export const addSpotPic = (spotPic) => async(dispatch) => {
  const res = await fetch("/api/spotpics/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spotPic),
  });
  const newSpotPic = await res.json()
  return newSpotPic
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
    case UPDATE_SPOT:
        newState = {...action.spot}
        // console.log('HERE', newState)
        return newState
    default:
      return state;
  }
};

export default currSpotReducer;
