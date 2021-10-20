import { useState } from "react"
import { useSelector } from "react-redux"


function CreateSpot() {
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


    const handleSubmit = () => {
        const newSpot = {
            name: spotName,
            price: spotPrice,
            description,
            type,
            numBedrooms,
            numBaths,
            numBeds,
            totalGuests,
            city: state,
            address,
            long,
            lat,
            userId: user.id
        }

    }

    return (
        <div>
            <div>
                <h3>Spot Name</h3>
                <input type="text" placeholder="What is the name of your getaway?"required/>
            </div>
            <div>
                <h3>Price per night</h3>
                <input type="number" placeholder={"$"+ 0} required/>
                <h3>Please give a description of your getaway</h3>
                <textarea name="" id="" cols="30" rows="10"required></textarea>
            </div>
            <div>
                <p>What kind of place is this?</p>
                <select name="type" id="" onChange={(e)=>console.log(e.target.value)}required>
                    <option value="">Please select an option</option>
                    <option value="Condo">Condo</option>
                    <option value="House">House</option>
                    <option value="Villa">Villa</option>
                    <option value="Cabin">Cabin</option>
                    <option value="Tree House">Tree House</option>
                </select>
            </div>
            <div>
                <p>How many bedrooms?</p>
                <input type="number" required/>
                <p>How many bathrooms?</p>
                <input type="number" required/>
                <p>How many beds?</p>
                <input type="number" required/>
                <p>What is the max occupancy?</p>
                <input type="number" required/>
            </div>
            <div>
                <h3>Location</h3>
                <input type="text" placeholder="State" required/>
                <input type="text" placeholder="Street Address" required/>
                <input type="number" placeholder="Longitude" required/>
                <input type="number" placeholder="Latitude" required/>
            </div>
            <div>
                <h3>Pictures</h3>
                <input type="text" placeholder="Picture Url" onChange={(e)=> setPic1(e.target.value)}/>
                <input type="text" placeholder="Picture Url" onChange={(e)=> setPic2(e.target.value)}/>
                <input type="text" placeholder="Picture Url" onChange={(e)=> setPic3(e.target.value)}/>
            </div>
            <button onClick={handleSubmit}>Submit</button>
            
        </div>
    )
}

export default CreateSpot
