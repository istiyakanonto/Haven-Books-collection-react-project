import React from 'react';
import BookCollection from '../BookCollection/BookCollection';


const Home = () => {

    const books = [
       {
            name: "Book",
            pic: "babySit.png",
          },
          {
            name: "Book",
            pic: "babySit.png",
          },
          {
            name: "Book",
            pic: "babySit.png",
          },
          {
            name: "Book",
            pic: "babySit.png",
          },
          {
            name: "Book",
            pic: "babySit.png",
          },
          {
            name: "Book",
            pic: "babySit.png",
          },
          {
            name: "Book",
            pic: "babySit.png",
          }
]
      
    return (
        
            <div className="row">
              {
              books.map(bookCollection => <BookCollection bookCollection={bookCollection}></BookCollection>)
              }
            </div>
          )

};

export default Home;