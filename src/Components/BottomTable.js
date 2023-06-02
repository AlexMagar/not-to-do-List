import React from 'react'

export const BottomTable = () => {
  return (
    <div class="row mt-5">
      <div class="col-md">
        <h3 class="text-center">Entry Task List</h3>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="entry"></tbody>
        </table>
      </div>
      <div class="col-md">
        <h3 class="text-center">Bad Task List</h3>
        <hr />
        <table class="table table-striped table-hover">
          <tbody id="bad"></tbody>
        </table>
        <p>You coould have saved <span id="badHrs">0</span>hrs</p>
      </div>
    </div>
  )
}
