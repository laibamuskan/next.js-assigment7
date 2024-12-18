// import Breadcrumb from "../components/common/breadCrumb/page";
import Image from "next/image";
import ContactMap from "../components/contactUs/contactMap/contactMap";
import ContactForm from "../components/contactUs/contactPage/contactForm/page";
import Navbar from "../components/common/navbar/page";
import Footer from "../components/common/footer/page";


const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="md:flex items-">
        <div className="md:w-1/2 lg:h-[800px] h-full w-full">
          <ContactMap />
        </div>
        <div className="md:w-1/2 w-full">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>

  );
};

export default Contact;
