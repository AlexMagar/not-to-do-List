import React from 'react'

export const BadTaskList = () => {
  return (
    <div>
        <tr>
            <td></td>
            <td></td>
            <td>
                <button className="btn btn-warning btn-sm" onclick="switchTask('${item.id}','entry')"><i className="fa-solid fa-arrow-left"></i></button>
                <button className="btn btn-danger btn-sm" onclick="deleteTask('${item.id}')"><i className="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    </div>
  )
}
