import {UserContext} from '../App';
import {useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'

export const HomePage = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const handleSearch = () => { 
        navigate(`/search/`)
    }

    const handleCreate = () => { 
        navigate(`/trips/`)
    }
    

    return (
        <div className='homepage'>
            <h3 className='homepage-title'>The World Is Yours {user && user.name}</h3>
            {/* <Link className='homepage-link' to='/search/'>Start To Explore</Link> */}
            <button onClick={e => [e.preventDefault(), handleSearch()]}>Start To Explore</button>
            <button onClick={() => handleCreate() }>Create New Trips</button>

        </div>
    );
}