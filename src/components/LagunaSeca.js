import '../components/LagunaSeca.css';
import React, { useEffect, useState } from 'react';
import LagunaForm from './LagunaForm';
import LagunaMoments from './LagunaMoments';


function LagunaSeca() {
  const API_URL='https://6679b67218a459f6395126c1.mockapi.io/api/laptime/cars';

  //setting state for components
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
            return car.track === 'Laguna Seca';
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
    const carData = { ...newCar, track: 'Laguna Seca' };

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
    setNewCar({ car: '', image: '', track: 'Laguna Seca', laptime: '' });
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
      image: car.image || '',
      track: 'Laguna Seca',
      laptime: car.laptime
    });
  };

  return (
    //card building and rendering, form on the bottom in the card-footer
    <div className="app">
      
      <div className="card nring-card text-white" style={{backgroundColor: "#36454F"}}>
        
        
      
        <div className="card-body laguna-body">
          <div className="row">
            <div className='col-lg-3'>
            <div className='card text-white px-3' style={{backgroundColor: "#36454F", alignItems: "center", textAlign: "center"}}>
                <div className='card-header'>
                <h2>Laguna Seca</h2>
                </div>
                <div className='card-body' >
                  <img src='https://www.motoamerica.com/wp-content/uploads/2021/08/Track.jpg' style={{  width:'350px', objectFit:'cover' }}/>
                </div>
                <div>
                  <p id='nring-desc'>
                  Laguna Seca, officially known as WeatherTech Raceway Laguna Seca, is a world-renowned motorsports facility located in Monterey County, California. Opened in 1957, this 2.238-mile (3.602 km) road course is famous for its challenging layout and iconic features. The track's most notable element is the Corkscrew, a blind, plunging left-right combination with a dramatic elevation change of 59 feet between entry and exit. With 11 turns in total, Laguna Seca offers a mix of fast straights, technical corners, and elevation changes that test drivers' skills and vehicle performance. The circuit has hosted numerous prestigious racing events, including MotoGP, IMSA sports car races, and IndyCar Series competitions. Like the Nürburgring, Laguna Seca is also used for manufacturer testing and track day events, allowing enthusiasts to experience its thrilling layout firsthand. The track's picturesque setting in the Monterey hills, combined with its rich racing history, makes it a bucket-list destination for motorsports fans worldwide
                  </p>
                </div>

              </div>
              <div className='card laguna-layout'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXheoW7HPOPgWuqMUh7xzssXJZDRwcq9Tgrg&s'></img>
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
                    <h4><a className='text-white' href='https://www.countyofmonterey.gov/government/government-links/weathertech-raceway'>Visit the Laguna Seca Website!</a></h4>
                  </div>
                </div>
                <br></br>
                <div>
                  <LagunaForm
                    newCar={newCar}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    editingCar={editingCar}
                  />
                </div>
                <br></br>
                <div>
                  <LagunaMoments />
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>

  );
}


export default LagunaSeca;


