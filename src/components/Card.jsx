const Card = ({imageSource, projectTitle, projectDescription}) => {
    return (
        <>
            <div className="card w-96 bg-base-100  image-full cursor-pointer">
                <figure><img src={imageSource} alt="project" className="w-full h-full object-fit"/></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold text-[#49df8f] uppercase">{projectTitle}</h2>
                    <p className="text-white hover:text-[#b49595] hover:text-xl hover:transition-all transition-opacity">{projectDescription}</p>
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