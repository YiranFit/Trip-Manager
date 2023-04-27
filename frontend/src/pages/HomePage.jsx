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
            <div>
                <header className='homepage-header'>The World Is Yours {user && user.name}</header>
            </div>
            <div className='homepage-buttons'>
                <div >
                    <button className='homepage-button' onClick={e => [e.preventDefault(), handleSearch()]}>Start To Explore</button>
                </div>
                <div >
                    <button className='homepage-button' onClick={() => handleCreate() }>Create New Trips</button>
                </div>
            </div>

        </div>
    );
}