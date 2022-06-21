import React from "react";
import "./App.css"

import data from "./data.js"


/* components */
import Header from "./components/Header";
import Card from "./components/Card";
/* components */

export default function App() {

  

  return (
    <div className="container">
      <Header />
      <div className="cards">
        {data.map((item) => {
          return <Card key={item.id} {...item} />
        })}
      </div>
    </div>
  )
}