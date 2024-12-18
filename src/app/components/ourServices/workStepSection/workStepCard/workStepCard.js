import { FaTools } from "react-icons/fa";

const WorkStepCard = (props) => {
    return (
        <div className="bg-gray-100 rounded-lg w-full lg:w-[30%] p-6 max-w-sm mb-6">
            <div className="flex items-center justify-center -mt-12">
                <div className="bg-white rounded-full p-4 shadow-lg text-sky-500 text-3xl border-t-2 border-sky-500">
                    {props.icon}
                </div>
            </div>
            <h3 className="text-sky-600 text-xl font-semibold mt-6 text-center">{props.heading}</h3>
            <p className="text-gray-600 text-center mt-2">
                {props.description}
            </p>
        </div>
    );
};

export default WorkStepCard;
