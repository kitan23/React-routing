// import React, { useEffect, useState } from "react";
import "./css/App.scss";
import Nav from "./components/Nav";
import About from "./components/About";
import Shop from "./components/Shop";
import Todo from "./components/Todo";
import BookList from "./components/Book";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ItemDetail from "./components/itemDetails";
import FetchData from "./components/FetchData";
import addNote from "./components/AddNote";
import ServerNote from "./components/AddNote";
function Home() {
  return (
    <div>
      <h1 style={{ "text-align": "center" }}>Home Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/todo" component={Todo} />
          {/* <Route path="/shop" exact component={Shop} /> */}
          {/* <Route path="/shop/:id" component={ItemDetail} /> */}
          <Route path="/book" component={BookList} />
          <Route path="/fetchdata" component={FetchData} />
          <Route path="/notes" component={ServerNote} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
