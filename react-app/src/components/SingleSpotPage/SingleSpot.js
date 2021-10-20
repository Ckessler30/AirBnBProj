import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { fetchSpot } from '../../store/currentSpot'


function SingleSpot() {
    const spotId = useParams()
    const dispatch = useDispatch()
    const spot = useSelector(state => state.currSpot)
    useEffect(() => {
       (async () => {
         await dispatch(fetchSpot(spotId));
       })();
    }, [dispatch])
    return (
        <div>
            <h1>made it</h1>
        </div>
    )
}

export default SingleSpot
