import { Link } from 'react-router-dom';

const Section1 = () => {
    return(
        <div>
            <div className="absolute inset-0 justify-center bg-customGray"></div>
        <div className="h-full lg:w-full">
            <img src="images/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg" alt="" className="h-[100vh] object-fill md:w-screen" />
        </div>

        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen flex flex-col justify-center leading-loose">
            <span className="w-48 px-1 mx-auto text-lg text-center bg-amber-500">welcome to ROYALLA</span>
            <h2 className='text-3xl font-bold text-center sm:text-5xl md:text-6xl'>The New Vision Of Comfort</h2>
            <Link to='/rooms' className='w-32 py-1 mx-auto text-sm text-center bg-amber-500' >Discover More</Link>
        </div>
        </div>
    )
}

export default Section1;