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
                <Link style={{color: 'white'}} to='/'>Home</Link>
                <Link style={{color: 'white'}} to={'/trips/'}>My Trips</Link>
                <Link style={{color: 'white'}} to={'/signup/'}>Sign Up</Link>
                <Link style={{color: 'white'}} to={'/login/'}>Login</Link>
                <Link style={{color: 'white'}} to={'/logout/'}>Logout</Link>
                <Link style={{color: 'white'}} to={'/search/'}>Search</Link>

            </Box>

          </Toolbar>
        </AppBar>
        
    )
}