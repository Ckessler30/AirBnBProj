import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { bookedDates, avgReview } from "../utils";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from '../../store/bookings'
import differenceInCalendarDays from "date-fns/differenceInCalendarDays";

function CheckIn({ spot }) {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.session)
    const bookings = useSelector(state => state.bookings)
    const userBooks = bookings.filter(booking => booking.userId === user?.id && booking.spotId === spot.id)
    const spotBookings = bookings.filter(booking => booking.spotId === spot.id)

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numGuests, setNumGuests] = useState(1)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)
    const [isBooked, setIsBooked] = useState(userBooks.length ? true : false)
    const [errors, setErrors] = useState([])
    const nights = differenceInCalendarDays(startDate, endDate)
    const currBookedDates = bookedDates(spotBookings)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handlePicker = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    const clearDates = () => {
        setStartDate(new Date())
        setEndDate(new Date())
    }

    const handleReserve = () => {
        let booked = false
        for(let i = 0; i < currBookedDates.length; i++){
            const currDate = currBookedDates[i]
            if (
              currDate
                .toString()
                .includes(
                  startDate.toString().split(" ").slice(0, 4).join(" ")
                ) ||
              currDate
                .toString()
                .includes(endDate.toString().split(" ").slice(0, 4).join(" "))
            ) {
              booked = true;
            }
        }
        if(booked){
            const newErrors = ["That date is unavailable"]
            setErrors(newErrors)
        }else{
            const newBooking = {
              spotId: spot.id,
              userId: user.id,
              startDate,
              endDate,
              numGuests,
            
            }
          dispatch(addBooking(newBooking));
          setStartDate(new Date());
          setEndDate(new Date());
        //   console.log("Done")
        }
    }
    
    let split;
    let formatResDate;
    if(userBooks.length > 0){
        split = userBooks[0].startDate.split(" ");
        formatResDate = `${split[2]} ${split[1]}, ${split[3]}`
    }

  return (
    <div className="check-in-container">
      <div>
        <p>${spot.price}/night</p>
        <p>
          {spot.reviews.length > 0 && avgReview(spot.reviews)}({spot.reviews.length} reviews)
        </p>
        <div>
          <div>
            <div onClick={() => setOpenCalendar(!openCalendar)}>
              <div>
                <p>Check-in</p>
                <p>Add date</p>
              </div>
              <div>
                <p>Checkout</p>
                <p>Add date</p>
              </div>
            </div>
            <div>
              <div onClick={() => setOpenGuests(!openGuests)}>
                <p>Guests</p>
                <p>{numGuests} guests</p>
              </div>
              {openGuests && (
                <div>
                  <h3>Guests</h3>
                  <div>
                    <button
                      onClick={() => setNumGuests(numGuests - 1)}
                      disabled={numGuests === 1}
                    >
                      -
                    </button>
                    <p>{numGuests}</p>
                    <button
                      onClick={() => setNumGuests(numGuests + 1)}
                      disabled={numGuests === spot.totalGuests}
                    >
                      +
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {openCalendar && (
        <div>
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handlePicker}
            disabledDates={currBookedDates}
            minDate={new Date()}
          />
          <button onClick={() => setOpenCalendar(false)}>Close</button>
          <button onClick={clearDates}>Clear Dates</button>
        </div>
      )}
      <div>
        <button
          onClick={handleReserve}
          disabled={startDate.toString() === endDate.toString()}
        >
          Reserve
        </button>
        {errors.length ? <p>{errors}</p> : null}
      </div>
      {!(startDate.toString() === endDate.toString()) &&
      <div>
          <div>
            <p>${spot.price} x {Math.abs(nights)} nights </p>
            <p>${spot.price*Math.abs(nights)}</p>
          </div>
          <div>
              <p>Cleaning Fee</p>
              <p>$50</p>
          </div>
          <div>
              <p>Service Fee</p>
              <p>$28</p>
          </div>
          <div>
              <p>Total</p>
              <p>${spot.price*Math.abs(nights)+70}</p>
          </div>
      </div>
      }
      {userBooks.length ? (
        <div>
          <p>You are all set for your reservation on {formatResDate}</p>
        </div>
      ) : null}
    </div>
  );
}

export default CheckIn;
