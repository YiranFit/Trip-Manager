import { CssBaseline, Grid } from "@material-ui/core"
import {useState, useEffect} from "react"
import React from "react"
import {Map} from "./Map"
import {List} from "./List"
import { allPlacesData} from "./utilities"
import '../App.css'


export const SearchPage = () => { 
    const [places, setPlaces] = useState([]);
    const [coordinates, setCoordinates] = useState({});
    const [bounds, setBounds] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [type, setType] = useState('hotels');
    
    // get your location 
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}}) => {
            setCoordinates({lat: latitude, lng: longitude})
        })  
    },[])

    useEffect(() => { 
        // console.log(coordinates, bounds)
        if (bounds) {
            allPlacesData(type,bounds.sw, bounds.ne)
            .then((data) => {
                // console.log(data)
                setPlaces(data)
            })
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