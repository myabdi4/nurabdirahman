const Card = () => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>Would you like to buy these shoes?</p>
                    <div className="card-actions justify-end">
                        <button className="btn hover-nav">GET CODE</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card