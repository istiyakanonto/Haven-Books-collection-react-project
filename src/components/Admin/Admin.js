import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQrcode, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import AddBook from "../AddBook/AddBook";
import ManageBook from "../ManageBook/ManageBook";
import "./Admin.css";
const Admin = () => {
  return (
    <Router>
      <div style={{ marginTop: "50px" }} className="  container">
        <header>Admin Panel</header>
        <ul>
          <li>
            <Link to="/manageBook">
              {" "}
              <FontAwesomeIcon icon={faQrcode} /> Manage Book
            </Link>
          </li>

          <li>
            <Link to="/addBook">
              {" "}
              <FontAwesomeIcon icon={faPlus} /> Add Book
            </Link>
          </li>
          <li>
            <Link to="/addBook">
              {" "}
              <FontAwesomeIcon icon={faEdit} /> Edit Book
            </Link>
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
