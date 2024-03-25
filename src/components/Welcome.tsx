const Welcome = () => {
  return (
    <section className="flex-row flex h-[33vh]">
      <div className="bg-museumGreen text-black w-1/2 text-2xl font-mono h-[33vh]">
        <h1 className="p-8">
          Welcome to the National Museum of Computing at Bletchley Park
        </h1>
      </div>
      <div className="bg-pink-500 text-black w-1/2 text-2xl font-mono h-[33vh]">
        <img
          src="images/colossus.jpg"
          alt="An image of a large code-breaking computer called Colossus"
          className="overflow-clip w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Welcome;
