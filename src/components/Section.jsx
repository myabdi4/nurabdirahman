const Section = () => {
  return (
    <>
      <div className="dark:bg:gray-900 lg:pt-20 pt-5">
        <div className="flex sm:justify-center space-y-5 items-center flex-col sm:text-3xl text-lg text-center">
          <h2 className="font-bold">HI, I AM ABDIRAHMAN NUR</h2>
          <p className="pb-5 text-xl text-justice">
            A skilled front-end developer passionate about crafting captivating
            <span className="hidden sm:block sm:text-center"></span>
            -web experiences that blend design and technology seamlessly
          </p>
          <img
            className="rounded-full ring-2 ring-white w-64 justify-center"
            src="/profile.jpg"
            alt="logo"
          />
        </div>
      </div>
    </>
  );
};

export default Section;
