export const avgReview = (reviews) => {
    let avg = 0
    for(let i = 0; i < reviews.length; i++){
        avg += reviews[i].avgRating
    }
    return avg/reviews.length
}

export const getCity = (address) => {
    const split = address.split(",")
    return split[1]
}

export const specRevAvg = (reviews, revSec) => {
    let avg = 0
    // console.log(revSec)
    // console.log(reviews)
    reviews.forEach(review => {
        avg += review[revSec]
    })
    // console.log(avg/reviews.length)
    return (avg/reviews.length).toFixed(1)
}

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export const getDates = (startDate, stopDate) => {
    var dateArray = new Array();
    var currentDate = startDate;
    while (currentDate <= stopDate) {
        dateArray.push(new Date (currentDate));
        currentDate = currentDate.addDays(1);
    }
    console.log(dateArray)
    return dateArray;
}