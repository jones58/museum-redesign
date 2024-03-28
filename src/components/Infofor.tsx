import Carousel from "./imageCarousel";

export default function InfoFor() {
  return (
    <section className="">
      <div>
        <h1 className="text-2xl font-bold py-5 text-black">
          Information For
        </h1>

        <Carousel
          imageSrcList={[
            "images/accessibility.jpg",
            "images/schools.jpg",
            "images/volunteers.jpg",
            "images/corporate.jpg",
            ,
          ]}
          imageAltList={[
            "Accessibility",
            "Schools",
            "Volunteers",
            "Corporate",
          ]}
          titleList={[
            "Accessibility",
            "Schools",
            "Volunteers",
            "Corporate",
          ]}
          linkList={[
            "https://images.squarespace-cdn.com/content/v1/5bf28ad6b98a7888bf3cdce5/2be31949-27d9-4da5-992f-95d69c40edf9/TNMoC_Layout_Map+%283%29.jpg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/5bf28ad6b98a7888bf3cdce5/2be31949-27d9-4da5-992f-95d69c40edf9/TNMoC_Layout_Map+%283%29.jpg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/5bf28ad6b98a7888bf3cdce5/2be31949-27d9-4da5-992f-95d69c40edf9/TNMoC_Layout_Map+%283%29.jpg?format=2500w",
            "https://images.squarespace-cdn.com/content/v1/5bf28ad6b98a7888bf3cdce5/2be31949-27d9-4da5-992f-95d69c40edf9/TNMoC_Layout_Map+%283%29.jpg?format=2500w",
          ]}
        />
      </div>
    </section>
  );
}
