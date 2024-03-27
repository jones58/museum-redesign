import ImageTextCard from "./imagetextCard";

const Welcome = () => {
  return (
    <ImageTextCard
      text="The world's largest collection
      of working historic computers"
      imageSrc="images/welcome.jpg"
      imageAlt="The large systems gallery at the Museum"
      direction="flex-row"
    />
  );
};

export default Welcome;
