import React, { useEffect, useState } from "react";
import "./App.css";
import CatsList from "./components/Cats/CatsList";
import First from "./components/FirstComponent/First";
import Second from "./components/SecondComponent/Second";

function App() {
  return (
    <>
      <h1>Hello Demo App</h1>
      <First />
      <Second />
      <CatsList/>
    </>
  );
}

export default App;
