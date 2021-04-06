import React, { useEffect, useState } from 'react';
import BookCollection from '../BookCollection/BookCollection';
import './Home.css'

const Home = () => {

  const [bookCollection,setBookCollection]=useState([])
  useEffect(()=>{
      fetch('http://localhost:5050/bookCollection')
      .then(res=>res.json())
      .then(data=>setBookCollection(data))
  },[])
      
      
    return (
        <div className="container book-style">
 <div  className="row">
              {
              bookCollection.map(book => <BookCollection book={book}></BookCollection>)
              }
            </div>
        </div>
           
          )

};

export default Home;