import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(service);
  if(!service){
    return <p>loading.....</p>
  }
  // const {  _id, title, price, img } = service;
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    // const order = {
    //   customerName: name,
    //   email, // short form
    //   date,
    //   img,
    //   service: title,
    //   service_id: _id,
    //   price: price, // long form
    // };

    // console.log(order);

    // fetch("http://localhost:5000/checkouts", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.insertedId) {
    //       alert("data inserted successfully");
    //     }
    //   });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full rounded-none bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Date</span>
                  </label>
                  <input
                    type="date"
                    placeholder="Date"
                    name="date"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    defaultValue={user?.email}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Your Message"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Order Confirm"
                  className="btn btn-block text-white bg-[#ff3811]"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
