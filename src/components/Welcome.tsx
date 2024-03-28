import ImageTextCard from "./imagetextCard";

const Welcome = () => {
  return (
    <ImageTextCard
      text="Visit the world's largest collection
      of working historic computers."
      imageSrc="images/welcome.jpg"
      imageAlt="The large systems gallery at the Museum"
      direction="flex-row"
      link="https://www.tnmoc.org/visit"
    />
  );
};

export default Welcome;
