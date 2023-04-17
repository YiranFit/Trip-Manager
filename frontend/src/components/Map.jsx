
import GoogleMapReact from "google-map-react";
import {Paper, Typography, useMediaQuery} from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
// import Rating from "@material-ui/lab";

export const Map = () => { 
    const isMobile = useMediaQuery("(min-width:600px)");
    const coordinates = {lat: 0, lng: 0};


    return (
        <div>
            <h3>map</h3>
            <GoogleMapReact 
                bootstrapURLKeys={{key:'AIzaSyCc61gKWz6T5SVvsyx9YqeLGLpvRvNtt8Y'}}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >   

            </GoogleMapReact>
        
        </div>
    )
}