import React from 'react'

export const EntryTaskList = () => {
  return (
    <div>
        <tr>
            <td>${item.task}</td>
            <td>${item.hr}hrs</td>
            <td>
                <button id="danger" class="btn btn-danger btn-sm" onClick="deleteTask('${item.id}')"><i class="fa-solid fa-trash"></i></button>
                <button id="go-left" class="btn btn-success btn-sm" onClick="switchTask('${item.id}','bad')"><i class="fa-solid fa-arrow-right"></i></button>
            </td>
        </tr>
    </div>
  )
}
