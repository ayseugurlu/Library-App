import React from 'react';
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const BookList = ({ updateData }) => {
    console.log(updateData);

    return (
        <div className='container mt-4'>
            <table className='table table-striped'>
                <thead>
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
                                    <BiSolidEdit />
                                    <RiDeleteBin2Fill />
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default BookList;
