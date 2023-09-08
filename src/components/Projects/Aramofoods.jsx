const Aramofoods = () => {
  return (
    <div>
      {/* CARDS HERE 1 */}
      <div className="image flex flex-col gap-3 items-center p-4">
        <img
          className="sm:w-80 hover:cursor-pointer hover:shadow-lg object-cover rounded"
          src="projects/chicken.jpg"
          alt=""
        />
        <div className="flex gap-2">
          <a
            href="https://github.com/myabdi4/myabdifoods"
            target="_blink"
            className=" p-2 rounded bg-green-800 w-max"
          >
            SOURCE CODE
          </a>

          <a
            href="https://myabdifoods.netlify.app/"
            target="_blink"
            className=" p-2 rounded bg-green-800 w-max"
          >
            🌐 MYABDIFOODS.COM
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aramofoods;
