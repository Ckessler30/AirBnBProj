import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { addSpot } from '../../store/allSpots'
import {addSpotPic} from '../../store/currentSpot'

function CreateSpot() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {user} = useSelector(state => state.session)
    const [spotName, setSpotName] = useState(null)
    const [spotPrice, setSpotPrice] = useState(null)
    const [description, setDescription] = useState(null)
    const [type, setType] = useState(null)
    const [numBedrooms, setNumBedrooms] = useState(null)
    const [numBeds, setNumBeds] = useState(null)
    const [numBaths, setNumBaths] = useState(null)
    const [totalGuests, setTotalGuests] = useState(null)
    const [state, setState] = useState(null)
    const [address, setAddress] = useState(null)
    const [long, setLong] = useState(null)
    const [lat, setLat] = useState(null)
    const [pic1, setPic1] = useState(null)
    const [pic2, setPic2] = useState(null)
    const [pic3, setPic3] = useState(null)

    const [errors, setErrors] = useState([])


    const handleSubmit = async(e) => {
        e.preventDefault()
        const newSpot = {
            name: spotName,
            price: spotPrice,
            description,
            type,
            num_bedrooms: numBedrooms,
            num_baths:numBaths,
            num_beds:numBeds,
            total_guests:totalGuests,
            city: state,
            st_address:address,
            longitude:long,
            latitude:lat,
            userId: user.id
        }
        const data = await dispatch(addSpot(newSpot))
        console.log("RIGHT HERE",data)
        if(data && !data.errors){
            const newPic = await dispatch(addSpotPic({spotId:data.id, imgUrl: pic1}))
            if(pic2){
                await dispatch(addSpotPic({spotId:data.id, imgUrl:pic2}))
            }
            if(pic3){
                await dispatch(addSpotPic({spotId:data.id, imgUrl:pic3}))
            }
            return history.push(`/rooms/${data.id}`)
        }
        if(data.errors){
            setErrors(data)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {errors.length > 0 && errors.map(error=>
                <p>{error}</p>
                    )}
                <div>
                    <h3>Spot Name</h3>
                    <input type="text" placeholder="What is the name of your getaway?" onChange={(e)=>setSpotName(e.target.value)} value={spotName} required/>
                </div>
                <div>
                    <h3>Price per night</h3>
                    <input type="number" placeholder={"$"+ 0} onChange={(e)=>setSpotPrice(e.target.value)} value={spotPrice} required/>
                    <h3>Please give a description of your getaway</h3>
                    <textarea name="" id="" cols="30" rows="10" onChange={(e)=>setDescription(e.target.value)} value={description} required></textarea>
                </div>
                <div>
                    <p>What kind of place is this?</p>
                    <select name="type" id="" onChange={(e)=>setType(e.target.value)} value={type} required>
                        <option value="">Please select an option</option>
                        <option value="Condo">Condo</option>
                        <option value="House">House</option>
                        <option value="Villa">Villa</option>
                        <option value="Cabin">Cabin</option>
                        <option value="Tree House">Tree House</option>
                        <option value="Beach House">Beach House</option>
                        <option value="Camp Site">Camp Site</option>
                    </select>
                </div>
                <div>
                    <p>How many bedrooms?</p>
                    <input type="number" onChange={(e)=> setNumBedrooms(e.target.value)} value={numBedrooms} required/>
                    <p>How many bathrooms?</p>
                    <input type="number" onChange={(e)=>setNumBaths(e.target.value)} value={numBaths} required/>
                    <p>How many beds?</p>
                    <input type="number" onChange={(e)=> setNumBeds(e.target.value)} value={numBeds} required/>
                    <p>What is the max occupancy?</p>
                    <input type="number" onChange={(e)=> setTotalGuests(e.target.value)} value={totalGuests} required/>
                </div>
                <div>
                    <h3>Location</h3>
                    <input type="text" placeholder="State" onChange={(e)=>setState(e.target.value)} value={state} required/>
                    <input type="text" placeholder="Street Address" onChange={(e)=>setAddress(e.target.value)} value={address} required/>
                    <input type="number" placeholder="Longitude" onChange={(e)=>setLong(e.target.value)} value={long} required/>
                    <input type="number" placeholder="Latitude" onChange={(e)=> setLat(e.target.value)} value={lat} required/>
                </div>
                <div>
                    <h3>Pictures</h3>
                    <input type="text" placeholder="Picture Url" onChange={(e)=> setPic1(e.target.value)} value={pic1} required/>
                    <input type="text" placeholder="Picture Url" onChange={(e)=> setPic2(e.target.value)} value={pic2}/>
                    <input type="text" placeholder="Picture Url" onChange={(e)=> setPic3(e.target.value)} value={pic3}/>
                </div>
                <button type="submit">Submit</button>
                
            </form>
        </div>
    )
}

export default CreateSpot
