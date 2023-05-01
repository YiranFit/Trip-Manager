import axios from "axios"
import { useLoaderData } from "react-router-dom"
import '../App.css'
import { Hotels } from "../components/Hotels"
import { Restaurants } from "../components/Restaurants"
import { Note } from "../components/Note"
import { createContext } from 'react';


export const IdContext = createContext(null)

export async function getTripLoader({params}) {
    const response = await axios.get(`/trips/${params.id}`)
    const trip = response.data.trip[0]
    return trip
}

export const TripDetail = () => { 
    const trip  = useLoaderData()
    const TripId = trip.pk
    // const hotels = getHotels()
  
      
    return (
        <div>
            <div className="tripDetail-header"> 
                <div >
                    <h1>{trip.fields.destination}</h1>
                </div>
                <div className="tripDetail-date">
                    <h3>Start Date: {trip.fields.start_date}</h3>
                    <h3>End Date: {trip.fields.end_date}</h3>
                </div>
            </div>  
            <br />
            <hr />
    
            <div className="tripDetail-forms">   
                <Restaurants id={TripId}/>
                <Hotels id={TripId}/>
                <Note id={TripId}/>
            </div>

        </div>
    )
}
