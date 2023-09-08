import Header from "../components/Header";

function Error() {
  return (
    <>
      <div className="page text-white h-screen">
        <Header />
        <div className="flex text-center justify-center items-center bg-red-900 h-screen text-4xl">
          <p>
            THE PAGE YOU ENTERED{" "}
            <em className="text-green-950 font-bold">DOES NOT EXIST!</em>
          </p>
        </div>
      </div>
    </>
  );
}

export default Error;
