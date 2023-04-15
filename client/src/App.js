import { useEffect, useState, createContext } from 'react';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Account from './components/Account';
import Order from './components/Order';
import CakeMenu from './components/CakeMenu';
import CakeBuilder from './components/CakeBuilder';
import Delivery from './components/Delivery';
import Contact from './components/Contact';
import './App.css';

export const UserContext = createContext();

function App() {


  const [user, setUser] = useState();
  const [buildCakeID, setBuildCakeID] = useState(1);

  const API = "https://my-json-server.typicode.com/cch0088/cakecity"; // for static site
  // const API = "http://localhost:5555"; // for dynamic site
  
  const login = "/users/2"; // for static site
  // const login = "/check_login"; // for dynamic site

  // Check log in status
  useEffect(() => {
    fetch(API + login).then(
      (resp) => {
        if (resp.ok) {
          resp.json().then(
            (user) => {
              setUser(user)
            }
          );
        }
      }
    )
  }, []);

  return (
    <div>
      <Switch>
        <UserContext.Provider value={user}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/cakecity">
            <Home />
          </Route>
          <Route path="/cakecity/login">
            <Header setUser={setUser}/>
            <NavBar/>
            <Account type={0} API={API} />
          </Route>
          <Route path="/cakecity/register">
            <Header setUser={setUser}/>
            <NavBar/>
            <Account type={1} API={API} />
          </Route>
          <Route path="/cakecity/forgot">
            <Header setUser={setUser}/>
            <NavBar/>
            <Account type={2} API={API} />
          </Route>
          <Route path="/cakecity/order">
            <Header setUser={setUser}/>
            <NavBar/>
            <Order API={API} />
          </Route>
          <Route path="/cakecity/delivery">
            <Header setUser={setUser}/>
            <NavBar/>
            <Delivery API={API} />
          </Route>
          <Route path="/cakecity/menu">
            <Header setUser={setUser}/>
            <NavBar/>
            <CakeMenu setBuildCakeID={setBuildCakeID} API={API} />
          </Route>
          <Route path="/cakecity/cakebuilder">
            <Header setUser={setUser}/>
            <NavBar/>
            <CakeBuilder buildCakeID={buildCakeID} API={API} />
          </Route>
          <Route path="/cakecity/contact">
            <Header setUser={setUser}/>
            <NavBar/>
            <Contact />
          </Route>
        </UserContext.Provider>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

