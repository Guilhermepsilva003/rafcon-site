import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Servicos from "./components/Servicos";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Contato />
    </main>
  );
}
