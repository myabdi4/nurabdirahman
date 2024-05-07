import Card from "./Card"

const LatestUplods = () => {
    return (
        <>
            <div className="grid justify-center px-20 gap-2 p-2 text-lg">
                <div className="p-5 grid">
                    <div className="flex gap-5 tabs tabs-boxed justify-center cursor-pointer">
                        <a className="p-5 hover-nav">LASTEST PROJECTS</a>
                        <a className="p-5 hover-nav">LATEST BLOGS</a>
                    </div>

                    <h2 className="pt-5">PROJECTS</h2>
                    <div className="grid sm:grid-cols-2 gap-5 justify-between pt-8">
                        
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>


                    <h2 className="pt-5">BLOGS</h2>
                    <div className="grid sm:grid-cols-2 gap-5 justify-between pt-8">

                        <Card />
                        
                    </div>

                </div>
            </div>
        </>
    );
}

export default LatestUplods;