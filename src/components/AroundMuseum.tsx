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
      <Carousel
        imageSrcList={[
          "images/colossus.jpg",
          "images/Bombe.jpg",
          "images/Enigma.jpg",
          "images/ibm1130.jpg",
        ]}
        imageAltList={["Colossus", "Bombe", "Enigma", "IBM1130"]}
        titleList={["Colossus", "Bombe", "Enigma", "IBM1130"]}
      />
    </section>
  );
};
export default VisitorInfo;
