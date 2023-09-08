const ReactTricks = () => {
  return (
    <div>
      {/* BLOG HERE 1 */}
      <div className="md:flex gap-5 p-3 ">
        <img
          className="sm:w-80 object-fit hover:cursor-pointer hover:shadow-lg rounded sm:ml-10"
          src="blogs/react.png"
          alt=""
        />

        <div className="flex flex-col gap-5 pt-4 items-start">
          <p className="sm:text-justify text-start sm:w-3/4">
            To discover my latest blogs in the fields of IT and technology,
            simply click{" "}
            <a href="/" className="text-green-600">
              read more
            </a>
            . There, you will find a collection of my most recent articles in
            these domains.
          </p>
          <div>
            <a
              href="/react-tips-tricks"
              target="_blink"
              className=" p-2 rounded bg-green-800 w-max"
            >
              READ MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactTricks;
