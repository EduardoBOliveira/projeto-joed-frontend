import Link from "next/link";

interface NavBarProps {
  active: "home" | "produtos" | "financas" | "sobre"
}

export default function NavBar({active}: NavBarProps) {
  const classActive = "border-b-4 pb-4 border-pink-600"

  return (
    <nav className="flex bg-slate-900 w-full justify-between items-center px-6 py-4">
      <h1 className="text-4xl font-bold">Budget Buddy</h1>
      <ul className="flex gap-6">
        <li className={active == "home"? classActive : ""}>
          <Link href="/">home</Link>
        </li>
        <li className={active == "produtos"? classActive : ""}>
          <Link href="/produtos">produtos</Link>
        </li>
        <li className={active == "financas"? classActive : ""}>
          <Link href="/financas">finança</Link>
        </li>
        <li className={active == "sobre"? classActive : ""}>
            <Link href="/sobre">sobre</Link>
        </li>
      </ul>
    </nav>
  )
}