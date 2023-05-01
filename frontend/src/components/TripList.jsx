import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios"
import '../App.css';



export const TripList = ({destination, start_date, end_date,id, currTrips, setCurrTrips}) => {
    const navigate = useNavigate()
    

    const handleDetail = () => { 
        navigate(`/trips/${id}`)
    }

    const deleteTrips = async() => { 
        let response = await axios.delete(`/trips/${id}`)
        // console.log(response)
        return(response.data.trips)
    }
    
    




    return (
        <div className="tripList-box">
            <div className="tirpList-container">
                <div className="tripList-input"> {destination} </div>
                <div className="tripList-input"> {start_date} </div>
                <div className="tripList-input"> {end_date} </div>
                <div className="tripList-input"><button onClick={e => [e.preventDefault(),handleDetail()]}>Detail</button></div>
                <div className="tripList-input"><button onClick={e => [e.preventDefault(), deleteTrips()]}>Delete</button></div>
            </div>
        </div>
    )
}