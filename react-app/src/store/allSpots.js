/* ----------------------------------------------------------------------- */
/* -----------------------------Actions----------------------------------- */
/* ----------------------------------------------------------------------- */

const GET_SPOTS = "allSpots/GET_SPOTS";
const ADD_SPOT = "allSpots/ADD_SPOT"

/* ----------------------------------------------------------------------- */
/* ----------------------------Action Creators---------------------------- */
/* ----------------------------------------------------------------------- */

const getSpotsAction = (allSpots) => ({
  type: GET_SPOTS,
  payload: allSpots,
});

const addSpotAction = (spot) => ({
  type: ADD_SPOT,
  spot
})

/* ----------------------------------------------------------------------- */
/* --------------------------------Thunks--------------------------------- */
/* ----------------------------------------------------------------------- */

export const fetchAllSpots = () => async (dispatch) => {
  const allSpots = await fetch("/api/spots/");
  const spots = await allSpots.json();
//   console.log(spots.allSpots)
  dispatch(getSpotsAction(spots.allSpots));
};


export const addSpot = (spot) => async(dispatch) => {
  // console.log("HERERER", spot)
  const res = await fetch("/api/spots/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(spot),
  });
  // const newSpot = await res.json()
  // console.log(newSpot)
  // console.log(res)
    if (res.ok) {
      const data = await res.json();
      dispatch(addSpotAction(data));
      return data;
    } else if (res.status < 500) {
      const data = await res.json();
      if (data.errors) {
        return data;
      }
    } else {
      return ["An error occurred. Please try again."];
    }
}
/* ----------------------------------------------------------------------- */
/* -----------------------Initial State & Reducer------------------------- */
/* ----------------------------------------------------------------------- */

const initialState = [];

const allSpotsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_SPOTS:
      newState = [...action.payload];
      return newState;
    case ADD_SPOT:
      newState=[...state]
      newState.push(action.spot)
      return newState
    default:
      return state;
  }
};

export default allSpotsReducer;
