import { createHashRouter} from 'react-router-dom';
import { SignUp } from './pages/SignUp';
import { LogIn } from './pages/SignIn';
import { LogOut } from './pages/LogOut';
import { HomePage } from './pages/HomePage';
import App from './App'
import { SearchPage } from './pages/SearchPage';
import { MyTrips } from './pages/MyTrips';
import { getTrips } from './utilities';
import { TripDetail } from './pages/TripDetail';


const Router = createHashRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/signup/',
                element: <SignUp />
            },
            {
                path: '/login/',
                element: <LogIn />
            },
            {
                path: '/logout/',
                element: <LogOut />
            },
            {
                path: '/search/',
                element: <SearchPage />
            },
            {
                path: '/trips/',
                element: <MyTrips />,
                loader: getTrips
            },
            {
                path: '/trips/:name',
                element: <TripDetail />,
            }

        ]
    }
]);

export default Router;