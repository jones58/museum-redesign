import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex items-center justify-center sm:justify-end sm:w-[20vw] h-[10vh] sm:h-[22vh]">
      <div className="bg-museumGreen p-4 border-black border-2 rounded-lg">
        <div className="font-mono bg-black text-museumGreen rounded-lg px-4">
          <div className="flex flex-row justify-between">
            <p className="pl-4 pt-2">24h</p>
            <h1 className="text-right uppercase pr-1 pt-1 text-2xl">
              {time.toLocaleDateString("en-GB", {
                weekday: "short",
                day: "2-digit",
              })}
            </h1>
          </div>
          <p className="text-6xl">
            {time.toLocaleTimeString("en-GB", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Clock;
