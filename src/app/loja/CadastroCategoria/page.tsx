import NavBar from "@/components/NavBar";
import Cardapio from "@/components/Cardapio";
import Rodape from "@/components/Rodape";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar active="loja" />
      <Cardapio />
      <Rodape/>
    </main>
  );
}
