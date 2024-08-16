import { ToastProvider } from "@/components/ui/toast";
import {
  Navbar,
  Hero,
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
import Transformasjon from "./components/Transformasjon";

export default function Home() {
  return (
      <main className=" bg-primary w-full font-poppins">
        <section className=" bg-primary flexStart">
          <section className="boxWidth">
            <Hero />
          </section>
        </section>
        <section className=" bg-primary paddingX flexStart">
          <section className="boxWidth">
            <Billing />
            <Business />
            <Transformasjon />
            <Approach />
            <QNA />
            <Testimonials />
            <CTA />
          </section>
        </section>
      </main>
  );
}
