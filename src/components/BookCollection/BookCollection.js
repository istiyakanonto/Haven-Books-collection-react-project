import React from 'react';
import './BookCollection.css'
const BookCollection = ({book})=>{
    console.log(book.pic)
    return (
        <div className="col-md-4">
           
           <div  style={{marginBottom:'30px'}} class="card">
  <div class="card-image">
  <img style={{height: '300px', paddingTop: '20px'}} src={book.imageURL} alt="Error"/>
  </div>
  <div class="card-text">
    <span class="date"> Last Release: 4 days ago</span>
    <h2> {book.name} </h2>
    {/* <p>Lorem ipsum dolor sit amet consectetur, Ducimus, repudiandae temporibus omnis illum maxime quod deserunt eligendi dolor</p> */}
  </div>
  <div class="card-stats">
    <div class="stat">
      <div class="value">Author<sup>name</sup></div>
      <div class="type">{book.authorName}</div>
    </div>
    <div class="stat border">
      <div class="value">Wanna Buy??</div>
      <div class="type">
          <button style={{backgroundColor:'cyan'}}>Buy Now</button></div>
    </div>
    <div class="stat">
      <div class="value">Discount Price</div>
      <div class="type">{book.price}$</div>
    </div>
  </div>
</div>
            
        </div>
    );
    
}




export default BookCollection;