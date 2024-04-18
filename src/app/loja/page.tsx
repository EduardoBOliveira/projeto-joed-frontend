import Cardapio from "@/components/Cardapio";
import NavBar from "@/components/NavBar";
import Rodape from "@/components/Rodape";
import Link from "next/link";

export default function Produtos() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar active="loja" />
      <Cardapio />
      <Rodape/>
    </main>
  );
}
