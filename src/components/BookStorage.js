function bookStorage(){
  let books;
  if(localStorage.getItem('library')=== null){
    books = [{
      title:"The Room Where It Happened: A White House Memoir",
      author: "John Bolton",
      pages: 592,
      read: "✔"
    }]
    localStorage.setItem('library', JSON.stringify(books))
  } else {
    books = JSON.parse(localStorage.getItem('library'))
  }
  return books
}

export default bookStorage;