import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/orders">
          <Orders></Orders>
        </Route>

        <Route path="/admin">
          <Admin></Admin>
        </Route>

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
  );
}

export default App;
