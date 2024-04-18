import Link from "next/link";

export default function Cardapio(){
    return(
    <div className="flex flex-1 items-start">
        <fieldset className="bg-white text-black text-2xl flex flex-col h-full w-64">
          <nav className="">
            <ul className="flex flex-col gap-20 mt-20 mb-96 ml-2">
              <li>
                <Link href="/loja">Loja</Link>
              </li>
              <li>
                <Link href="/loja/produtos">Produtos</Link>
              </li>
              <li>
                <Link href="/loja/CadastrarProdutos">Cadastrar Produtos</Link>
              </li>
              <li>
                <Link href="/loja/Vendas">Vendas</Link>
              </li>
              <li>
                <Link href="/loja/analises">Analises</Link>
              </li>
              <li>
                <Link href="/loja/promocoes">Promoções</Link>
              </li>
            </ul>
          </nav>
        </fieldset>
      </div>
      )
}