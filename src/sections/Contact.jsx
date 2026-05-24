import RGBWrapper from "../components/RGBWrapper";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <h2 className="title" data-aos="zoom-in-right">
        Contact
      </h2>
      <div
        className="flex items-center justify-around gap-4 mt-10 *:border *:border-gray-700 *:w-[25%] *:h-20 *:flex *:items-center *:justify-center max-md:flex-col max-md:*:w-full"
        data-aos="fade-up"
      >
        <RGBWrapper className="bg-white group hover:bg-gray-100 flex items-center justify-center text-gray-700">
          <a
            className="w-full h-full flex items-center justify-center font-hanson leading-10 tracking-widest group"
            href="mailto:levinigor.web@gmail.com"
          >
            <span className="group-hover:hidden">Email</span>
            <img
              className="group-hover:block hidden w-12"
              src="/images/gmail.png"
              alt="Gmail"
            />
          </a>
        </RGBWrapper>
        <RGBWrapper className="bg-white group hover:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-white">
          <a
            className="w-full h-full flex items-center justify-center font-hanson leading-10 tracking-widest group"
            href="https://t.me/igrlvn"
          >
            <span className="group-hover:hidden">Telegram</span>
            <img
              className="group-hover:block hidden w-15"
              src="/images/telegram.png"
              alt="Telegram"
            />
          </a>
        </RGBWrapper>
        <RGBWrapper className="bg-white group hover:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-white">
          <a
            className="w-full h-full flex items-center justify-center font-hanson leading-10 tracking-widest"
            href="https://www.linkedin.com/in/ihor-levin-022729376/"
          >
            <span className="group-hover:hidden">LinkedIn</span>
            <img
              className="group-hover:block hidden w-10"
              src="/images/linkedin.webp"
              alt="LinkedIn"
            />
          </a>
        </RGBWrapper>
        <RGBWrapper className="bg-white group hover:bg-gray-100 flex items-center justify-center text-gray-700 hover:text-white">
          <a
            className="w-full h-full flex items-center justify-center font-hanson leading-10 tracking-widest"
            href="https://github.com/leviiiin"
          >
            <span className="group-hover:hidden">GitHub</span>
            <img
              className="group-hover:block hidden w-10"
              src="/images/github.png"
              alt="GitHub"
            />
          </a>
        </RGBWrapper>
      </div>
    </section>
  );
};

export default Contact;
