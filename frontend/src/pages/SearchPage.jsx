import { CssBaseline, Grid } from "@material-ui/core"
import {useState, useEffect} from "react"
import React from "react"
import {Map} from "../components/Map"
import {List} from "../components/List"
import { allPlacesData} from '../utilities'
import '../App.css'


export const SearchPage = () => { 
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [type, setType] = useState('restaurants');

    const [isLoading, setIsLoading] = useState(false);

    
    // get your location 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })  
    },[])

    useEffect(() => { 
        // console.log(coordinates, bounds)
        setIsLoading(true)
        if (bounds) {
            allPlacesData(type,bounds.sw, bounds.ne)
            .then((data) => {
                // console.log(data)
                setPlaces(data)
                setIsLoading(false)
            }
            )
        }    
    }, [type, coordinates, bounds])

    return (
        <div >
            <CssBaseline />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={5} style={{height:'900px', overflow:'scroll'}}>
                    <List 
                        places={places}
                        childClicked={childClicked}
                        type={type}
                        setType={setType}
                        isLoading={isLoading}
                    />
                </Grid>
                <Grid item xs={12} md={7}>    
                    <Map 
                        setCoordinates={setCoordinates} 
                        setBounds={setBounds}
                        coordinates={coordinates}
                        bounds={bounds}
                        places = {places}
                        setChildClicked={setChildClicked}
                    />
                </Grid>
            </Grid>
        </div>
    )
}
