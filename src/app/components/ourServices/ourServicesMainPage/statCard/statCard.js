import { FaTrophy } from "react-icons/fa";

const StatCard = (props) => {
  return (
    <div className="bg-sky-500 text-center w-full shadow-lg p-10 lg:my-16 my-6">
      <div className="flex justify-center -mt-16">
        <div className="bg-white border-2 border-sky-500 rounded-full p-4 shadow-md text-sky-500 text-4xl">
        {props.icon}
        </div>
      </div>
      <h3 className="text-white text-xl font-semibold mt-4">{props.heading}</h3>
    </div>
  );
};

export default StatCard;
