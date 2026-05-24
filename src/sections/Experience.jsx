import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

const Experience = () => {
  const { data, loading, error } = useFetch("/data/experience.json");

  if (!loading && error) {
    return <div className="text-red-500 text-center py-10">Error: {error}</div>;
  }

  return (
    <section
      className="section border-t-transparent! pb-10! max-md:pb-4!"
      id="experience"
    >
      <h1 className="title" data-aos="zoom-in-right">
        Experience
      </h1>

      {loading ? (
        <div className="my-50 flex justify-center">
          <Loader />
        </div>
      ) : (
        <div>
          {data?.map((job) => (
            <div
              key={job.id}
              className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 border border-gray-800 px-4 py-8 mt-10 max-md:mt-6"
              data-aos="flip-left"
            >
              <div className="font-hanson">
                <h3 className="text-xl text-gray-800">{job.company}</h3>
                <p className="text-sm text-gray-500 mt-2">{job.duration}</p>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-gray-800 -mt-0.5">
                  {job.role}
                </h4>
                <ul className="mt-6 space-y-4 text-gray-600 leading-relaxed list-disc list-inside">
                  {job.responsibilities.map((task, index) => (
                    <li
                      key={index}
                      className="pl-2 text-justify [hyphens:auto]"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Experience;
