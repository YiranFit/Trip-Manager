import axios from "axios"
import { useEffect } from "react"

export const HotelsList = ({hotel,id}) => {
    
    const deleteHotels = async() => { 
        let response = await axios.delete(`/trips/${id}/hotel/${hotel.id}`)
        // console.log(response)
        return response.data.trips
    }

    

    return(
        <div className='hotel-box'>
            <div className='hotel-contianer'>
                <div className='hotel-input'>{hotel.name}</div>
                <div className='hotel-input' style={{marginRight:'10px'}}>{hotel.check_in}</div>
                <div className='hotel-input'>{hotel.check_out}</div>
                <div className='hotel-input'><button onClick={e=> [e.preventDefault(), deleteHotels()]}>Delete</button></div>
            </div>
        </div>
    )

}
