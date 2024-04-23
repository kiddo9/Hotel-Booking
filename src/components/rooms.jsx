

const Rooms = () => {

    const ListOfRooms = [
        {
            id: 1,
            image: 'images/adam-winger-VGs8z60yT2c-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.'
        },
        {
            id: 2,
            image: 'images/linus-mimietz-p3UWyaujtQo-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 3,
            image: 'images/mark-champs-Id2IIl1jOB0-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 4,
            image: 'images/olexandr-ignatov-w72a24brINI-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 5,
            image: 'images/patrick-robert-doyle-AH8zKXqFITA-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 6,
            image: 'images/point3d-commercial-imaging-ltd-5BV56SdvLmo-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 7,
            image: 'images/point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        }
    ];

    const ListOfVipRooms = [
        {
            id: 1,
            image: 'images/reisetopia-aI6Su7Mu9Ro-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 2,
            image: 'images/roberto-nickson-emqnSQwQQDo-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        },
        {
            id: 3,
            image: 'public/images/sasha-kaunas-67-sOi7mVIk-unsplash.jpg',
            Title: 'Double Deluxe This is Lux best comfort',
            description: 'a commercial establishment offering lodging to travelers and sometimes topermanent residents, and often having restaurants, meeting rooms, stores, etc., that are available to the general public. Synonyms: motel, guesthouse,hostel, hostelry.',
        }
    ];

    return(
        <div>
        <div className="relative grid grid-cols-1 gap-6 px-1 pt-24 md:grid-cols-2 xl:grid-cols-3">
            {ListOfRooms.map((ListofRoom) => (
                 <div className="px-2 bg-white" key={ListofRoom.id}>
                 <div className="py-2 ">
                     <img src={ListofRoom.image} alt={ListofRoom.Title} />
                 </div> 
 
                 <h2 className="text-3xl text-gray-950">{ListofRoom.Title}</h2>
                 <p className="mt-3 text-lg text-gray-950 mb-9">{ListofRoom.description}</p>
             </div>
            ))}
        </div>
        <div>
            <h2 className="py-10 text-4xl text-center text-gray-700">VIP ROOMS</h2>
            <div className="relative grid grid-cols-1 gap-5 px-1 md:grid-cols-2 xl:grid-cols-3">
                {ListOfVipRooms.map((ListOfVipRoom) => (
                    <div className="px-2 bg-white" key={ListOfVipRoom.id}>
                    <div className="py-2 ">
                        <img src={ListOfVipRoom.image} alt={ListOfVipRoom.Title} />
                    </div> 
    
                    <h2 className="text-3xl text-gray-950">{ListOfVipRoom.Title}</h2>
                    <p className="mt-3 text-lg text-gray-950 mb-9">{ListOfVipRoom.description}</p>
                </div>
                ))}
            </div>
        </div><br/><br/>
        </div>
    )
}

export default Rooms