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
        />
      </div>
    </section>
  );
}
