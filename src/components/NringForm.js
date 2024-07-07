import React from "react";

function NringForm() {
    
    const NringForm = ({ newCar, imageUrl, handleSubmit, handleInputChange, handleImageUrlChange, editingCar }) => {

        return (

            <div className='card' style={{backgroundColor: "#36454F"}}>
                  <div className= 'car-form pt-2 text-white'>
                    <form onSubmit={handleSubmit}>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Car:</label>
                        <div class="col-sm-9">
                          <input 
                            class="form-control"
                            name="car"
                            value={newCar.car}
                            onChange={handleInputChange}
                            placeholder="Car Make and Model"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Image:</label>
                        <div class="col-sm-9">
                          <input 
                            class="form-control"
                            name="imageUrl"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                            placeholder="Image URL"
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Track:</label>
                        <div class="col-sm-9">
                          <input 
                            class="form-control"
                            name="track"
                            value="Nürburgring"
                            readOnly
                            required
                          />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label class="col-sm-3 col-form-label">Lap Time:</label>
                        <div class="col-sm-9">
                          <input 
                            class="form-control"
                            name="laptime"
                            value={newCar.laptime}
                            onChange={handleInputChange}
                            placeholder="0:00.00"
                            required
                          />
                        </div>
                      </div>
                      <div className='row px-5 pt-2'>
                        <button className='btn btn-primary btn-block' type="submit">{editingCar ? 'Update' : 'Add'} Car</button>
                      </div>
                    </form>
                  </div>
                </div>
        );
    }
}

export default NringForm;