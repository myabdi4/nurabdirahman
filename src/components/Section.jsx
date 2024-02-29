const Section = () => {
  return (
    <>
      <div className="dark:bg:gray-900 lg:pt-20 p-2">
        <div className="flex sm:justify-center space-y-5 items-center flex-col sm:text-3xl text-lg text-center bg-red-500 p-10">
          <div className="">
            <img
              className="rounded-full ring-2 ring-white w-64 justify-center"
              src="/profile.jpg"
              alt="logo"
            />
            <h2 className="font-bold">HI, I AM ABDIRAHMAN NUR</h2>
          </div>
          <div>
            <p className="pb-5 text-lef text-md">
              A skilled front-end developer passionate about crafting
              captivating -web experiences that blend design and technology
              seamlessly. Check my projects here and my personal blogs here. if
              you want to talk shoot me a dm on the following socials.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Section;
