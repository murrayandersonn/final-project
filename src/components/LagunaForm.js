import React from "react";

const LagunaForm = ({ newCar, handleSubmit, handleInputChange, handleImageUrlChange, editingCar }) => {
  return (
    <div className='card' style={{backgroundColor: "#36454F"}}>
      <div className='car-form pt-2 text-white'>
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Car:</label>
            <div className="col-sm-9">
              <input 
                className="form-control"
                name="car"
                value={newCar.car}
                onChange={handleInputChange}
                placeholder="Car Make and Model"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Image:</label>
            <div className="col-sm-9">
              <input 
                className="form-control"
                name="image"
                value={newCar.image}
                onChange={handleImageUrlChange}
                placeholder="Image URL"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Track:</label>
            <div className="col-sm-9">
              <input 
                className="form-control"
                name="track"
                value="Laguna Seca"
                readOnly
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-3 col-form-label">Lap Time:</label>
            <div className="col-sm-9">
              <input 
                className="form-control"
                name="laptime"
                value={newCar.laptime}
                onChange={handleInputChange}
                placeholder="0:00.00"
                required
              />
            </div>
          </div>
          <div className='row px-5 pt-2'>
            <button className='btn btn-primary btn-block' type="submit">
              {editingCar ? 'Update' : 'Add'} Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LagunaForm;