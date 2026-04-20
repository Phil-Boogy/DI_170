import { useState } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from './ErrorBoundary';
import PostList from './PostList';
import Example1 from '../Components/Example1';
import Example2 from '../Components/Example2';


async function fetchData() {
  try {
    const response = await fetch("https://webhook.site/627cb887-66e8-4984-9da1-6a2cc74f75de", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      })
    });

    const data = await response.text();

    console.log(data);

  } catch (error) {
    console.log('error fetchinbg data: ', error);
  }
};

const HomeScreen = () => (
  <h1>Home</h1>
);

const ProfileScreen = () => (
  <h2>Profile</h2>
);

const ShopScreen = () => {
  throw new Error("An error has occurred");
};


function App() {
  return (
    <BrowserRouter>
      <Navbar bg="light" expand="lg">
        <Nav>
          <Nav.Link as={NavLink} to="/">Home</Nav.Link>
          <Nav.Link as={NavLink} to="/profile">Profile</Nav.Link>
          <Nav.Link as={NavLink} to="/shop">Shop</Nav.Link>
        </Nav>
      </Navbar>



      <Routes>
        <Route exact path="/" element={<ErrorBoundary><HomeScreen /></ErrorBoundary>} />
        <Route path="/profile" element={<ErrorBoundary>
          <ProfileScreen /></ErrorBoundary>} />
        <Route path="/shop" element={<ErrorBoundary><ShopScreen /></ErrorBoundary>} />
      </Routes>
      <PostList />
      <Example1 />
      <Example2 />

      <button onClick={fetchData}>Send Data</button>
    </BrowserRouter>

  );
}

export default App
