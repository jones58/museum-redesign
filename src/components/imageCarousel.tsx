import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Carousel({
  imageSrcList,
  imageAltList,
  titleList,
  linkList,
}: {
  imageSrcList: string[];
  imageAltList: string[];
  titleList: string[];
  linkList: string[];
}) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  const handlePrevClick = () => {
    if (slider.current) {
      slider.current.prev();
    }
  };

  const handleNextClick = () => {
    if (slider.current) {
      slider.current.next();
    }
  };

  return (
    <div className="pb-2">
      <div ref={sliderRef} className="keen-slider">
        {imageSrcList.map((imageSrc: string, index: number) => (
          <a href={linkList[index]} target="_blank">
            <div
              key={index}
              className="keen-slider__slide number-slide1"
            >
              <div className="h-[10vh] sm:h-[30vh] w-full rounded-lg overflow-clip">
                <img
                  src={imageSrcList[index]}
                  alt={imageAltList[index]}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 hover:overflow-clip hover:rounded-lg"
                />
              </div>
              <h1 className="pt-2 font-bold text-xl sm:text-2xl text-center sm:text-left">
                {titleList[index]}
              </h1>
            </div>
          </a>
        ))}
      </div>
      <div className="text-right text-4xl drop-shadow-lg flex flex-row justify-between w-full pt-1">
        <span
          className="icon-[fluent--arrow-left-16-filled]"
          onClick={handlePrevClick}
        ></span>
        <span
          className="icon-[fluent--arrow-right-16-filled]"
          onClick={handleNextClick}
        ></span>
      </div>
    </div>
  );
}
