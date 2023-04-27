import axios from 'axios';

export const signUp = async(name, email, password) => { 
    let response = await axios.post('/user/signup/', {
        'name': name,
        'email': email,
        'password': password
    })
    console.log(response.data.success)
    return response.data.success
}

export const logIn = async(email, password, setUser) => { 
    let response = await axios.post('/user/login/', {
        'email': email,
        'password': password
    })
    if(!email | !password){
        alert('Please enter a valid username and password')
    }
    setUser(response.data)   
}

export const curruser = async() => { 
    let response = await axios.get('/user/curruser/')

    // console.log(response.data.user)
    return response.data.user
}

export const getTrips = async() => {
    let response = await axios.get('/trips/')
    // console.log(response.data.trips)
    return response.data.trips
    }
 
export const createTrips = async(destination, start_date, end_date) => {
    let response = await axios.post('/trips/', {
        'destination': destination,
        'start_date': start_date,
        'end_date': end_date,
    })
     return response.data.trips
 }
 



export const allPlacesData = async (type,sw,ne) => { 
    console.log(type)
    const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,{
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_TRAVEL_API_KEY,
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      })
    return data
}
