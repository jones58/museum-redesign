import Clock from "./Clock";

const VisitorInfo = () => {
  return (
    <section className="py-8 text-black flex flex-col sm:flex-row justify-between">
      <h1 className="text-2xl font-bold py-5">Your visit</h1>
      <div className="py-8">
        <p className="text-lg font-mono">The museum is open today</p>
        <p className="text-lg font-mono">
          The museum is not open tomorrow
        </p>
        <p className="text-lg font-mono">
          The museum is open on Friday
        </p>
        <p className="text-lg font-mono">
          The museum is open on Saturday
        </p>
      </div>
      <Clock />
    </section>
  );
};

export default VisitorInfo;
