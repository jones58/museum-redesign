import Carousel from "./imageCarousel";

const VisitorInfo = () => {
  return (
    <section className="py-4">
      <div className="flex flex-col sm:flex-row justify-between pb-2">
        <h1 className="text-2xl font-bold text-black">
          Around the Museum
        </h1>
        <a
          href="https://images.squarespace-cdn.com/content/v1/5bf28ad6b98a7888bf3cdce5/2be31949-27d9-4da5-992f-95d69c40edf9/TNMoC_Layout_Map+%283%29.jpg?format=2500w"
          target="_blank"
        >
          <h1 className="text-2xl font-bold text-black">Map</h1>
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
        linkList={[
          "https://www.tnmoc.org/colossus",
          "https://www.tnmoc.org/bh-10-bombe-description?rq=bombe",
          "https://www.tnmoc.org/bh-2-the-enigma-machine?rq=enigma",
          "https://www.tnmoc.org/ibm1130?rq=ibm1130",
          "https://www.tnmoc.org/npl-gallery?rq=internet",
        ]}
      />
    </section>
  );
};
export default VisitorInfo;
