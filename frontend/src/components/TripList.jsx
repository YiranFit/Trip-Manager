import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

export const TripList = ({destination, start_date, end_date,id}) => {
    const navigate = useNavigate()
    const handleDetail = () => { 
        navigate(`/trips/${destination}`)
    }

    const deleteTrips = async() => { 
        let response = await axios.delete(`/trips/${id}`)
        console.log(response)
        return response.data.trips
 }

   
 

    return (
        <div>
            {destination} | {start_date} | {end_date} | <button onClick={e => [e.preventDefault(), handleDetail()]}>Detail</button> | <button onClick={e => [e.preventDefault(), deleteTrips()]}>Delete</button>
        </div>
    )
}