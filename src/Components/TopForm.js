import React from 'react'

export const TopForm = () => {
    const handleOnSubmit = () =>{

    }
  return (
    <div>
        <form
          action="javascript:void(0)"
          className="mt-5 border py-5 p-3 rounded shadow-lg bg-light"
          onsubmit={handleOnSubmit(this)}
        >
          <div className="row g-1">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                id="category"
                name="task"
                required
              />
            </div>
            <div className="col-md-2">
              <input
                type="number"
                className="form-control"
                id="category-count"
                name="hr"
                required
              />
            </div>
            <div className="col-md-4 d-grid">
              <button className="btn btn-primary">+ Add New Task</button>
            </div>
          </div>
        </form>
    </div>
  )
}
