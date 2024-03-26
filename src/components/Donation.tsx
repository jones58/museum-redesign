import ImageTextCard from "./imagetextCard";

const Donation = () => {
  return (
    <ImageTextCard
      text="Donate to the Museum"
      imageSrc="images/colossus.jpg"
      imageAlt="An image of a large code-breaking computer called Colossus."
      direction="flex-row-reverse"
    />
  );
};

export default Donation;
