import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import DogImages from "./components/searchBar";
import {Favorites} from "./components/favorite";
import { FavoriteProvider } from "./components/favoritecontext";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <h1 className="title">Search Dog Breed</h1>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/" className="navbar-button">
                Home
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/favorites" className="navbar-button">
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
        <FavoriteProvider>
          <Routes>
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/" element={<DogImages />} />
          </Routes>
        </FavoriteProvider>
      </div>
    </Router>
  );
}

export default App;