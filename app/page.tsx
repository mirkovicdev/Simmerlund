import { ToastProvider } from "@/components/ui/toast";
import {
  Navbar,
  Hero,
  Stats,
  Billing,
  Business,
  CardDeal,
  Testimonials,
  Clients,
  CTA,
  Footer,
} from "./components";
import Approach from "./components/Approach";
import QNA from "./components/QNA";

export default function Home() {
  return (
      <main className=" bg-primary w-full overflow-hidden font-poppins">
        <header className="paddingX flexCenter">
          <nav className="boxWidth">
            <Navbar />
          </nav>
        </header>
        <section className=" bg-primary flexStart">
          <section className="boxWidth">
            <Hero />
          </section>
        </section>
        <section className=" bg-primary paddingX flexStart">
          <section className="boxWidth">
            <Billing />
            <Business />
            <Approach />
            <QNA />
            <Testimonials />
            <CTA />
            <Footer />
          </section>
        </section>
      </main>
  );
}
