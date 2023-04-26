import {useLoaderData} from 'react-router-dom';
import { useState} from 'react';
import { createTrips} from '../utilities';
import {TripList} from '../components/TripList';
import { useContext } from 'react';
import { UserContext } from '../App';

export const MyTrips = () => { 
    const trips = useLoaderData();
    const {user} = useContext(UserContext)
    const [destination, setDestination] = useState('');
    const[start_date, setStart_Date] = useState('');
    const[end_date, setEnd_Date] = useState('');
    const [currTrips, setCurrTrips] = useState(trips)
    
    const getMyTrips = async () => {
        if (!user) {
          alert('Please log in to create a trip.');
          return;
        } else if (!destination || !start_date || !end_date) {
          alert('Please fill out all input fields.');
          return;
        }

        setCurrTrips(await createTrips(destination, start_date, end_date))
      };
      
    return (
        <div >
            <h3>Create Trips</h3>
            <form style={{display:'flex'}} onSubmit={(e) => [e.preventDefault(), getMyTrips()]}>
                <div>
                  <label htmlFor="destination">Destination</label><br />
                  <input id='destination' type="text" value={destination} onChange={(e)=>setDestination(e.target.value)}/>
                </div>
                    
                <div>
                  <label htmlFor="start">Start Date</label><br />
                  <input id='start' type="date" value={start_date} onChange={e => setStart_Date(e.target.value)}/>
                </div>
                    
                <div>
                  <label htmlFor="end">End Date</label><br />
                  <input id='end' type="date" value={end_date} onChange={e => setEnd_Date(e.target.value)}/>
                </div>
                    
                <div>
                  <label htmlFor=""></label><br />
                  <input type="submit" value='Create' />
                </div>  
            </form>

              <br />
              {  currTrips &&
                  currTrips.map((trip) => (
                    <ul>
                    <li key={trip.id}> <TripList
                        destination={trip.destination}
                        start_date={trip.start_date}
                        end_date={trip.end_date}
                        id = {trip.id}
                        />
                    </li>
                    </ul>
                    )
                    ) 
                }
        </div>
    );
}

