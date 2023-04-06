import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import CakeMenu from './components/CakeMenu';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  const login = "/check_login";

  // Check log in status
  useEffect(() => {
    fetch(login).then(
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
      <Header />
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cakecity/order">
          <Login />
        </Route>
        <Route path="/cakecity/delivery">
          <Home />
        </Route>
        <Route path="/cakecity/menu">
          <CakeMenu />
        </Route>
        <Route path="/cakecity/contact">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

