import moment from "moment";
import React, {  useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
 import { UserContext } from '../../App';
const Checkout = () => {
  const [loggedInUser,setLoggedInUser]=useContext(UserContext)
  const { _id } = useParams();

  const[book, setBook]=useState([])
  useEffect(() => {
    const url = `http://localhost:5050/book/${_id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>setBook(data[0]))
  },[]);
const {name,authorName,price}=book
const time=moment().format('MMMM Do YYYY, h:mm:ss a');
const userInfo={
  userName:loggedInUser.name,
  email:loggedInUser.email,
  bookName:name,
  authorName: authorName,
  price:price,
  dateTime:time
}
// const userInfo={name, authorName,price}
// setUserInformation(userInfo)
const handleUserInfo=()=>{
  const url= `http://localhost:5050/addOrders`
  
  fetch(url,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userInfo)
    
        })
        .then(res=>console.log('server site response',res))
    
    };

  return (
    <div className="container">
     <h2 style={{fontWeight:'700',marginBottom:'20px'}}>Checkout</h2>
     <div className="row">
       <div className="col-md-10 col-sm-12">
       <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Book Name</th>
      <th>Author Name</th>
      <th>Quantity</th>
      <th>Cost</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>{name}</td>
      <td>{authorName}</td>
      <td>{'1'}</td>
      <td>{price} $</td>
    </tr>
   
  </tbody>
</Table>
       </div>
     </div>
     
<Link to={"/orders"}><button onClick={handleUserInfo} style={{backgroundColor:'cyan'}}>Checkout</button></Link>
    </div>
  );
};

export default Checkout;


