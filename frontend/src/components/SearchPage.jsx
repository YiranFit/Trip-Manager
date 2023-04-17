import { CssBaseline, Grid } from "@material-ui/core"
import React from "react"
import {Map} from "./Map"
import {List} from "./List"


export const SearchPage = () => { 

    return (
        <div>
            <CssBaseline />
            <Grid container spacing={3} style={{width: '100%'}}>
                <Grid item xs={12} md={4}>
                    <List />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Map />
                </Grid>
            </Grid>
        </div>
    )
}