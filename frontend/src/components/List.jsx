import React from "react";
import { useState } from "react";
import { Grid, Typography, InputLabel, MenuItem, FormControl, Select} from "@material-ui/core";
import '../App.css';
import {ListDetail} from './ListDetail';


export const List = ({places,type, setType}) => {
    
    return (
        <div>
            <div className="container">
                <Typography variant="h4">
                    Restaurants && Hotels
                </Typography>
                <div className="container-form"> 
                    <FormControl>
                        <InputLabel>Type</InputLabel>
                        <Select value={type} onChange={e=> [e.preventDefault(), setType(e.target.value)]}>
                            <MenuItem value="restaurants">Restaurants</MenuItem>
                            <MenuItem value="hotels">Hotels</MenuItem>
                        </Select>
                    </FormControl>
                </div>{/* end of rating form contianer-form div   */}
            </div>{/* end of container div   */}
            <Grid container spacing={3} className="list">
                {places && places.slice(0,10).map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <ListDetail place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}