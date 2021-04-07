import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddBook = () => {
    const [imageURL, setImageURL]=useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        
       
        const bookData={
            name:data.name,
            authorName:data.author,
            price:data.price,
            imageURL:imageURL
        };
       
  const url= `http://localhost:5050/addBook`
  console.log(bookData)
  fetch(url,{
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(bookData)
    
        })
        .then(res=>console.log('server site response',res))
    
    };
  const handleImageUpload= book=>{
      console.log(book.target.files[0])
      const imageData=new FormData()
      imageData.set('key', 'c7df16fa4ce3b8057005b223c2e55845')
      imageData.append('image', book.target.files[0])

      axios.post('https://api.imgbb.com/1/upload', imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
    return (
        
<div style={{textAlign: 'center'}} className="container body ">
    <div className="box">
      
    <h1 className="icon">Add Your Desire Books</h1>
        <div className="content">

        <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{borderBottom: '1px solid gray',paddingBottom:'25px',marginRight:"150px"}} className="row">
          <div className="col-md-9">
          <p>Book Name</p>
          <input {...register("name" , { required: true })} placeholder="Book Name"/>
          </div>
          <div className="col-md-3">
          <p>Author Name</p>
          <input {...register("author" , { required: true })} placeholder="Author Name"/>
          </div>
          </div>
         
          
          <div style={{marginTop:'15px',marginRight:"150px"}} className="row">
          <div className="col-md-9">
          <p>Add Price</p>
          <input {...register("price", { required: true })}  placeholder="Price" />
          </div>
          <div className="col-md-3">
          <p>Upload Book Photo</p>
          <input {...register("exampleRequired")} type="file" onChange={handleImageUpload} />
     
          </div>
          </div>

          <div className='row'>
              <div style={{textAlign: 'center',marginLeft:'70px',marginTop:'40px'}} className="col-md-11">
              <input type="submit" />
              </div>
          </div>
     
    </form>




        </div>
    </div>

</div>



    );
};

export default AddBook;