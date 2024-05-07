const Card = () => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-[#201d4c] uppercase">Current Project</h2>
                    <p className="line-clamp-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias nulla dolores illum consequuntur, sit ipsum asperiores 
                        necessitatibus qui cum consequatur voluptatem temporibus aperiam modi laudantium exercitationem magnam molestiae id excepturi! </p>
                    <div className="flex gap-2 justify-end pt-4">
                        <button className="btn hover-nav">GET CODE</button>
                        <button className="btn hover-nav">TRY DEMO</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card