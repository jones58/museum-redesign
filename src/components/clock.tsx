import React, { useEffect, useState } from "react";
import MondaineClock from "mondaine-clock-react";

function MyClock() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 10);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <p>Current time:</p>
      <MondaineClock />
    </div>
  );
}

export default MyClock;

MyClock.hydrate = true;
