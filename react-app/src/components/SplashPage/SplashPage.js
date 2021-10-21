import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { NavLink } from "react-router-dom";
import { fetchAllLocations } from '../../store/locations'

import './SplashPage.css'

function SplashPage() {
    const dispatch = useDispatch()
    const locations = useSelector(state => state.locations)
    // console.log(locations)

    const statePics = [
      "https://wallpaperaccess.com/full/1761719.jpg",
      "https://thumbs.dreamstime.com/b/blue-sky-clouds-anime-style-background-shining-sun-white-fluffy-sunny-day-scene-cartoon-vector-illustration-heavens-223720268.jpg",
      "https://t3.ftcdn.net/jpg/02/61/69/72/360_F_261697296_h1HxkaArBysB0HEkm4ZAMPGOSKPEGP2n.jpg",
      "https://thumbs.dreamstime.com/b/cartoon-illustration-background-forest-bright-forest-woods-silhouttes-trees-bushes-ferns-flowers-cartoon-illustration-124835236.jpg",
      "https://mcvt-comet-37.fra1.cdn.digitaloceanspaces.com//previews/56184/preview_56184.jpg",
      "https://www.freevector.com/uploads/vector/preview/26742/Cabin_In_Winter.jpg",
    ];

    useEffect(()=> {
        dispatch(fetchAllLocations())
    }, [dispatch])

    return (
      <div>
        <div
          className="splash-main-pic"
          style={{
            backgroundImage: `url("https://ze-robot.com/images/source/31660.jpg")`,
          }}
        >
          {/* <h2>Background Pic</h2> */}
        </div>
        <div className="splash-states-cont">
          <h3 className="headertxt">Adventure Spots</h3>
          <div className="splash-states">
            {locations &&
              locations.map((location, ind) => {
                console.log(ind);
                return (
                  <div className="single-state">
                    <div
                      className="state-pics"
                      style={{ backgroundImage: `url(${statePics[ind]})` }}
                    ></div>
                    <NavLink className="inactive" to={`/spots/${location}`}>
                      <p>{location}</p>
                    </NavLink>
                  </div>
                );
              })}
          </div>
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
    );
}

export default SplashPage
