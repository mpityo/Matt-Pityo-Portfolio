import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';

function App() {
  const categories = ['About me', 'Projects', 'Contact', 'Resume'];
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav 
        categories={categories}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      {currentCategory === 'About me' && <About />}
      {currentCategory === 'Projects' && <></>}
      {currentCategory === 'Contact' && <></>}
      {currentCategory === 'Resume' && <></>}
    </div>
  );
}

export default App;
