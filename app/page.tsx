import { Hero, HvorforMeg, OmMeg, CTA } from "./components";
import TreSteg from "./components/TreSteg";
import QNA from "./components/QNA";
import Transformasjon from "./components/Transformasjon";
import Omtaler from "./components/Omtaler";

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
          <HvorforMeg />
          <OmMeg />
          <Transformasjon />
          <TreSteg />
          <QNA />
          <Omtaler />
          <CTA />
        </section>
      </section>
    </main>
  );
}
