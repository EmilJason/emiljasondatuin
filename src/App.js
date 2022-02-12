import React from 'react';
import Introduction from './components/Introduction';
import Navbar from './components/Navbar'
import Projects from './components/Projects';
import Skills from './components/Skills';

export default function App() {
  return (
    <>
    <Navbar />
    <Introduction />
    <Skills />
    <Projects />
    </>
  );
}
