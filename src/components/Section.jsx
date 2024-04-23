const Section = () => {
  return (
    <>
      <div className="dark:bg:gray-900 p-2">
        <div className="flex-col md: flex sm:justify-center space-y-5 items-center sm:text-3xl text-lg text-center p-10">
          <div className="">
            <img
              className="rounded-full ring-2 ring-white w-64 justify-center"
              src="/profile.jpg"
              alt="logo"
            />
           
          </div>
          <div>
            <h2 className="font-bold pb-5 text-center">HI, I AM ABDIRAHMAN NUR</h2>
            <p className="text-justify text-md">
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
