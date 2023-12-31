/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  //   console.log(service);
  const { _id, title, img, price } = service;

  return (
    <div className="w-[364px] h-[348px] border rounded">
      <div className="flex justify-center m-4">
        <img className="w-[314px] h-[208px] rounded" src={img} alt="" />
      </div>
      <div className="w-[314px] h-[74px] m-6">
        <h1 className="font-bold text-2xl text-[#727272]">{title}</h1>
        <div className="text-[#ff3811] my-3 flex justify-between">
          <p className="text-xl font-semibold">Price: ${price}</p>
          <Link to={`/checkout/${_id}`}>
            <button>
              <FaArrowRight />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
