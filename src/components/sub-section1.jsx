const Sub_section = () => {
    return(
        <div className="relative px-5 py-5 mx-10 bg-gray-950 -top-11 lg:py-16 2xl:mx-36">
            <ul className="flex flex-col items-center gap-4 mx-auto lg:flex-row">
                <li className="px-10 py-1 bg-gray-800 md:px-36 lg:flex lg:flex-col lg:px-10 lg:py-3">
                    <span className="lg:w-24">CHECK IN</span>
                    <p>Arrival date</p>
                </li>
                <li className="px-10 py-1 bg-gray-800 md:px-36 lg:flex lg:flex-col lg:px-10 lg:py-3">
                    <span className="lg:w-24">CHECK OUT</span>
                    <p>Arrival date</p>
                </li>
                <li className="py-1 bg-gray-800 px-14 md:px-44 lg:flex lg:flex-col lg:px-10 lg:py-3">
                   <span className="lg:w-24">ADLUT</span>
                    <p>adult</p>
                </li>
                <li className="px-12 py-1 bg-gray-800 md:px-40 lg:flex lg:flex-col lg:px-10 lg:py-3">
                    <span className="lg:w-24">CHILDREN</span>
                    <p>children</p>
                </li>
                <a href="" className="px-20 py-4 bg-amber-500 md:px-52 lg:px-14 lg:w-full lg:py-7">
                    <li className="text-center">Book</li>
                </a>
            </ul>
        </div>
    )
}

export default Sub_section;