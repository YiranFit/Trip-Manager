 import {AppBar, Toolbar, Typography, Box, InputBase,Button} from '@material-ui/core'   //npm install @material-ui/core --legacy-peer-deps
import{ Link} from 'react-router-dom'



export const NavBar = () => {
    return (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h5">
              Trip Manager
            </Typography>

            <Box className='box'>
                <Link to='/'>Home</Link>
                <Link to={'/signup'}>Sign Up</Link>
                <Link to={'/login/'}>Login</Link>
                <Link to={'/logout/'}>Logout</Link>
                <Link to={'/search/'}>Search</Link>
                
              <Typography variant="h7">
                  My Trips
              </Typography>
            </Box>

          </Toolbar>
        </AppBar>
        
    )
}