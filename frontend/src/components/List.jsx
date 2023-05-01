import React from "react";
import { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";
import '../App.css';
import {ListDetail} from './ListDetail';


export const List = ({places,type, setType, childClicked, isLoading}) => {
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        setElRefs( (refs) => Array(places?.length).fill().map((_, i) => refs[i] || createRef()));   
    }, [places]);

    console.log({childClicked})
    
    return (
        <div>
            <div className="container">
                <Typography variant="h4">
                    Restaurants && Hotels
                </Typography>
                
                {isLoading ? (   
                    <div className="loading">
                        <CircularProgress size="5rem"/>
                    </div>
                ):(
            <>
                {/* <div className="container-form">  */}
                <FormControl>
                    <InputLabel>Type</InputLabel>
                    <Select value={type} onChange={e=> [e.preventDefault(), setType(e.target.value)]}>
                        <MenuItem value="restaurants">Restaurants</MenuItem>
                        <MenuItem value="hotels">Hotels</MenuItem>
                    </Select>
                </FormControl>
                {/* </div> */}
            
                <Grid container spacing={3} className="list">
                    {places && places.slice(0,10).map((place, i) => (
                        <Grid item key={i} xs={12}>
                            <ListDetail 
                                place={place}
                                selected={Number(childClicked) === i}  
                                refProp={elRefs[i]}
                            />
                        </Grid>
                    ))}
                </Grid>
            </>
                )}
            </div>
        </div>
                
    );
}