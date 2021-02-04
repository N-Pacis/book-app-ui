import React from "react"
import './App.css';
import Sidebar from "./components/Sidebar"
import Header from "./components/header"
import AppBody from "./components/AppBody"

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar/>
        <AppBody />
    </div>
  );
}

export default App;
