import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import AddUser from "./Pages/AddUser";
import EditUser from "./Pages/EditUser";
import User from "./Pages/User";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/contact" component={Contact}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/user/add" component={AddUser}></Route>
            <Route exact path="/user/edit/:id" component={EditUser}></Route>
            <Route exact path="/user/:id" component={User}></Route>
            <Route component={PageNotFound}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
