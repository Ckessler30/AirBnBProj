import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom";
import { deleteBooking } from "../../store/bookings"
import './Bookings.css'

function Bookings() {
    const dispatch = useDispatch()
    const bookings = useSelector(state => state.bookings)
    const {user} = useSelector(state => state.session)
    const spots = useSelector(state => state.allSpots)
    const userBookings = bookings.filter(booking => booking.userId === user.id )
    // console.log(userBookings)

    const handleCancel = (id) => {
        dispatch(deleteBooking(id))
    }
    return (
        <div>
            <h1>Your Trips</h1>
            {userBookings && userBookings.map(booking => {
                const spot = spots.filter(spot => spot.id === booking.spotId)[0]
                const startDate = booking.startDate.split(' ')
                const endDate = booking.endDate.split(' ')
                const startDateFormat = `${startDate[2]} ${startDate[1]}, ${startDate[3]}`
                const endDateFormat = `${endDate[2]} ${endDate[1]}, ${endDate[3]}`;
                return (
                  <div>
                      <NavLink className="inactive" to={`/rooms/${spot.id}`} exact={true}>
                        <div
                        className="booking-spot-pic"
                        style={{ backgroundImage: `url('${spot.spotPics[0]}')` }}
                        ></div>
                        <p>{spot.name}</p>
                        <p>Reserved from: {startDateFormat} -> {endDateFormat}</p>
                        <p>Guests: {booking.numGuest}</p>
                      </NavLink>
                      <button onClick={() => handleCancel(booking.id)}>Cancel Trip</button>
                    </div>
                );
            })}
        </div>
    )
}

export default Bookings
