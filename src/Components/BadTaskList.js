import React from 'react'

export const BadTaskList = () => {
  return (
    <div>
        <tr>
            <td>${item.task}</td>
            <td>${item.hr}hrs</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="switchTask('${item.id}','entry')"><i class="fa-solid fa-arrow-left"></i></button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask('${item.id}')"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>
    </div>
  )
}
