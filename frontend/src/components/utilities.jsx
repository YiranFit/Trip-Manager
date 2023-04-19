import axios from 'axios';

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
          'X-RapidAPI-Key': '85231625b7msh5570999f961699ep1cd498jsn5caea79ba8b0',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      })
    return data
}