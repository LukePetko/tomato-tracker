import CircularProgress from '@/components/custom/CircularProgress';
import { Progress } from '@/components/ui/progress';
import secondsToTime from '@/lib/convertSeconds';
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [totalSeconds, setTotalSeconds] = useState(25 * 60);
  const [seconds, setSeconds] = useState(totalSeconds);

  useEffect(() => {
    if (seconds <= 0) setSeconds(25 * 60);
    const timer = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex gap-3 flex-col items-center">
        <p className="text-4xl font-bold">{secondsToTime(seconds)}</p>
        <Progress
          value={(seconds / totalSeconds) * 100}
          className="w-[60vw]"
          indicatorClassName="bg-red-700"
        />
      </div>
    </div>
  );
};

export default Timer;
