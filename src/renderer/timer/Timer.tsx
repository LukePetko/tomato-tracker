import { Progress } from '@/components/ui/progress';
import secondsToTime from '@/lib/convertSeconds';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(0.5 * 60);
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      setSeconds(totalSeconds === 0.5 * 60 ? 0.25 * 60 : 0.5 * 60);
      setTotalSeconds(totalSeconds === 0.5 * 60 ? 0.25 * 60 : 0.5 * 60);
    }

    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, totalSeconds]);

  return (
    <div className="flex flex-col items-center justify-between w-full h-screen py-5">
      <h1 className="text-5xl font-bold flex justify-center gap-2">
        <span className="font-japanese text-red-700">トマト</span>
        <span className="font-heading"> Timer</span>
      </h1>
      <div className="flex gap-6 flex-col items-center">
        <p className="text-4xl font-bold">{secondsToTime(seconds)}</p>
        <Progress
          value={(seconds / totalSeconds) * 100}
          className="w-[60vw]"
          indicatorClassName="bg-red-700"
        />
      </div>
      <div />
    </div>
  );
};

export default Timer;
