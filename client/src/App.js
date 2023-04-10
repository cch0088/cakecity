import { useEffect, useState } from 'react';
import { Route, Switch } from "react-router-dom";

import NavBar from './components/NavBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Order from './components/Order';
import CakeMenu from './components/CakeMenu';
import Delivery from './components/Delivery';
import Contact from './components/Contact';

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  
  // const login = "/check_login";

  // // Check log in status
  // useEffect(() => {
  //   fetch(login).then(
  //     (resp) => {
  //       if (resp.ok) {
  //         resp.json().then(
  //           (user) => {
  //             setUser(user)
  //           }
  //         );
  //       }
  //     }
  //   )
  // }, []);

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cakecity">
          <Home />
        </Route>
        <Route path="/cakecity/order">
          <Header />
          <NavBar/>
          <Order />
        </Route>
        <Route path="/cakecity/delivery">
          <Header />
          <NavBar/>
          <Delivery />
        </Route>
        <Route path="/cakecity/menu">
          <Header />
          <NavBar/>
          <CakeMenu />
        </Route>
        <Route path="/cakecity/contact">
          <Header />
          <NavBar/>
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

