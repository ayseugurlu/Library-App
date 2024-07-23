import React, { useState } from 'react';
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import EditBook from './EditBook';

const BookList = ({ updateData , deleteData,putData }) => {
    const [editBook,setEditBook]=useState("")
    // console.log(updateData);

    return (
        <div className='container mt-4 book-list'>
            <table className='table table-striped table-warning table-hover table-borderless table-rounded'>
                <thead className='table-success'>
                    <tr>
                        <th scope='col'>ISBN</th>
                        <th scope='col'>Cover Photo</th>
                        <th scope='col'>Book Name</th>
                        <th scope='col'>Author Name</th>
                        <th scope='col'>Genre</th>
                        <th scope='col'>Publication Date</th>
                        <th scope='col'>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {updateData.map(({ title, author, ISBN, image, genre, id, publicationYear }) => {
                        return (
                            <tr key={id}>
                                <td>{ISBN}</td>
                                <td><img src={image} alt={title} style={{ width: '50px' }} /></td>
                                <td>{title}</td>
                                <td>{author}</td>
                                <td>{genre}</td>
                                <td>{publicationYear}</td>
                                <td>
                                    <BiSolidEdit
                                    data-bs-toggle="modal"
                                    data-bs-target="#editModal"
                                    type='button'
                                    size={22}
                                    className='text-success cursor-pointer'
                                    onClick={()=>setEditBook({ISBN,image,title,author,genre,publicationYear,id})}
                                   


                                     />
                                    <RiDeleteBin2Fill 
                                        type='button'
                                        size={22}
                                        className='text-danger cursor-pointer'
                                        onClick={()=>deleteData(id)}
                                    />
                                </td>
                            </tr>
                        );
                    })}

                    
                </tbody>
                <EditBook editBook={editBook} setEditBook={setEditBook} putData={putData}/>
            </table>
        </div>
    );
};

export default BookList;
