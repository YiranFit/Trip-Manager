import GoogleMapReact from "google-map-react";
import { useMediaQuery} from "@material-ui/core";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import { Typography } from "@material-ui/core";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log(apiKey)

export const Map = ({setCoordinates, setBounds, coordinates, places,setChildClicked}) => { 
    const isMobile = useMediaQuery("(min-width:600px)");
    
    return (
        <div>
            <div style={{height:'85vh', width:'100%' }}>
                <div style={{display:'flex', justifyContent:'space-between'}}>
                    <Typography variant="h4" gutterBottom>
                        Map
                    </Typography>
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