import Counter from "../components/Counter";
import RGBWrapper from "../components/RGBWrapper";

const About = () => {
  return (
    <section className="section" id="about">
      <h1 className="title" data-aos="zoom-in-right">
        About me
      </h1>
      <div className="mt-6 max-md:mt-4" data-aos="fade-right">
        <p className="text-[22px] max-sm:text-sm text-gray-800 leading-9 max-sm:leading-6 tracking-wider max-sm:tracking-normal text-justify [hyphens:auto]">
          Front-end developer with a strong foundation in crafting responsive
          web applications using modern technologies such as{" "}
          <mark className="bg-[#F0DB4F] px-2">JavaScript</mark>,{" "}
          <mark className="bg-[#3178c6] text-white text-shadow-md  px-2">
            TypeScript
          </mark>
          ,{" "}
          <mark className="bg-[#61DBFB] text-white text-shadow-md px-2">
            React
          </mark>
          , <mark className="bg-black text-white px-2">Next.js</mark>, and{" "}
          <mark className="bg-sky-400 text-white text-shadow-md px-2">
            Tailwind
          </mark>
          . Proven expertise in optimizing performance, achieving up to 30%
          reduction in development time through reusable components and advanced
          techniques. Adept at collaborating with design teams to deliver
          user-centric interfaces that elevate user engagement and satisfaction.
          Committed to continuous improvement and delivering high- quality web
          experiences that drive conversion rates.
        </p>
      </div>
      <div
        className="mt-20 flex items-center justify-around gap-px *:px-4 *:py-10 *:w-70 *:text-center max-md:flex-col *:max-md:w-full max-md:gap-4 max-md:mt-8"
        data-aos="fade-up"
      >
        <RGBWrapper className="bg-white group hover:bg-gray-900">
          <div className="text-5xl font-hanson text-gray-700 group-hover:text-gray-100">
            <Counter end={3} duration={500} />
          </div>
          <p className="text-md tracking-wide mt-2 group-hover:text-gray-100">
            Years Experience
          </p>
        </RGBWrapper>
        <RGBWrapper className="bg-white group hover:bg-gray-900">
          <div className="text-5xl font-hanson text-gray-700 group-hover:text-gray-100">
            <Counter end={7} duration={800} />
          </div>
          <p className="text-md tracking-wide mt-2 group-hover:text-gray-100">
            Projects Completed
          </p>
        </RGBWrapper>
        <RGBWrapper className="bg-white group hover:bg-gray-900">
          <div className="text-5xl font-hanson text-gray-700 group-hover:text-gray-100">
            <Counter end={20} duration={1000} />+
          </div>
          <p className="text-md tracking-wide mt-2 group-hover:text-gray-100">
            Technologies Mastered
          </p>
        </RGBWrapper>
      </div>
    </section>
  );
};

export default About;
