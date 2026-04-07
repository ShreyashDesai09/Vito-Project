import React from 'react'

import './user.css'

function home() {
  return (

    <div className="container">
      <br /><br /><br /><br />
      <div class="form-floating mb-3">
        <input type="text" class="form-control" id="floatingInput" placeholder="NAME"/>
        <label for="floatingInput">NAME</label>
      </div>
      
      <div class="form-floating">
        <input type="number" class="form-control" id="floatingPassword" placeholder="PAN NUMBER"/>
        <label for="floatingPassword">PAN NUMBER</label>
      </div>

      <br />
      
      <div class="col-md-4">
        <label for="inputState" class="form-label">Bussiness Type</label>
        <select id="inputState" class="form-select">
          <option selected></option>
          <option></option>
        </select>
      </div>


      <br />

      <div class="form-floating">
        <input type="number" class="form-control" id="floatingPassword" placeholder="Monthly Revenue"/>
        <label for="floatingPassword">MONTHLY REVENUE</label>
      </div>

      <br />
      
      <button type="submit" class="btn btn-primary">Submit</button>

    </div>

    

  )
}

export default home
