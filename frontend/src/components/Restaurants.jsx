import { useState, useEffect } from "react"
import axios from "axios"
import { RestaurantsList } from "./RestaurantsList"


export const Restaurants = ({id}) => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [restaurants, setRestaurants] = useState([])

    const createRestaurants = async(name, address, phone) => {
        let response = await axios.post(`/trips/${id}/restaurant/`, {
            'name': name,
            'address': address,
            'phone': phone,
        })
        
        return response.data.restaurant
    }

    useEffect(() => { 
        const getRestaurants = async() =>{
            let response = await axios.get(`/trips/${id}/restaurant/`)
            // console.log(response.data.restaurant)
            setRestaurants(response.data.restaurant)
        }
        getRestaurants()
    }, [restaurants])

    return (
        <div className="tripDetail-form" style={{marginLeft:'30px'}}>
            <h3 style={{paddingLeft:'200px'}}>Restaurants</h3>
            <form style={{display:'flex'}} onSubmit={e=>[e.preventDefault(), createRestaurants(name,address,phone),setName(''), setAddress(''), setPhone('')]}>
                <div className="tripDetail-input">
                    <label htmlFor="">Restaurant Name</label>
                    <input type="text" placeholder="name" value={name} onChange={e=>setName(e.target.value)} />
                </div>
                <div className="tripDetail-input">
                    <label htmlFor="">Restaurant Address</label>
                    <input type="text"  placeholder="adress" value={address} onChange={e=>setAddress(e.target.value)}/>
                </div>
                <div className="tripDetail-input">
                    <label htmlFor="">Restaurant Phone</label>
                    <input type="text" placeholder="phone" value={phone} onChange={e=>setPhone(e.target.value)}/>
                </div>
                <div className="tripDetail-input">
                    <label></label><br />
                    <input type="submit" value="Add" />     
                </div>
            </form>
            <br />
            <br />
            {restaurants && restaurants.map(restaurant => 
                <RestaurantsList 
                    key={restaurant.id}
                    restaurant={restaurant}
                    restaurants={restaurants}
                    id={id}
                />)
            }
        </div>
    )
}