const ImageTextCard = ({
  text,
  imageSrc,
  imageAlt,
  direction,
}: {
  text: string;
  imageSrc: string;
  imageAlt: string;
  direction: string;
}) => {
  return (
    <section className={`${direction} flex sm:h-[33vh]`}>
      <div className="bg-museumGreen text-black w-1/2 text-xl sm:text-2xl font-mono sm:h-[33vh]">
        <h1 className="p-5 sm:p-10">{text}</h1>
      </div>
      <div className="bg-pink-500 text-black w-1/2 text-2xl font-mono sm:h-[33vh]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="overflow-clip w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ImageTextCard;