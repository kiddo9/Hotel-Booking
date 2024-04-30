const Video = () => {
    return (
       <div className="relative text-[#14274A] flex justify-center flex-col p-7">
          <h2 className="font-serif text-3xl font-medium text-center">Testimonials</h2>
          <p className="text-sm font-normal text-center">`Calm, Seren,Retro - What a way to relax and enjoy`</p>
          <span className="text-sm font-normal text-center">Mr and Mrs Bertux, uk</span>
          <div className="flex gap-8 pt-4 mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-[#E0B973] p-1 text-white rounded-md">
             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
           </svg>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 bg-[#E0B973] p-1 text-white rounded-md">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

          </div>
      </div>
    );
  };
  
  export default Video;
  