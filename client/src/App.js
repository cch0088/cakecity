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
  // change state to true for hosting with plain json file
  // eslint-disable-next-line
  const [staticSite, setStaticSite] = useState(false);

  const [user, setUser] = useState();
  const [buildCakeID, setBuildCakeID] = useState(1);

  let API = "http://localhost:5555/cakecity/api";
  let login = "/login";

  if (staticSite) {
    API = "https://my-json-server.typicode.com/cch0088/cakecity";
    login = "/users/2";
  }
  
  // Check log in status
  let API_LOGIN = API + login;

  useEffect(() => {
    const API_OPT = {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    };
    fetch(API_LOGIN, API_OPT).then(
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
  }, [API_LOGIN]);

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
            <Header setUser={setUser} API={API} />
            <NavBar />
            <Account type={0} API={API} setUser={setUser} />
          </Route>
          <Route path="/cakecity/register">
            <Header setUser={setUser} API={API} />
            <NavBar />
            <Account type={1} API={API} />
          </Route>
          <Route path="/cakecity/forgot">
            <Header setUser={setUser} API={API}/>
            <NavBar />
            <Account type={2} API={API} />
          </Route>
          <Route path="/cakecity/order">
            <Header setUser={setUser} API={API} />
            <NavBar />
            <Order />
          </Route>
          <Route path="/cakecity/delivery">
            <Header setUser={setUser} API={API} />
            <NavBar/>
            <Delivery API={API} staticSite={staticSite} />
          </Route>
          <Route path="/cakecity/menu">
            <Header setUser={setUser} API={API} />
            <NavBar />
            <CakeMenu setBuildCakeID={setBuildCakeID} API={API} />
          </Route>
          <Route path="/cakecity/cakebuilder">
            <Header setUser={setUser} API={API} />
            <NavBar />
            <CakeBuilder buildCakeID={buildCakeID} API={API} />
          </Route>
          <Route path="/cakecity/contact">
            <Header setUser={setUser} API={API} />
            <NavBar />
            <Contact />
          </Route>
        </UserContext.Provider>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

