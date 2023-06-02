import React from 'react'

export const TopForm = () => {
    const handleOnSubmit = () =>{

    }
  return (
    <div>
        <form
          action="javascript:void(0)"
          class="mt-5 border py-5 p-3 rounded shadow-lg bg-light"
          onsubmit={handleOnSubmit(this)}
        >
          <div class="row g-1">
            <div class="col-md-6">
              <input
                type="text"
                class="form-control"
                id="category"
                name="task"
                required
              />
            </div>
            <div class="col-md-2">
              <input
                type="number"
                class="form-control"
                id="category-count"
                name="hr"
                required
              />
            </div>
            <div class="col-md-4 d-grid">
              <button class="btn btn-primary">+ Add New Task</button>
            </div>
          </div>
        </form>
    </div>
  )
}
