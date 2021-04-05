import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddBook from '../AddBook/AddBook';
import ManageBook from '../ManageBook/ManageBook'
const Admin = () => {
    return (
        <Router>
        <div>
          <ul>
           
            <li>
              <Link to="/addBook">Add Book</Link>
            </li>
            <li>
              <Link to="/manageBook">Manage Book</Link>
            </li>
          </ul>
  
          <hr />
          <Switch>
            
            <Route path="/addBook">
              <AddBook></AddBook>
            </Route>
            <Route path="/manageBook">
              <ManageBook></ManageBook>
            </Route>
          </Switch>
        </div>
      </Router>
    );
};

export default Admin;