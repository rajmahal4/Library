import React from 'react'

const TableData = ({id, title, author, pages, read, removeRow, toggleRead }) => {
  return(


    <tr id = {id}>
    <td>{title}</td>
    <td>{author}</td>
    <td>{pages}</td>
    <td onClick = {() => toggleRead()}>{read}</td>

    <td><button className="bg-blue-500 hover:bg-red-500 text-black p-1 rounded-sm" id={id} onClick={()=>removeRow()}>Delete</button></td>
    </tr>

  )
}
export default TableData;