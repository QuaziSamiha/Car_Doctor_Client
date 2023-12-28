import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <section className="my-24">
      <div className="">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/2">
            <div className="relative w-[521px] h-[557px]">
              <img src={person} className="w-[460px] h-[473px] rounded-lg" />
              <img
                src={parts}
                className="absolute right-5 top-56 w-[327px] h-[332px] border-8 border-white rounded"
              />
            </div>
          </div>
          <div className="lg:w-1/2">
            <h1 className="text-xl font-bold text-[#FF3811] mb-6">About Us</h1>
            <h1 className="text-5xl text-[#151515] font-bold w-[380px] mb-6">
              We are qualified & of experience in this field
            </h1>
            <p className="py-6 text-base text-[#717171] w-[489px]">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don&apos;t look even
              slightly believable.
            </p>
            <p className="pb-6 text-base text-[#717171] w-[489px]">
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don&apos;t look even slightly
              believable.
            </p>
            <button className="btn w-[170px] h-[56px] bg-[#ff3811] mt-8 text-white border-none rounded-none">Get More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
