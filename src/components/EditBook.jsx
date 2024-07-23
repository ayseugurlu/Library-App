import React from 'react'

const EditBook = ({editBook,setEditBook,putData}) => {
  return (
    <div className="modal fade" id="editModal" tabIndex="-1" aria-modal="true"  aria-labelledby="exampleModalLabel" role="dialog">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title text-success" id="exampleModalLabel">Edit this book</h5>

        <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
        
      </div>
      <div className="modal-body">
      <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Book Name
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editBook.title}
                onChange={(e) =>
                  setEditBook({ ...editBook, title: e.target.value })
                }
              />
            </div>
      <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Author Name
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editBook.author}
                onChange={(e) =>
                  setEditBook({ ...editBook, author: e.target.value })
                }
              />
            </div>
      <div className="mb-3">
              <label htmlFor="title" className="form-label">
                ISBN
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editBook.ISBN}
                onChange={(e) =>
                  setEditBook({ ...editBook, ISBN: e.target.value })
                }
              />
            </div>
      <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Photo
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editBook.image}
                onChange={(e) =>
                  setEditBook({ ...editBook, image: e.target.value })
                }
              />
            </div>
      <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Genre
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editBook.genre}
                onChange={(e) =>
                  setEditBook({ ...editBook, genre: e.target.value })
                }
              />
            </div>
      <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Publication Date
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your title"
                value={editBook.publicationYear}
                onChange={(e) =>
                  setEditBook({ ...editBook, publicationYear: e.target.value })
                }
              />
            </div>

      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-danger"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-success" data-bs-dismiss="modal" onClick={()=>putData(editBook)}>
          Save Changes
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default EditBook