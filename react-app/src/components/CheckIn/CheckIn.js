import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { getDates } from "../utils";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css";

function CheckIn({ spot }) {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const date1 = new Date(spot.bookings[0].startDate.split(',').join(''))
    const date2 = new Date(spot.bookings[0].endDate.split(',').join(''))
    getDates(date1, date2)
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    }

    const handlePicker = (ranges) => {
        // console.log(ranges.selection)
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    // console.log("Start Date", startDate)
    // console.log("END DATE", endDate)

  return (
    <div>
      <DateRangePicker
        ranges={[selectionRange]}
        onChange={handlePicker}
        disabledDates={getDates(date1, date2)}
      />
    </div>
  );
}

export default CheckIn;
