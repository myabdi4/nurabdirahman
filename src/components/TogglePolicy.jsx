const ToggleReview = () => {
    return (
        <>
            {/* <!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" --> */}
            <div className="form-control">
                <label className="label cursor-pointer">
                    <span className="label-text sr-only">Agree With Policy</span>
                    <input type="checkbox" className="toggle" unchecked />
                </label>
            </div>
        </>
    )
}

export default ToggleReview;