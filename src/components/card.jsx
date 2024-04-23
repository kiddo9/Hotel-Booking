import {Link} from 'react-router-dom'

const RoomCard = () => {
    return(
        <div>
        <div className="flex flex-col gap-6 px-3 lg:flex-row">
            <div className="px-2 bg-white">
                <div className="py-2 ">
                    <img src="images/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg" alt="" />
                </div>

                <h2 className="text-3xl text-gray-950">Co- working suite for modern startups</h2>
                <p className="mt-3 text-lg text-gray-950 mb-9">a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry.</p>
                <span className="py-2 text-gray-950 text-md">WORKERS</span>
            </div>

            <div className="px-2 bg-white">
                <div className="py-2 ">
                    <img src="images/reisetopia-aI6Su7Mu9Ro-unsplash.jpg" alt="" />
                </div>

                <h2 className="text-3xl font-semibold text-gray-950">The Grand suite Do you feel great?</h2>
                <p className="mt-3 text-lg text-gray-950 mb-9">a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry.</p>
                <span className="py-2 text-gray-950 text-md">MAYOR</span>
            </div>

            <div className="px-2 bg-white">
                <div className="py-2 ">
                    <img src="images/visualsofdana-T5pL6ciEn-I-unsplash.jpg" alt="" />
                </div>

                <h2 className="text-3xl text-gray-950">Double Deluxe This is Lux best comfort</h2>
                <p className="mt-3 text-lg text-gray-950 mb-9">a commercial establishment offering 
                    lodging to travelers and sometimes to
                     permanent residents, and often having 
                     restaurants, meeting rooms, stores, 
                     etc., that are available to the general 
                     public. Synonyms: motel, guesthouse,
                      hostel, hostelry.</p>
                <span className="py-2 text-gray-950 text-md">WEALTH</span>
            </div>
        </div>
     <Link to="/rooms" ><button className="flex px-3 py-1 mx-auto mt-10 bg-amber-500 md:py-2 ">view more</button></Link><br/><br/>
        </div>
    )
}

export default RoomCard;