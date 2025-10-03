import React, { useState, useEffect } from "react";
import Converter from "./components/converter";

function App() {
  return (
    <div className="app-container">
      <h1>currency converter</h1>
      <Converter />
<footer>
  <p>
    cs50 final project &middot; exchange rates by{' '}
    <a href="https://www.frankfurter.app/" target="_blank" rel="noopener noreferrer">frankfurter.app</a>
  </p>
</footer>

    </div>
  );
}

export default App;
