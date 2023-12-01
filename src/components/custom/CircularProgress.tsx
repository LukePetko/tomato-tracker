import React from 'react';

type CircularProgressProps = {
  percentage: number;
  text: string;
};

const CircularProgress = ({ percentage, text }: CircularProgressProps) => {
  return (
    <div className="relative w-52 h-52">
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
          strokeDashoffset={`calc(400 - (1800 / 7 * ${percentage}) / 100)`}
        />

        <text
          x="50"
          y="50"
          fontFamily="Verdana"
          fontSize="12"
          textAnchor="middle"
          alignmentBaseline="middle"
        >
          {text}
        </text>
      </svg>
    </div>
  );
};

export default CircularProgress;
