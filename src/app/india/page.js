import Navbar from "../Component/Navbar/Navbar";
import { Footer } from "../Component/Footer";
import { MissionSection } from "./our_mission";

export default function IndiaPage() {
  return (
    <>
      <Navbar />
                        <main className="w-full pt-24">
                    <MissionSection />
                  </main>
      <Footer />
    </>
  );
}
