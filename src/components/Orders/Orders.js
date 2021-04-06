import { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserContext } from "../../App";


const Orders = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext)
   const [ordersInformation, setOrdersInformation]=useState([])
   useEffect(()=>{
       fetch ('http://localhost:5050/orders?email='+loggedInUser.email)
       .then(res=>res.json())
       .then(data=>setOrdersInformation(data))
   },[])
  
    return (
        <div>
            {
                ordersInformation.map(order=> <Table className="container" striped bordered hover variant="dark">
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
        </div>
    );
};

export default Orders;