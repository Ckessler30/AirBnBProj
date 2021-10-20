import { useSelector } from "react-redux"
import './Bookings.css'

function Bookings() {
    const bookings = useSelector(state => state.bookings)
    const {user} = useSelector(state => state.session)
    const spots = useSelector(state => state.allSpots)
    const userBookings = bookings.filter(booking => booking.userId === user.id )
    console.log(userBookings)
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
                    <div
                    className="booking-spot-pic"
                      style={{ backgroundImage: `url('${spot.spotPics[0]}')` }}
                    ></div>
                    <p>{spot.name}</p>
                    <p>Reserved from: {startDateFormat} -> {endDateFormat}</p>
                    <p>Guests: {booking.numGuest}</p>
                  </div>
                );
            })}
        </div>
    )
}

export default Bookings
