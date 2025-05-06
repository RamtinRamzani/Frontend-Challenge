const BaseApparel = () => {
  return (
    <div className="container flex max-md:flex-col-reverse justify- mx-auto gap-[clamp(1rem,4vw,4rem)] h-full bg-gray-100">
      <div className="flex flex-col md:pl-20 md:w-1/2 px-4">
        <div className="mt-10 max-md:hidden">
          <img src="/images/nowb/logo.svg" alt="base apparel" />
        </div>
        <h2 className="uppercase max-md:leading-8 leading-16 text-[clamp(2rem,4vw,6rem)] font-semibold flex flex-col mt-8 md:mt-20 max-md:text-center tracking-[clamp(1rem,2vw,1.5rem)]">
          <span className="text-gray-300 font-medium">we're</span>
          <span className="text-gray-800">coming</span>
          <span className="text-gray-800">soon.</span>
        </h2>
        <p className="md:mt-16 mt-8 max-md:text-center text-gray-400 tracking-wider font-[Josefin]">
          hello flow shappers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <div className="flex items-center bg-white rounded-full border border-pink-200 shadow-md w-full max-w-md p-1 pl-4 mt-8 max-md:mb-14">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow bg-transparent outline-none text-pink-400 placeholder-pink-300 cursor-pointer"
          />
          <button className="bg-gradient-to-r from-pink-300 to-pink-700 text-white rounded-full w-20 h-10 flex items-center justify-center shadow-md hover:scale-105 transition cursor-pointer">
            <span className="text-lg">&gt;</span>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 h-full">
        <div className="mt-20 mx-2 mb-6 w-1/3 md:hidden">
          <img src="/images/nowb/logo.svg" alt="base apparel" />
        </div>
        <img
          src="/images/nowb/hero-desktop.jpg"
          alt="Photo"
          className="w-full md:h-full max-sm:h-72 max-md:h-96"
        />
      </div>
    </div>
  );
};

export default BaseApparel;
