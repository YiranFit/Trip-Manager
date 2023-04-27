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
        <div style={{display:'block',width:'500px', margin:'auto', padding:'15px 10px 15px 60px',
                    background:'#fff', boxShadow: '0 5px 25px rgba(0,0,0,0.1)', transition:'transform 0.5s',
                    borderRadius: '30px'}}>
            <div style={{display:'flex'}}>
                <div style={{width:'100px'}} >{destination} </div>
                <div tyle={{width:'100px'}}> {start_date} </div>
                <div tyle={{width:'100px'}}> {end_date} </div>
                <div><button onClick={e => [e.preventDefault(), handleDetail()]}>Detail</button></div>
                <div><button onClick={e => [e.preventDefault(), deleteTrips()]}>Delete</button></div>
            </div>
        </div>
    )
}