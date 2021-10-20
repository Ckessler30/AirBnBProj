import { useSelector } from "react-redux"


function SplashPage() {
    const locations = useSelector(state => state.locations)
    // console.log(locations)
    return (
        <div>
            <div>
                <h2>Background Pic</h2>
            </div>
            <div>
                <h3>Explore nearby</h3>
                {locations && locations.map(location => (
                    <div>
                        <a href={`/spots/${location}`}>
                            <p>{location}</p>
                        </a>
                    </div>
                ))}
            </div>
            <div>
                <h3>Live anywhere</h3>
                <p>Outdoor getaways</p>
                <p>Unique stays</p>
                <p>Entire homes</p>
                <p>Pets Allowed</p>
            </div>
            <div>
                <h3>Discover things to do</h3>

            </div>

        </div>
    )
}

export default SplashPage
