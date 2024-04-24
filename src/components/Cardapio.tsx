import Link from "next/link";

export default function Cardapio() {
  return (
    <div className="flex flex-1 items-start">
      <fieldset className="bg-gradient-to-b from-purple-500 to-blue-500 text-white text-2xl flex flex-col h-full w-64 rounded-md">
        <nav className="">
          <ul className="flex flex-col gap-20 mt-20 mb-96 ml-2">
            <li className="hover:bg-gray-300"> {/* Adicione a classe hover:text-gray-300 aqui */}
              <Link href="/loja">Loja</Link>
            </li>
            <li className="hover:bg-gray-300"> {/* Adicione a classe hover:text-gray-300 aqui */}
              <Link href="/loja/produtos">Produtos</Link>
            </li>
            <li className="hover:bg-gray-300"> {/* Adicione a classe hover:text-gray-300 aqui */}
              <Link href="/loja/CadastrarProdutos">Cadastrar Produtos</Link>
            </li>
            <li className="hover:bg-gray-300"> {/* Adicione a classe hover:text-gray-300 aqui */}
              <Link href="/loja/Vendas">Vendas</Link>
            </li>
            <li className="hover:bg-gray-300"> {/* Adicione a classe hover:text-gray-300 aqui */}
              <Link href="/loja/analises">Analises</Link>
            </li>
            <li className="hover:bg-gray-300"> {/* Adicione a classe hover:text-gray-300 aqui */}
              <Link href="/loja/promocoes">Promoções</Link>
            </li>
          </ul>
        </nav>
      </fieldset>
    </div>
  );
}
