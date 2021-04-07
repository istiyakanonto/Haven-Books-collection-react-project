import React, { useEffect, useState } from 'react';
import BookCollection from '../BookCollection/BookCollection';
import './Home.css'

const Home = () => {
const [loading, setLoading]=useState(true)
  const [bookCollection,setBookCollection]=useState([])
  useEffect(()=>{
      fetch('http://localhost:5050/bookCollection')
      .then(res=>res.json())
      .then(data=>{setBookCollection(data)
      setLoading(false);
      })
  },[])
      
      
    return (
        <div className="container book-style">
         {
           loading && <div class="text-center">
           <div class="spinner-border" role="status">
             <span class="visually-hidden"></span>
           </div>
         </div>
         }
 <div  className="row">
              {
              bookCollection.map(book => <BookCollection book={book}></BookCollection>)
              }
            </div>
        </div>
           
          )

};

export default Home;