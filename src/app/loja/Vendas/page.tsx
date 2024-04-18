import Cardapio from "@/components/Cardapio";
import NavBar from "@/components/NavBar";
import Link from "next/link";

export default function Produtos() {
  return (
    <main className="flex min-h-screen flex-col">
      <NavBar active="produtos" />
      <Cardapio />
    </main>
  );
}
