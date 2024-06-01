const HeaderTitle = ({title}) => {
    return (
        <>
            <div className="flex tabs tabs-boxed cursor-pointer w-fit">
                <a className="p-2 hover-nav">
                  {title}
                </a>
            </div>
        </>
    );
}

export default HeaderTitle;