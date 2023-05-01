import '../App.css';
import { useEffect, useState, useContext } from "react";
import axios from 'axios';
import { HotelsList } from './HotelsList';


// export async function getHotels({pramas}){
//         let response = await axios.get(`/trips/${pramas.id}/hotel/`)
//         print(response.data.hotels)
//         return response.data.hotels
//     }

export const Hotels = ({id}) => {
    const [name, setName] = useState('');
    const [check_in, setCheck_in] = useState('');
    const [check_out, setCheck_out] = useState('');
    const [hotels, setHotels] = useState([]);
    // console.log(hotels)

    const createHotels = async(name, check_in, check_out) => {
    let response = await axios.post( `/trips/${id}/hotel/`, {
        'name': name,
        'check_in': check_in,
        'check_out': check_out,
    })
        return response.data.hotel
    }

    useEffect(() => {
        async function getHotels(){
            let response = await axios.get(`/trips/${id}/hotel/`)
            setHotels(response.data.hotel)
        }
        getHotels()
    }, [hotels])


    return (
        <div>
            <div className="tripDetail-form" style={{marginLeft:'50px'}}> 
                <h3 style={{paddingLeft:'200px'}}>Hotels</h3> 
                <form style={{display:'flex'}} onSubmit={(e)=> [e.preventDefault(), createHotels(name,check_in, check_out ), setName(''), setCheck_in(''), setCheck_out('')]}>
                    <div className="tripDetail-input">
                        <label htmlFor="">Hotel Name</label>
                        <input type="text" placeholder="name" value={name} onChange={(e)=> [e.preventDefault(), setName(e.target.value)]} />
                    </div>
                    <div className="tripDetail-input">
                        <label htmlFor="">Checkin Date</label>
                        <input type="date" value={check_in} onChange={(e) => [e.preventDefault(), setCheck_in(e.target.value)]}/>
                    </div>
                    <div className="tripDetail-input">
                        <label htmlFor="">Checkout Date</label>
                        <input type="date" value={check_out} onChange={e=> [e.preventDefault(), setCheck_out(e.target.value)]}/>
                    </div>
                    <div className="tripDetail-input">
                        <label></label><br />
                        <input type="submit" value="Add" />
                    </div> 
                </form>
                <br />
                <br />
                {hotels && hotels.map((hotel, i) => (
                    <HotelsList
                        key={i}
                        hotel={hotel} 
                        id={id}/>
                ))} 
            </div>
        
        </div>
    );
    }