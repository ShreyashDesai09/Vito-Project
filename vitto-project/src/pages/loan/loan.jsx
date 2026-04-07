import React from 'react'

import './loan.css'

function loan() {
  return (
    
    <div className="container">
      <br /><br /><br /><br />
      
      <div className="form-floating mb-3">
        <input type="number" class="form-control" id="floatingPassword" placeholder="Loan Amount"/>
        <label for="floatingPassword">LOAN AMOUNT</label>
      </div>


      <div className="form-floating mb-3">
        <input type="text" class="form-control" id="floatingPassword" placeholder="Loan Purpose"/>
        <label for="floatingPassword">Loan Purpose</label>
      </div>

      

      <select className="form-select" aria-label="Default select example">
        <option selected>Tenure</option>
        <option value="1">1 months</option>
        <option value="2">2 months</option>
        <option value="3">3 months</option>
        <option value="4">4 months</option>
        <option value="5">5 months</option>
        <option value="6">6 months</option>
        <option value="7">7 months</option>
        <option value="8">8 months</option>
        <option value="9">9 months</option>
        <option value="10">10 months</option>
        <option value="11">11 months</option>
        <option value="12">12 months</option>
      </select>

      <br />

      <button type="submit" class="btn btn-primary">Submit</button>

    </div>

  )
}

export default loan