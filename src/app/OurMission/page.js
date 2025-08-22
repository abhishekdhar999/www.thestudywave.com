import Navbar from "../Component/Navbar/Navbar";
import { Footer } from "../Component/Footer";
import { MissionSection } from "./our_mission";

export default function OurMissionPage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <MissionSection />
        <Footer />
      </main>
    </>
  );
}