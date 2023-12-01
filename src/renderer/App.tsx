import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import './App.css';
import { useEffect, useState } from 'react';
import Timer from './timer/Timer';

function Hello() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <h1 className="bg-gray-500 text-center text-white">
        Hi Tailwind has been integrated.
        <Button onClick={() => setCount(0)}>Click me</Button>
      </h1>
      <div className="relative w-40 h-40">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            className="text-gray-200 stroke-current"
            strokeWidth="10"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
          />
          <circle
            className="text-indigo-500  progress-ring__circle stroke-current"
            strokeWidth="10"
            strokeLinecap="round"
            cx="50"
            cy="50"
            r="40"
            fill="transparent"
            strokeDashoffset={`calc(400 - (1800 / 7 * ${count}) / 100)`}
          />

          <text
            x="50"
            y="50"
            fontFamily="Verdana"
            fontSize="12"
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            70%
          </text>
        </svg>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timer />} />
      </Routes>
    </Router>
  );
}
