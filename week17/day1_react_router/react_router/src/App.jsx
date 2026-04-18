import React from 'react';
import './App.css'
import { Routes, Route, Link, useParams, useLocation } from "react-router-dom";

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <img
      src="https://cdn.pixabay.com/photo/2018/05/18/15/30/webdesign-3411373_1280.jpg"
      alt="Homepage"
      width="40%" />
  </div>
);

const About = ({ hobby }) => (
  <div>
    <hr></hr>
    <p>I love {hobby}</p>
    <img
      src="https://cdn.pixabay.com/photo/2014/04/03/10/26/turntable-310450_1280.png"
      alt="About"
      width="20%" />
  </div>
);

const MyProjects = () => (
  <div>
    <h1>Here is a list of projects</h1>
    <img
      src=" https://cdn.pixabay.com/photo/2017/06/10/07/18/list-2389219_1280.png"
      alt="About"
      width="30%" />
  </div>
);

const Project = () => {
  let { name } = useParams();
  let params = useParams();
  let location = useLocation();
  console.log("name", name)
  return (
    <div>
      <hr></hr>
      <h3>The Project name is : <span style={{ color: "red" }}>{name}</span></h3>
      <h4>
        What's in params? <pre>{JSON.stringify(params, null, 4)}</pre>
      </h4>
      <h4>
        What's in location? <pre>{JSON.stringify(location, null, 4)}</pre>
      </h4>
    </div>
  );
};

const App = () => (
  <div>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      <li>
        <Link to="/projects">My Projects</Link>
      </li>
      <li>
        <Link to="/project/javascript">My Javascript Project</Link>
      </li>
      <li>
        <Link to="/project/React">My React Project</Link>
      </li>
    </ul>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About hobby="music" />} />
      <Route path="/projects" element={<MyProjects />} />
      <Route path="/project/:name" element={<Project />} />
    </Routes>
  </div>
);

export default App
