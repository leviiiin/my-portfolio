import { ArrowRightIcon } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-55 pb-100 px-8 border-y border-gray-800 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0 animate-fluid
          bg-gradient-to-br from-blue-200 via-cyan-200 via-purple-300 via-green-200 via-rose-200 to-yellow-200"
        ></div>
      </div>

      <div className="relative z-10">
        <h1
          className="text-[48px] font-hanson uppercase max-w-4xl leading-18 text-gray-800 tracking-wider underline max-md:text-[26px] max-[450px]:text-center"
          data-aos="fade-right"
        >
          Ihor Levin
        </h1>
        <h1
          className="text-[64px] font-hanson uppercase max-w-4xl leading-18 text-gray-800 tracking-wider max-md:text-[32px] max-md:leading-10 max-[450px]:text-[28px]! max-[450px]:text-center"
          data-aos="fade-right"
        >
          Fullstack developer
        </h1>
        <a
          href="#about"
          className="inline-block pb-1.5 text-xl mt-8 group text-gray-800 font-medium hover:border-b-2 hover:border-black transition-colors max-[450px]:text-[18px]! max-[450px]:w-full max-[450px]:text-center"
          data-aos="fade-up"
        >
          Learn more about me{" "}
          <ArrowRightIcon className="inline ml-2 group-hover:translate-x-2 transition-transform" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
