import ImageTextCard from "./imagetextCard";

const Donation = () => {
  return (
    <ImageTextCard
      text="Donate to the Museum"
      imageSrc="images/donate.jpg"
      imageAlt="add alt text here"
      direction="flex-row-reverse"
      link="https://www.tnmoc.org/make-a-donation"
    />
  );
};

export default Donation;
