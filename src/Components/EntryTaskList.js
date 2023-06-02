import React from 'react'

export const EntryTaskList = () => {
  return (
    <div>
        <tr>
            <td></td>
            <td>Hrs</td>
            <td>
                <button id="danger" className="btn btn-danger btn-sm" onClick="deleteTask('${item.id}')"><i className="fa-solid fa-trash"></i></button>
                <button id="go-left" className="btn btn-success btn-sm" onClick="switchTask('${item.id}','bad')"><i className="fa-solid fa-arrow-right"></i></button>
            </td>
        </tr>
    </div>
  )
}
