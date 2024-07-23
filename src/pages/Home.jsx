import React, { useEffect, useState } from "react";
import axios from "axios";
import AddBook from "../components/AddBook";
import BookList from "../components/BookList";


const Home = () => {
  const [updateData, setUpdateData] = useState([]);

  const url = "https://clarus-library-api.vercel.app/books/";

  const getData = async () => {
    const res = await axios.get(url);

    setUpdateData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  //^ Post
  const postBook = async (yeniVeri) => {
    await axios.post(url,yeniVeri);
    getData();
  };

  //^ Delete
  const deleteData = async (id) => {
    await axios.delete(url + id);
    getData();
  };

  //^ Put
  const putData = async(editBook) => {
    await axios.put(`${url}${editBook.id}`, editBook);
    getData();
  };

  return (
    <div>
      <AddBook postBook={postBook} />
      <BookList updateData={updateData} deleteData={deleteData} putData={putData}/>
    </div>
  );
};

export default Home;
