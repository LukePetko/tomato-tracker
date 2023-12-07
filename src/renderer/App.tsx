import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import './App.css';
import { useEffect, useState } from 'react';
import Timer from './timer/Timer';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </Router>
  );
}
