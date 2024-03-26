import Carousel from "./imageCarousel";

const VisitorInfo = () => {
  return (
    <section className="py-8">
      <div>
        <h1 className="text-2xl font-bold py-5 text-black">
          Around the Museum
        </h1>
        <Carousel />
        <div className="carousel carousel-center space-x-4 rounded-box w-full h-auto">
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg"
              className="rounded-box"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg"
              className="rounded-box"
            />
          </div>
          cC
        </div>
      </div>
    </section>
  );
};
export default VisitorInfo;
