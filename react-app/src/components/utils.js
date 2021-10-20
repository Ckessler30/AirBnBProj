export const avgReview = (reviews) => {
    let avg = 0
    reviews.map(review => avg += review.avgRating)
    return avg/reviews.length
}