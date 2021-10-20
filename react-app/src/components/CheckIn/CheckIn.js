import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { bookedDates, avgReview } from "../utils";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";
import { useDispatch, useSelector } from "react-redux";
import { addBooking } from '../../store/bookings'

function CheckIn({ spot }) {
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.session)
    // console.log(user)

    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numGuests, setNumGuests] = useState(1)
    const [openCalendar, setOpenCalendar] = useState(false)
    const [openGuests, setOpenGuests] = useState(false)
    const [errors, setErrors] = useState([])
    // const date1 = new Date(spot.bookings[0].startDate.split(',').join(''))
    // const date2 = new Date(spot.bookings[0].endDate.split(',').join(''))
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const currBookedDates = bookedDates(spot.bookings)
    console.log(currBookedDates)
    console.log(new Date(startDate.toString().split(' ').slice(0,4).join(' ')))
    const handlePicker = (ranges) => {
        // console.log(ranges.selection)
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const clearDates = () => {
        setStartDate(new Date())
        setEndDate(new Date())
    }
    // console.log("Start Date", startDate)
    // console.log("END DATE", endDate)

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
            // console.log("BOOKED")
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
          console.log("Done")
        }
    }
    // console.log(errors)

  return (
    <div className="check-in-container">
      <div>
        <p>${spot.price}/night</p>
        <p>
          {avgReview(spot.reviews)}({spot.reviews.length} reviews)
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
          <button onClick={handleReserve} disabled={startDate === endDate}>Reserve</button>
          {errors.length && 
            <p>{errors}</p>
          }
      </div>
    </div>
  );
}

export default CheckIn;
