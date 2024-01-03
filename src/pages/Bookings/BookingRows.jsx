import demo from '../../assets/images/team/1.jpg'
const BookingRows = ({ booking, handleDelete, handleBookingConfirm }) => {
  // eslint-disable-next-line no-unused-vars
  const { _id, customerName, date, email, service, price, img } = booking;

  //   const handleDelete = (id) => {
  //     const proceed = confirm("are you sure to delete this service?");
  //     if (proceed) {
  //       fetch(`http://localhost:5000/bookings/${id}`, {
  //         method: "DELETE",
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           console.log(data);
  //           if (data.deletedCount > 0) {
  //             alert("deleted successfully");
  //           }
  //         });
  //     }
  //   };
  return (
    <tr className="h-[130px] flex justify-between items-center">
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="">
            <div className="">
              <img src={demo} className="h-[130px] w-[130px] rounded-md" alt="" />
            </div>
          </div>
          <div>
            <h1 className="font-semibold text-xl text-[#2c2c2c] mb-2">
              {service}
            </h1>
            <p className="text-base mb-2">{customerName}</p>
            <p className="text-base">{email}</p>
          </div>
        </div>
      </td>
      <td className="text-xl font-medium leading-6 text-[#2d2d2d]">
        <p>${price}</p>
      </td>
      <td className="text-xl font-medium leading-6 text-[#2d2d2d]">{date}</td>
      <th>
        <button
          onClick={() => handleBookingConfirm(_id)}
          className="btn h-12 w-[120px] bg-[#ff3811] hover:bg-[#ff3811] text-xl font-semibold text-white hover:text-white"
        >
          Confirm
        </button>
      </th>
    </tr>
  );
};

export default BookingRows;
