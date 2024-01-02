import { useRouteError } from "react-router-dom";
import image from "../../assets/images/ErrorPage/Frame.png";
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex justify-center items-center my-28">
      <div>
        <img src={image} alt="" className="h-[280px]" />
        <h1 className="text-center text-[#ff3811] my-4 text-lg font-bold">
          Oops!
        </h1>
        <p className="text-center text-[#99220a] text-2xl font-bold">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
