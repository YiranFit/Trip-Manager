import { createHashRouter} from 'react-router-dom';
import { SignUp } from './components/SignUp';
import  {LogIn}  from './components/SignIn'
import { LogOut } from './components/LogOut';
import { HomePage } from './components/HomePage';
import { Map } from './components/Map';
import App from './App'
import { SearchPage } from './components/SearchPage';

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
            }
        ]
    }
]);

export default Router;