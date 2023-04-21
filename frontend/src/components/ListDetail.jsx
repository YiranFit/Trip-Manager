import React from 'react'
import { Box, Typography, Card, Button, CardContent, CardMedia} from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {Link} from 'react-router-dom'

export const ListDetail = ({place}) => { 
    // console.log(place)

    return (
        <div>
            <Card elevation={6}>
                <CardMedia 
                    style={{height: 300}}
                    image={place.photo && place.photo.images.large.url}
                    title={place.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{place.name}</Typography>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Price</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.price}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1">Ranking</Typography>
                        <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
                    </Box>
                    <Box display="flex" justifyContent="space-between">
                        <Typography variant="subtitle1"><LocationOnIcon /></Typography>
                        <Typography gutterBottom variant="subtitle1">{place.address}</Typography>
                    </Box>

                    
                    <Link to={place.website}>Check it</Link>
                </CardContent>

            </Card>
            
        </div>
    )
}