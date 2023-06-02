import React from 'react'

export const BottomTable = () => {
  return (
    <div className="row mt-5">
      <div className="col-md">
        <h3 className="text-center">Entry Task List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="entry"></tbody>
        </table>
      </div>
      <div className="col-md">
        <h3 className="text-center">Bad Task List</h3>
        <hr />
        <table className="table table-striped table-hover">
          <tbody id="bad"></tbody>
        </table>
        <p>You coould have saved <span id="badHrs">0</span>Hrs</p>
      </div>
    </div>
  )
}
