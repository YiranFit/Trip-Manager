import GoogleMapReact from "google-map-react";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Typography, Box, InputBase,useMediaQuery } from "@material-ui/core";
import { Autocomplete } from "@react-google-maps/api";
import { useState } from "react";
import '../App.css'


const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;


export const Map = ({setCoordinates, setBounds, coordinates, places,setChildClicked}) => { 
    const isMobile = useMediaQuery("(min-width:600px)");
    const [autocomplete, setAutocomplete] = useState(null);

    const onLoad = (autoC) => setAutocomplete(autoC);
    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
        setCoordinates({lat, lng})
    }
    
    return (
        <div>
            <div style={{height:'85vh', width:'100%' }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant="h4" gutterBottom>
                        Map
                    </Typography>

                    <Box display='flex' alignItems='center' width='400px' justifyContent='space-evenly' >
                        <Typography variant="h6">
                            Search new places
                        </Typography>
                        <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                            <div className="inputBase">
                                <InputBase placeholder="Search..."/>
                            </div>
                        </Autocomplete>
                    </Box>
                </div>

                <GoogleMapReact
                    bootstrapURLKeys={{key: apiKey }}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    margin={[50,50,50,50]}
                    options={''}
                    onChange={(e) => {
                        // console.log(e)
                        setCoordinates({lat: e.center.lat, lng: e.center.lng});
                        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})         
                    }}
                    onChildClick={(child) => {setChildClicked(child)}}
                >   
                    {places?.map((place, i) => (
                        <div 
                            lat={Number(place.latitude)}
                            lng={Number(place.longitude)}
                            key={i}>   
                           {
                             isMobile && <LocationOnOutlinedIcon color='primary' fontSize="large"/>
                           }
                        </div>
                    ))}
                </GoogleMapReact>
            </div>
        </div>
    )
}