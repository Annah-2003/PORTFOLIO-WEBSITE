// App.js

import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
