import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt,faEdit } from '@fortawesome/free-solid-svg-icons'

const ManageBook = () => {
    const[manageBook,setManageBook]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5050/bookCollection')
        .then(res=>res.json())
        .then(data=>setManageBook(data))
    },)

 const handleDelete=id=>{
     fetch(`http://localhost:5050/itemDelete/${id}`,{
         method: 'DELETE',
     })
     .then(res=>res.json())
     .then(result=>{
         console.log(result)
     })
 }
    return (
        <div>
            {
manageBook.map(book=><Table className="container" striped bordered hover variant="dark">
<thead>
  <tr>
   
    <th>Book Name</th>
    <th>Author Name</th>
    <th>Price</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  <tr>
    
    <td>{book.name}</td>
    <td>{book.authorName}</td>
    <td>{book.price} $</td>
    <td> 
    <button style={{backgroundColor:'red'}}><FontAwesomeIcon icon={faTrashAlt} onClick={()=>handleDelete(book._id)} /></button>

<button style={{backgroundColor:'cyan'}}>  <FontAwesomeIcon icon={ faEdit} /></button>
    
   
    </td>
  </tr>
  
</tbody>
</Table>)
            }
            
        </div>
    );
};

export default ManageBook;