import axios from "axios"
import '../App.css'

export const RestaurantsList = ({restaurant,id}) => {

    const deleteRestaurants = async() => { 
        let response = await axios.delete(`/trips/${id}/restaurant/${restaurant.id}`)
        // console.log(response)
        return response.data.trips
    }

    


    return(
        <div className='restaurant-box'>
            <div className='restaurant-contianer'>
                <div className='restaurant-input'>{restaurant.name}</div>
                <div className='restaurant-input' style={{marginRight:'20px', width:'200px'}}>{restaurant.address}</div>
                <div className='restaurant-input'>{restaurant.phone}</div>
                <div className='restaurant-input'><button onClick={e=> [e.preventDefault(), deleteRestaurants()]}>Delete</button></div>
            </div>
        </div>
    )
}