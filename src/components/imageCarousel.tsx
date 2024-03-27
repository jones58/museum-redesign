import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function Carousel({
  imageSrcList,
  imageAltList,
  titleList,
}: {
  imageSrcList: string[];
  imageAltList: string[];
  titleList: string[];
}) {
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 3,
      spacing: 15,
    },
  });

  return (
    <div ref={ref} className="keen-slider">
      {imageSrcList.map((imageSrc: string, index: number) => (
        <div key={index} className="keen-slider__slide number-slide1">
          <img
            src={imageSrcList[index]}
            alt={imageAltList[index]}
            className="h-[30vh] w-full object-cover rounded-lg"
          />
          <h1>{titleList[index]}</h1>
        </div>
      ))}
    </div>
  );
}
