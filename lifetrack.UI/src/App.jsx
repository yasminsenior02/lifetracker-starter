import * as React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Button from "@mui/material/Button";
import NavBar from "./components/Navbar";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import Signup from "./components/Signup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <main>
          <Routes>
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </BrowserRouter>
      <NavBar></NavBar>
      <Hero></Hero>
      {/* <Container
        id="container"
        maxWidth={false}
        sx={{ backgroundColor: "#2c4147", flexGrow: 1 }}
      >
        {" "}
        my Container
      </Container> */}
    </>
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Button variant="contained">Contained</Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */
  );
}

export default App;
