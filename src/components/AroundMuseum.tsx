import Carousel from "./imageCarousel";

const VisitorInfo = () => {
  return (
    <section className="py-8">
      <div className="flex flex-col sm:flex-row justify-between">
        <h1 className="text-2xl font-bold py-5 text-black">
          Around the Museum
        </h1>
        <a
          href="https://tnmocblobcontainer.z33.web.core.windows.net/assets/generated_3-2dc6807c.png"
          target="_blank"
        >
          <h1 className="text-2xl font-bold py-5 text-black">Map</h1>
        </a>
      </div>
      <Carousel
        imageSrcList={[
          "images/colossus.jpg",
          "images/Bombe.jpg",
          "images/Enigma.jpg",
          "images/ibm1130.jpg",
          "images/internet.jpg",
        ]}
        imageAltList={[
          "Colossus",
          "Bombe",
          "Enigma",
          "IBM1130",
          "Internet",
        ]}
        titleList={[
          "Colossus",
          "Bombe",
          "Enigma",
          "IBM1130",
          "Internet",
        ]}
      />
    </section>
  );
};
export default VisitorInfo;
