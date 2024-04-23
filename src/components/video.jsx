const Video = () => {
    return (
       <div className="relative">
           <div className="absolute inset-0 justify-center bg-customGray"></div>
                <div>
                    <img src="images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg" className="h-[100vh] object-fill md:w-screen" alt="" />
                </div>

            <div  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen flex flex-col justify-center leading-[4rem]">
                <h2 className="text-4xl text-center text-amber-500">LUXURY</h2><br/>
                <h4 className="text-lg text-center">Perform Some Task And Get A Chance of 
                    a free Trip To One of Our Must Luxury 
                    House in Norway
                </h4>
                <p className="text-lg text-center">The task ia a one week task. 
                    if you are up for the task click on
                 </p><br/>
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mx-auto text-amber-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5" />
                 </svg><br/>
                 <button className="mx-10 rounded-lg bg-amber-500"><a href="">Get Started</a></button>
            </div>
      </div>
    );
  };
  
  export default Video;
  