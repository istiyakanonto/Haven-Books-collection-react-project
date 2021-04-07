import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";


const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
   const [ordersInformation, setOrdersInformation]=useState([])
   useEffect(()=>{
       fetch ('https://dry-lowlands-46655.herokuapp.com/orders?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>setOrdersInformation(data))
   },[])
  let total=0;
  for (let index = 0; index < ordersInformation.length; index++) {
       total = total + parseInt(ordersInformation[index].price);
      
  }

    return (
        <div className="container">
            <h2 style={{marginTop:'20px',marginBottom:'10px',color:'#420420'}}>Greeting..{loggedInUser.name}</h2>
            <p>Your Total Buying Books {ordersInformation.length}</p>
            {
                ordersInformation.map(order=> <Table style={{borderBottom: '1px solid red'}} className="container" striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>Customer Name</th>
                    <th>Email</th>
                    <th>Selected Book</th>
                    <th>Author Name</th>
                    <th>Price</th>
                    <th>Booking Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                  <td>{order.userName}</td>
                  <td>{order.email}</td>
                  <td>{order.bookName}</td>
                    <td>{order.authorName}</td>
                    <td>{order.price}</td>
                    <td>{order.dateTime}</td>
                  </tr>
                  
                  
                </tbody>
              </Table>)
              
            }
            <h1 style={{textAlign: 'center',color: '#420420'}}>Your Total Cost {total} </h1>

        </div>
    );
};

export default Orders;