import React from 'react'

const Form = ({titleValue, authorValue, pagesValue, read, handleSubmit, handleChange })=>{
  return (
    <form className = 'form-container' onSubmit = {handleSubmit}>

    <label>Title: 
      <input className = 'title' name="title" value={titleValue} onChange={handleChange} placeholder = 'DMT: The Spirit Molecule' type="text" />
      </label>
      
      <label>Author: 
      <input className = 'author' name="author" value={authorValue} onChange={handleChange} type="text" placeholder = 'Terrance McKenna' />
      </label>

      <label>Pages: 
      <input className = 'pages' name="pages" value={pagesValue} onChange={handleChange} type="number" placeholder = {500}/>
      </label>

      <label>Read:  
      <input className = 'read' label = "Read" name="read" checked = {read === "yes"} value="yes" onChange={handleChange} type="radio" />
      </label>
     <button type = 'submit'>Submit</button>
    </form>
  )
}
export default Form;