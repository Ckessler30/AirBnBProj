import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { bookedDates, avgReview } from "../utils";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

function CheckIn({ spot }) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numGuests, setNumGuests] = useState(0)
    const [openCalendar, setOpenCalendar] = useState(false)
    // const date1 = new Date(spot.bookings[0].startDate.split(',').join(''))
    // const date2 = new Date(spot.bookings[0].endDate.split(',').join(''))
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }
    const currBookedDates = bookedDates(spot.bookings)
    const handlePicker = (ranges) => {
        // console.log(ranges.selection)
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    // console.log("Start Date", startDate)
    // console.log("END DATE", endDate)

  return (
    <div className="check-in-container">
      <div>
          <p>${spot.price}/night</p>
          <p>{avgReview(spot.reviews)}({spot.reviews.length} reviews)</p>
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
          </div>
      </div>  
      {openCalendar &&
        <DateRangePicker
            ranges={[selectionRange]}
            onChange={handlePicker}
            disabledDates={currBookedDates}
        />
      }
    </div>
  );
}

export default CheckIn;
