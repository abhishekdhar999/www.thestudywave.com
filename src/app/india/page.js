import Navbar from "../Component/Navbar/Navbar";
import { Footer } from "../Component/Footer";
import { MissionSection } from "./our_mission";
import { VideoReviewsSection } from "../Component/VideoReviewsSection";

export default function IndiaPage() {
  const mobileBannerUrl = "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/8bdabd67fc788060a1c6737aed6e68d4273bf779/DEALS%20IN-%20OLYMPIADS%2C%20NTSE%20and%20NDA-level%20logic%20to%20SAT%20%26%20Selective%20School%20tests%2C%20COMPETITIVE%20EXAMS%20AS%20WELL.svg";
  const desktopBannerUrl = "https://raw.githubusercontent.com/imAbhishekRao/Photos_storage_for_clients/8bdabd67fc788060a1c6737aed6e68d4273bf779/%F0%9F%8C%8A%20The%20Study%20Wave%20is%20Now%20in%20India!%20%E2%9C%A8%20Join%20The%20Wave.%20Let%E2%80%99s%20Rise%20Together.%20%F0%9F%93%98%20Maths%20%20%F0%9F%94%AC%20Science%20%20%F0%9F%93%96%20English%20%20%F0%9F%8E%AF%20Olympiads%20%20%F0%9F%8C%8D%20SAT%20%F0%9F%8F%A0%20Now%20with%20Personalized%20Home%20Teaching%20&%20Online%20Support%20%F0%9F%91%89%20Learn%20Sma.svg";

  return (
    <>
      <Navbar />
      {/* Banner Section */}
      <div className="w-full pt-16">
        {/* Mobile Banner - Hidden on desktop */}
        <div className="md:hidden w-full">
          <img 
            src={mobileBannerUrl} 
            alt="The Study Wave India - Mobile Banner"
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Desktop Banner - Hidden on mobile */}
        <div className="hidden md:block w-full">
          <img 
            src={desktopBannerUrl} 
            alt="The Study Wave India - Desktop Banner"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
      
      <main className="w-full">
                    <MissionSection />
                  </main>
      <VideoReviewsSection />
      <Footer />
    </>
  );
}
