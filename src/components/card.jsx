import {Link} from 'react-router-dom'

const RoomCard = () => {
    return(
        <div>
        <div className="flex flex-col gap-6 px-3 -mt-24 lg:flex-row md:px-36 lg:px-32 ">
            <div className=" md:flex md:flex-row-reverse md:gap-10">
                <div className="">
                    <img src="images/steven-ungermann-aRT5UCf2MYY-unsplash.png" alt="" />
                </div>

                <div>
                <h2 className="text-3xl font-bold text-[#14274A]">Luxury redefined</h2>
                <p className="mt-3 text-sm text-[#14274A] mb-9 md:w-56 ">a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry.</p>
                <Link to='/rooms' className="py-2 px-10 rounded-md bg-[#E0B973] text-sm">Explore</Link>
            </div>
            </div>

            <div className="md:flex md:flex-row-reverse md:gap-10">
                <div className="">
                    <img src="images/andrew-ruiz-fmz-B9At9iQ-unsplash.png" alt="" />
                </div>

                <div>
                <h2 className="text-3xl font-bold text-[#14274A]">Leave your worries to the sand</h2>
                <p className="mt-3 text-sm text-[#14274A] mb-9 md:w-60">a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry.</p>
                <Link to='/rooms' className="py-2 px-10 rounded-md bg-[#E0B973] text-sm">Explore</Link>
            </div>
            </div>
        </div>
       <br/><br/>
        </div>
    )
}

export default RoomCard;