import '../components/Nring.css';
import React, { useEffect, useState } from 'react';
import HistoricMoments from './HistoricMoments';
import NringForm from './NringForm';

function Nring() {
  const API_URL='https://6679b67218a459f6395126c1.mockapi.io/api/laptime/cars';

  //setting state for our components
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({ car: '', image: '', track: '', laptime: '' });
  const [editingCar, setEditingCar] = useState(null);

  //renders again if theres an update
  useEffect(() => {
    fetchCars();
  }, []);

  //pull cars from API
  const fetchCars = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        const filteredCars = data.filter(car => {
            return car.track === 'Nürburgring';
        });
        setCars(filteredCars);
      })
      .catch(error => console.error('Error fetching data:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCar(prev => ({ ...prev, [name]: value }));
  };

  
  //handles which type of submit it is. either editing current car or adding a new one
  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = { ...newCar};

    if (editingCar) {
      updateCar(editingCar.id, carData);
    } else {
      createCar(carData);
    }
  };

  //Creation function for new car/lap time
  const createCar = (car) => {
    fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(car),
    })
      .then(response => response.json())
      .then(() => {
        fetchCars();
        resetForm();
      })
      .catch(error => console.error('Error creating car:', error));
  };

  //resets the input fields after use
  const resetForm = () => {
    setNewCar({ car: '', image: '', track: 'Nürburgring', laptime: '' });
    setEditingCar(null);
  };

  //updates the car data and posts to the API
  const updateCar = (id, updatedCar) => {
    fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedCar),
    })
      .then(response => response.json())
      .then(() => {
        fetchCars();
        resetForm();
      })
      .catch(error => console.error('Error updating car:', error));
  };

  //delete car; removes from the API with a delete method
  const deleteCar = (id) => {
    fetch(`${API_URL}/${id}`, { method: 'DELETE' })
      .then(() => fetchCars())
      .catch(error => console.error('Error deleting car:', error));
  };

  //sets the values in the form when we select the edit button
  const startEditing = (car) => {
    setEditingCar(car);
    setNewCar({
      car: car.car,
      image: car.image,
      track: 'Nürburgring',
      laptime: car.laptime
    });
   
    
  };

  return (
    //card building and rendering, form on the bottom in the card-footer
    <div className="app">
      
      <div className="card nring-card text-white" style={{backgroundColor: "#36454F"}}>
        
        
      
        <div className="card-body" style={{backgroundImage:'url("https://www.24h-rennen.de/wp-content/uploads/2023/05/24hQualifiers_2023_Pulk-Nordschleife_Foto-GruppeC-ADAC.jpg")'}}>
          <div className="row">
            <div className='col-lg-3'>
            <div className='card text-white px-3' style={{backgroundColor: "#36454F", alignItems: "center", textAlign: "center"}}>
                <div className='card-header'>
                <h2 className='laptimes'>Nürburgring Nordschleife</h2>
                </div>
                <div className='card-body nring-body' >
                  <img src='https://www.tripsavvy.com/thmb/wmqYR-PRLtGF4_zflqnKy8BeOr8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Nuerburgring-595569813df78cdc290e4a57.jpg' style={{  width:'350px', objectFit:'cover' }}/>
                </div>
                <div>
                  <p id='nring-desc'>
                  The Nürburgring is one of the most iconic and challenging motorsports complexes in the world, located in the Eifel mountains of Germany. Opened in 1927, it consists of two main tracks: the modern 5.148 km Grand Prix circuit and the legendary 20.8 km Nordschleife. The Nordschleife, nicknamed the "Green Hell" by Jackie Stewart, is renowned for its demanding layout, featuring 154 turns, dramatic elevation changes, and high-speed sections that wind through dense forest. This treacherous track has been the site of numerous memorable races and tragic accidents, including Niki Lauda's near-fatal crash in 1976. Today, while Formula One races are held on the newer Grand Prix circuit, the Nordschleife remains a mecca for automotive enthusiasts, hosting endurance races, manufacturer testing, and public driving sessions known as "Touristenfahrten".
                  </p>
                </div>

              </div>
              <div className='card'>
                <img src='https://jacos-paddock.com/wp-content/uploads/2019/12/NordschleifeMap.png'></img>
                
              </div>
            </div>
            <div className='col-lg-6 lap-header'> 
              <div className='card text-white' style={{backgroundColor: "#36454F"}}>
                <h2 className='laptimes'>Lap Times</h2>
              </div> <br></br>
              {cars.reduce((rows, car, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(car);
                return rows;
              }, []).map((row, rowIndex) => (
                <div key={rowIndex} className="row px-2"> 
                  {row.map(car => (
                    <div key={car.id} className="col-lg-4 px-2 mb-3"> 
                      <div className="card text-white" style={{backgroundColor: "#36454F"}}> 
                        <div className='card-header'> 
                          <h3 className="fs-5 mb-1">{car.car}</h3>
                          <p className="medium mb-2">Lap Time: {car.laptime}</p>
                            <button className='btn btn-secondary btn-sm' onClick={() => startEditing(car)}>Edit</button>
                            <button className='btn btn-danger btn-sm' onClick={() => deleteCar(car.id)}>Delete</button>
                        </div>
                        <div className='card-body'> 
                          {car.image && <img src={car.image} alt={car.car} className="img-fluid" style={{ width: '100%', height: '150px', objectFit:'cover' }} />}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            
            <div className='col-lg-3'>
              <div className='card nring-site' style={{backgroundColor: "#36454F"}}>
                  <div className='card-header text-white'>
                    <h4><a className='text-white' href='https://www.nuerburgring.de'>Visit the Nürburgring Website!</a></h4>
                  </div>
                </div>
                <br></br>
                <NringForm
                    newCar={newCar}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    editingCar={editingCar}
                  />
                <br></br>
                <div>
                  <HistoricMoments />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


export default Nring;


