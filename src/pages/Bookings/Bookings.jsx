import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";
import BookingRows from "./BookingRows";
import banner from "../../assets/images/others/allOrder.png";
const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBookings(data);
      });
  }, []);

  const handleDelete = (id) => {
    const proceed = confirm("are you sure to delete this service?");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };

  const handleBookingConfirm = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // updated
        }
      });
  };

  return (
    <div>
      <div className="h-[319px] left-0 right-0 top-1/2 bg-gradient-to-br from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-md">
        <img src={banner} alt="" />
        <div className="h-[71px]">
          <h1 className="text-4xl text-white font-bold -mt-48 ml-24">
            Cart Details
          </h1>
          <p className="text-[#ff3811] ml-24 mt-3">Home - manage all orders</p>
        </div>
      </div>
      <div className="overflow-x-auto my-16 w-[1140px]">
        <table className="table">
          <tbody className="">
            {bookings.map((booking) => (
              <BookingRows
                key={booking._id}
                booking={booking}
                handleDelete={handleDelete}
                handleBookingConfirm={handleBookingConfirm}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
