import { FaTrophy } from "react-icons/fa";
import HeroSection from "../../about/heroSection/page";
import WorkSection from "../workSection/workSection";
import StatCard from "./statCard/statCard";
import { BsClockHistory } from "react-icons/bs";
import { GrDocumentConfig } from "react-icons/gr";
import { RiTeamLine } from "react-icons/ri";
import WorkStepSection from "../workStepSection/workStepSection";
import Navbar from "../../common/navbar/page";
import Footer from "../../common/footer/page";



const OurServicesMainPage = () => {
    return (
        <div>
            <Navbar />
            <HeroSection heading="Free Service Calls." subHeading="Our Service is a Breath of Fresh Air" description="Company Provides a wide variety of HVAC services to the homes and bussines since 1965." />
            <div className="flex flex-wrap lg:flex-nowrap items-center justify-center w-full">
                <StatCard icon={<FaTrophy />} heading="Successful Projects" />
                <StatCard icon={<RiTeamLine />} heading="Happy Clients" />
                <StatCard icon={<BsClockHistory />} heading="Remaining Projects" />
                <StatCard icon={<GrDocumentConfig />} heading="Total Projects" />
            </div>
            <WorkSection />
            <p className="text-black text-xl lg:text-4xl my-6 mx-auto lg:w-[500px] text-center font-bold w-full">Cooling Excellence Delivered To Your Doorstep</p>
            <WorkStepSection />
            <Footer />
        </div>
    );
};

export default OurServicesMainPage;
