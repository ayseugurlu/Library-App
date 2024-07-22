import React, { useEffect, useState } from 'react'
import axios from "axios"
import AddBook from '../components/AddBook'
import BookList from '../components/BookList'

const Home = () => {

    const [updateData,setUpdateData]=useState([])

    const url="https://clarus-library-api.vercel.app/books"

    const getData = async()=>{

        const res = await axios.get(url)

        setUpdateData(res.data)

        
    }

    useEffect(()=>{
        getData()

    },[])

    const postBook=async()=>{
        await axios.post()
        getData()
    }


  return (
    <div>
        <AddBook postBook={postBook}/>
        <BookList updateData={updateData}/>
    </div>
  )
}

export default Home