import React from 'react';

const BookCollection = ({bookCollection})=>{
    console.log(bookCollection.pic)
    return (
        <div className="col-md-3">
            <img style={{height: '300px'}} src={require(`../../books/${bookCollection.pic}` )} alt=""/>
            <h3>{bookCollection.name} </h3>
            
        </div>
    );
    
}




export default BookCollection;