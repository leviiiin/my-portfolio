import useFetch from "../hooks/useFetch";

const Projects = () => {
  const { data, loading, error } = useFetch("/data/projects.json");

  if (!data) return;

  return (
    <section className="section pb-10! max-md:pb-4!" id="projects">
      <h2 className="title" data-aos="zoom-in-right">
        Projects
      </h2>
      <div className="mt-10 flex flex-col gap-4">
        {data.map((i) => (
          <div
            style={{ "--hover-color": i.color }}
            className="border border-gray-800 px-6 py-10 flex items-start justify-between gap-14 relative overflow-hidden group max-lg:flex-col max-lg:gap-6 max-lg:pb-6 max-sm:px-2.5 max-sm:pb-2.5 max-sm:pt-7"
            key={i.id}
            data-aos="flip-up"
          >
            <div className="max-w-105 max-lg:max-w-none">
              <h3 className="group-hover:text-(--hover-color) transition-colors duration-300 text-gray-700 text-2xl font-hanson tracking-wider max-lg:text-lg [text-shadow:2px_2px_1px_rgba(0,0,0,0.3)]">
                {i.title}
              </h3>
              <div className="w-full h-px bg-gray-300 mt-3 mb-2" />
              <p className=" tracking-wider text-gray-600 text-justify [hyphens:auto]">
                {i.description && i.description}
              </p>
              <div className="flex gap-4 mt-4 text-gray-600 *:underline *:hover:decoration-double text-lg">
                {i.productionLink && (
                  <a
                    href={i.productionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Demo"
                  >
                    Demo
                  </a>
                )}
                {i.codeLink && (
                  <a
                    href={i.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Code"
                  >
                    Code
                  </a>
                )}
              </div>
            </div>
            <div
              className={`w-2xl border border-gray-800 p-3.5 group-hover:bg-(--hover-color) transition-colors duration-500 max-xl:min-w-100 max-lg:min-w-0 max-lg:max-w-full max-sm:p-0 max-sm:border-none`}
            >
              <img
                src={i.image}
                alt={i.title}
                className="w-full h-full object-cover border border-gray-800"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
