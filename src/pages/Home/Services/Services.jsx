import { useEffect, useState } from "react";
import ServiceCard from "../ServiceCard/ServiceCard";
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    // fetch("/services.json")
    fetch(`http://localhost:5000/services`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setServices(data);
      });
  }, []);
  //   console.log(services);
  return (
    <section className="my-24">
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#ff3811] mb-4">Service</h1>
        <h1 className="text-5xl mb-8 font-bold">Our Service Area</h1>
        <p className="text-base text-[#727272] mb-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br />
          words which don&apos;t look even slightly believable.
        </p>
      </div>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <button className="w-[170px] h-[56px] text-lg font-semibold border border-[#ff3811] text-[#ff3811] rounded">
          More Services
        </button>
      </div>
    </section>
  );
};

export default Services;
