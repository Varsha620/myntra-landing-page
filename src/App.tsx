import React from 'react';
import Header from './components/Header';
import Instructions from './components/Instructions';
import TaskShowcase from './components/TaskShowcase';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Instructions />
      <TaskShowcase />
      <Footer />
    </div>
  );
}

export default App;