import Link from "next/link";

interface NavBarProps {
  active: "home" | "loja" | "financas" | "sobre"
}

export default function NavBar({active}: NavBarProps) {
  const classActive = "border-b-4 pb-4 border-pink-600"

  return (
    <nav className="flex w-full justify-between items-center px-6 py-4">
      <h1 className="text-6xl font-bold">Joed</h1>
      <ul className="flex gap-6 justify-center flex-grow">
        <li className={active == "home"? classActive : ""}>
          <Link className="text-2xl" href="/">Home</Link>
        </li>
        <li className={active == "loja"? classActive : ""}>
          <Link className="text-2xl" href="/loja">Loja</Link>
        </li>
        <li className={active == "financas"? classActive : ""}>
          <Link className="text-2xl" href="/financas">Finança</Link>
        </li>
        <li className={active == "sobre"? classActive : ""}>
            <Link className="text-2xl" href="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  )
}