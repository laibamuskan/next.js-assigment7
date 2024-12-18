import React from 'react';
import { FaTools, FaFan, FaCog, FaFireAlt, FaWrench, FaWind } from 'react-icons/fa';
import WorkStepCard from './workStepCard/workStepCard';

const workSteps = [
  {
    icon: <FaFan />,
    heading: "Air Conditioning",
    description: "We provide efficient AC repairs to ensure your comfort during hot weather.",
  },
  {
    icon: <FaTools />,
    heading: "AC Installation",
    description: "Professional installation services for all types of air conditioners.",
  },
  {
    icon: <FaCog />,
    heading: "Maintenance",
    description: "Regular maintenance to keep your HVAC systems running smoothly.",
  },
  {
    icon: <FaFireAlt />,
    heading: "Furnace Installation",
    description: "Reliable furnace installations to keep your home warm in winter.",
  },
  {
    icon: <FaWrench />,
    heading: "Furnace Repair",
    description: "Quick and efficient repairs for your heating systems.",
  },
  {
    icon: <FaWind />,
    heading: "Indoor Air Quality",
    description: "Improve your indoor air quality with our advanced solutions.",
  },
];

const WorkStepSection = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 my-10">
      {workSteps.map((step, index) => (
        <WorkStepCard
          key={index}
          icon={step.icon}
          heading={step.heading}
          description={step.description}
        />
      ))}
    </div>
  );
};

export default WorkStepSection;
