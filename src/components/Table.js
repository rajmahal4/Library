import React from 'react';
import TableData from './TableData'
import TableHeader from './TableHeaders'


const Table = ({books, removeRow, toggleRead}) => {

  return (
    <table className='table'>
    <TableHeader />
      <tbody>
        {
          books.map((book, index) => (
          <TableData 
          key = {index}
          id = {Math.random().toString().slice(2,4)} 
          title = {book.title}
          author = {book.author}
          pages = {book.pages}
          read = {book.read}
          removeRow = {() => removeRow(index)}
          toggleRead = {()=>toggleRead(index)}
          />
          ))}
      </tbody>
    </table>
  )
}

export default Table;