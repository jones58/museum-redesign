const ImageTextCard = ({
  text,
  imageSrc,
  imageAlt,
  direction,
  link,
}: {
  text: string;
  imageSrc: string;
  imageAlt: string;
  direction: string;
  link: string;
}) => {
  return (
    <section
      className={`${direction} flex justify-between sm:h-[33vh] rounded-lg overflow-hidden`}
    >
      <div className="bg-museumGreen text-black text-xl sm:text-2xl sm:h-[33vh] w-1/2">
        <a href={link} target="_blank">
          <h1 className="p-5 sm:p-10 font-sans">{text}</h1>
        </a>
      </div>
      <div className="bg-pink-500 text-black w-1/2 h-auto text-2xl font-mono">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ImageTextCard;
