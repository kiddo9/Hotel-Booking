

function Room() {
  return (
    <div className="-mt-20">
        <div className="grid grid-cols-1 gap-5 px-2 sm:gap-16 md:px-32">
            <div className="border border-[#14274A] rounded-sm">
                <img src="images/devon-janse-van-rensburg-_WEDFTZV0qU-unsplash 1.png" alt="" />
                <h3 className="bg-[#14274A] py-2 text-center">SINGLE ROOM</h3>
                <div className="flex justify-between p-4">
                    <div className="flex gap-2 px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-[#E0B973] rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="text-xs font-medium text-[#14274A]">VIEW ROOM DETAILS</p>
                    </div>
                    <div className="flex gap-2 bg-[#E0B973] text-xs px-2 py-2 rounded-lg">
                        <p>$147</p>
                        <span>Avg/night</span>
                    </div>
                </div>
            </div>

            <div className="border border-[#14274A] rounded-sm">
                <img src="images/double-room 1.png" alt="" />
                <h3 className="bg-[#14274A] py-2 text-center">DOUBLE ROOM</h3>
                <div className="flex justify-between p-4">
                    <div className="flex gap-2 px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-[#E0B973] rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="text-xs font-medium text-[#14274A]">VIEW ROOM DETAILS</p>
                    </div>
                    <div className="flex gap-2 bg-[#E0B973] text-xs px-2 py-2 rounded-lg">
                        <p>$155</p>
                        <span>Avg/night</span>
                    </div>
                </div>
            </div>

            <div className="border border-[#14274A] rounded-sm">
                <img src="images/fred-kleber-gTbaxaVLvsg-unsplash 1.png" alt="" />
                <h3 className="bg-[#14274A] py-2 text-center">TWIN ROOM</h3>
                <div className="flex justify-between p-4">
                    <div className="flex gap-2 px-2 py-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 bg-[#E0B973] rounded-full">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    <p className="text-xs font-medium text-[#14274A]">VIEW ROOM DETAILS</p>
                    </div>
                    <div className="flex gap-2 bg-[#E0B973] text-xs px-2 py-2 rounded-lg">
                        <p>$155</p>
                        <span>Avg/night</span>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Room
