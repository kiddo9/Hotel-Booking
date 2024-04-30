 import { Link } from 'react-router-dom';

const Section1 = ({image}) => {

    return(
        <div>
            <div className="absolute inset-0 justify-center bg-[#14274a78]"></div>
        <div className="w-screen h-screen lg:w-full">
            <img src={image} alt="" className="h-screen md:w-screen" />
        </div>

        <div className="absolute top-[43%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen flex flex-col justify-center leading-loose pl-4 xl:px-44">
            <span className="px-1 font-sans text-lg text-left sm:text-2xl md:text-4xl">welcome To</span>
            <h2 className='font-serif text-6xl font-bold text-left sm:text-7xl md:text-9xl'>LUXURY</h2>
            <p className="text-3xl font-medium md:text-4xl">HOTELS</p>
            <h6 className="text-xs sm:text-lg">Book your stay and enjoy Luxury redefind at the most affordable rates.</h6>
        </div>

        <div className='relative flex justify-center -top-40 bg-[#E0B973] py-2 w-36 rounded-md mx-auto'>
            <Link className='flex gap-3 font-sans'>
               <img src="images/Vector.png" alt="" />
               Book Now
            </Link>
        </div>

        <div className='relative flex justify-center py-2 mx-auto rounded-md -top-36'>
            <Link className='flex flex-col gap-3'>
            Scroll
               <img src="images/Subtraction 2.png" alt="" className='w-8' />
            </Link>
        </div>
        </div>
    )
}

export default Section1;