import React, { useState } from 'react'

const AddBook = ({postBook}) => {

    const [bookName,setBookName]=useState("")
    const [authorName,setAuthorName]=useState("")
    const [isbn,setIsbn]=useState("")
    const [photo,setPhoto]=useState("")
    const [genre,setGenre]=useState("")
    const [publicationDate,setPublicationDate]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()

        postBook( {
            "title": bookName,
            "author": authorName,
            "ISBN": isbn,
            "image": photo,
            "genre": genre,
            "publicationYear": publicationDate,
            
          })

        setBookName("")
        setAuthorName("")
        setIsbn("")
        setPhoto("")
        setGenre("")
        setPublicationDate("")
        

    }

   
  return (
    <div className="container container-add w-75  mt-4">
    <h1 className="display-5 text-center text-light">My Library</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Name of Book
        </label>
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Enter the name of the book"
          required
          onChange={(e)=>setBookName(e.target.value)}
          value={bookName}
         
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="author" className="form-label">
          Name of Author
        </label>
        <input
          type="text"
          className="form-control"
          id="author"
          placeholder="Enter the name of the author"
          required
          onChange={(e)=>setAuthorName(e.target.value)}
          value={authorName}
          
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="isbn" className="form-label">
          ISBN
        </label>
        <input
          type="text"
          className="form-control"
          id="isbn"
          placeholder="Enter ISBN"
          required
          onChange={(e)=>setIsbn(e.target.value)}
          value={isbn}
          
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="photo" className="form-label">
          Photo of Book
        </label>
        <input
          type="text"
          className="form-control"
          id="photo"
          placeholder="Enter the link of the cover photo"
          required
          onChange={(e)=>setPhoto(e.target.value)}
          value={photo}
          
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="genre" className="form-label">
          Genre
        </label>
        <input
          type="text"
          className="form-control"
          id="genre"
          placeholder="Enter genre of the book"
          required
          onChange={(e)=>setGenre(e.target.value)}
          value={genre}
          
          
        />
      </div>
      <div className="mb-3">
        <label htmlFor="date" className="form-label">
          Publication Date
        </label>
        <input
          type="text"
          className="form-control"
          id="date"
          placeholder="Enter the publication date"
          required
          onChange={(e)=>setPublicationDate(e.target.value)}
          value={publicationDate}
          
          
        />
      </div>
      <div className='text-center'>
      <button type="submit" className="btn btn-danger mb-4">
        Submit
      </button>
      </div>
      
    </form>
  </div>
  )
}

export default AddBook