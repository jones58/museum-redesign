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
            "images/schools.jpg",
            "images/volunteers.jpg",
            "images/corporate.jpg",
            "images/accessibility.jpg",
          ]}
          imageAltList={[
            "Schools",
            "Volunteers",
            "Corporate",
            "Accessibility",
          ]}
          titleList={[
            "Schools",
            "Volunteers",
            "Corporate",
            "Accessibility",
          ]}
        />
      </div>
    </section>
  );
}
