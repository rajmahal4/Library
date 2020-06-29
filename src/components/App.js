import React from 'react'
import bookStorage from './BookStorage'
import '../App.css';
import Header from './Header';
import Table from './Table'
import Form from './Form';

class App extends React.Component{
  state = {
    books: bookStorage(),
    newBook: {
      title: "",
      author:"",
      pages: "",
      read: "no"
    }
  }

  removeRow = index =>{
    let booksClone = JSON.parse(localStorage.getItem('library'))
    booksClone.splice(index, 1)
    localStorage.setItem('library', JSON.stringify(booksClone))
    this.setState({books: bookStorage()})
  }

  toggleRead = index => {
    let booksClone = JSON.parse(localStorage.getItem('library'))
    booksClone[index].read = booksClone[index].read === '✔' ? '❌' : '✔'
    localStorage.setItem('library', JSON.stringify(booksClone))
    this.setState({books: bookStorage()})
  }
  handleChange = e => {
    const {value, name } = e.target;
    this.setState(prevState => ({
      newBook: {
        ...prevState.newBook,
        [name]: value
      }

    }))
  }

  handleSubmit = e =>{
    e.preventDefault();
    let booksClone = this.state.books.slice();

    if(this.state.newBook.title === "" || this.state.newBook.author=== "" ) return

    booksClone.push({
      title: this.state.newBook.title,
      author: this.state.newBook.author,
      pages: this.state.newBook.pages,
      read: this.state.newBook.read === "yes" ? '✔' : '❌'
    })
    localStorage.setItem('library', JSON.stringify(booksClone))
    this.setState({
      books: bookStorage(),
      newBook: {
        title: "",
        author: "",
        pages: "",
        read: "no"
      }
    })
  }

  render(){
    return(
    <div className = 'container'>
      <Header />

      <div className = 'form'>
        <Form 
        handleSubmit = {this.handleSubmit}
        handleChange = {this.handleChange}
        titleValue={this.state.newBook.title}
        authorValue={this.state.newBook.author}
        pagesValue={this.state.newBook.pages}
        read = {this.state.newBook.read}
        />
      </div>
      <div>
        <Table 
      books = {this.state.books}
      removeRow = {this.removeRow}
      toggleRead = {this.toggleRead}
       />
      </div>

    </div>
    )
  }
}

export default App;