import MyClock from "./clock";

const VisitorInfo = () => {
  return (
    <section>
      <div>
        <h1 className="text-2xl font-bold py-5">Your visit</h1>
        <p className="text-lg font-mono">The museum is open today</p>
        <p className="text-lg font-mono">The museum is open today</p>
        <p className="text-lg font-mono">The museum is open today</p>
      </div>
      <MyClock />
    </section>
  );
};

export default VisitorInfo;
