import { ThreeCircles } from "react-loader-spinner";
import "animate.css";

export const Loader = () => {
  const storedTtheme = localStorage.getItem("geppeto-theme");

  return (
    <>
      <div className="flex items-center justify-center h-screen animate__animated animate__fadeIn">
        <ThreeCircles
          height="100"
          width="100"
          color={
            storedTtheme === null || storedTtheme === "light"
              ? "#D33232"
              : "#18122B"
          }
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </div>
    </>
  );
};
