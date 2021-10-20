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