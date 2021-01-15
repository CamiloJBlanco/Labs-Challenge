import React, { useState } from 'react';
import './App.css';
import Catalogo from './components/Catalogo';
import SearchAppBar from './components/SearchBar';

function App() {
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <header >
        <SearchAppBar
          setProducts={setProducts}
        />
      </header>
      <main className="main">
        <Catalogo 
        products={products} 
        />
      </main>
      <footer className="footer">
        All rights reserved
      </footer>
    </div>
  );
}

export default App;