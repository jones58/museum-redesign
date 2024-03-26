import Carousel from "./imageCarousel";

const VisitorInfo = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-2xl font-bold py-5 text-black">
          Around the Museum
        </h1>
        <h1 className="text-2xl font-bold py-5 text-black">Map</h1>
      </div>
      <Carousel />
    </section>
  );
};
export default VisitorInfo;
