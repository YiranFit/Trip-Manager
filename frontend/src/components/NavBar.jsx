 import {AppBar, Toolbar, Typography, Box, InputBase,Button} from '@material-ui/core'   //npm install @material-ui/core --legacy-peer-deps
import{ Link} from 'react-router-dom'



export const NavBar = () => {
    return (
        <AppBar position="static" style={{fontWeight:'bold'}}>
          <Toolbar>
            <Typography variant="h5">
              Trip Manager
            </Typography>

            <Box className='box'>
                <Link style={{color: '#fff'}} to='/'>Home</Link>
                <Link style={{color: '#fff'}} to={'/login/'}>Login</Link>
                <Link style={{color: '#fff'}} to={'/logout/'}>Logout</Link>
                <Link style={{color: '#fff'}} to={'/trips/'}>My Trips</Link>
                <Link style={{color: '#fff'}} to={'/search/'}>Search</Link>

            </Box>

          </Toolbar>
        </AppBar>
        
    )
}