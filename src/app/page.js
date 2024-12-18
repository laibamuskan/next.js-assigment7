import Navbar from "./components/common/navbar/page";
import HeroSection from "./components/landingPage/heroSection/page";
import ServicesCard from "./components/landingPage/servicesCard/page";
import InfoCard from "./components/landingPage/infoCard/page";
import WelcomeCard from "./components/landingPage/welcomeCard/page";
import Content from "./components/landingPage/content/page";
import Footer from "./components/common/footer/page";

export default function Home() {
  return (
    <main className="">
      <Navbar isLandingPage={true} />
      <HeroSection />
      <Content />
      <ServicesCard />
      <InfoCard />
      <WelcomeCard />
      <Footer />
    </main>
  );
}
