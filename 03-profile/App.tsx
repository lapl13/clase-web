import React from 'react';
import { Header } from './components/Header';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl mx-auto p-5 bg-white shadow-lg rounded-lg">
        <Header />
        <Education />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};


export default App;
