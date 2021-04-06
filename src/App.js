import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import { createContext, useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Checkout from "./components/Checkout/Checkout";

// export const InformationContext=createContext();
export const UserContext=createContext();

function App() {

  const [loggedInUser, setLoggedInUser]=useState({});
  return (
    <div className="App">
     
     
    
 <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <h4 style={{color:''}}>Email ID: {loggedInUser.email}</h4>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

<PrivateRoute path="/checkout/:_id">

<Checkout></Checkout>
</PrivateRoute>

        
        <PrivateRoute path="/orders">
          <Orders></Orders>
        </PrivateRoute>

        <PrivateRoute path="/admin">
          <Admin></Admin>
        </PrivateRoute>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
    <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
    </div>
   
  );
}

export default App;
