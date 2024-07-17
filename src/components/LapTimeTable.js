import React, { useState, useEffect } from 'react';

const API_URL = 'https://6679b67218a459f6395126c1.mockapi.io/api/laptime/cars';

const LapTimeTable = () => {
  const [cars, setCars] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCars(data);
        setIsLoading(false);
      } catch (error) {
        setError('Error fetching data: ' + error.message);
        setIsLoading(false);
      }
    };

    fetchCars();
  }, []);

  // Group cars by track
  const groupedCars = cars.reduce((acc, car) => {
    if (!acc[car.track]) {
      acc[car.track] = [];
    }
    acc[car.track].push(car);
    return acc;
  }, {});


  // Sort cars by lap time within each track
  const sortedGroupedCars = Object.keys(groupedCars).reduce((acc, track) => {
    acc[track] = groupedCars[track].sort((a, b) => {
      const timeA = a.laptime.split(':').reduce((acc, time) => (60 * acc) + parseFloat(time));
      const timeB = b.laptime.split(':').reduce((acc, time) => (60 * acc) + parseFloat(time));
      return timeA - timeB;
    });
    return acc;
  }, {});

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="lap-time-container">
      {Object.keys(sortedGroupedCars).map(track => (
        <div className="lap-time-column" key={track}>
          <div className="card mb-4">
            <div className="card-header bg-dark text-white">
              <h2 className="text-center mb-0">{track} Lap Times</h2>
            </div>
            <div className="card-body">
              <table className="table table-striped table-hover">
                <thead className="thead-dark">
                  <tr>
                    <th>Position</th>
                    <th>Car</th>
                    <th>Lap Time</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedGroupedCars[track].map((car, index) => (
                    <tr key={car.id}>
                      <td>{index + 1}</td>
                      <td>{car.car}</td>
                      <td>{car.laptime}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LapTimeTable;