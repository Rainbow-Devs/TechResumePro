<<<<<<< HEAD
const LandingPage = () => {
  return (
    <div>
      <h1>Landing Page</h1>
    </div>
  );
};

export default LandingPage;
=======
import Navigation from "./Navigation"
import BannerCard from "./BannerCard"
import WhyTechResume from "./WhyTechResume"
import HereToHelp from "./HereToHelp"

function LandingPage() {
  return ( 
    <>
    <Navigation />
    <BannerCard />
    <WhyTechResume />
    <HereToHelp />
    </>
  )
}

export default LandingPage
>>>>>>> 59973ca (Add LandingPage component and Navigation component)
