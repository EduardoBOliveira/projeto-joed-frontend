export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-8xl mt-8">JOED</h1>
      <h2 className="text mt-4">Monte seu negócio de forma simplificada</h2>

      <div className="flex flex-wrap justify-between mt-32">
        <a href="/produtos" className="w-52 h-52 mx-24 mb-4 rounded-lg inline-block">
          <fieldset className="bg-black text-white w-full h-full">
            <p className="text-3xl">Produtos</p>
          </fieldset>
        </a>
        <a href="/financas" className="w-52 h-52 mx-24 mb-4 rounded-lg inline-block">
          <fieldset className="bg-black text-white w-full h-full">
            <p className="text-3xl">Finaças</p>
          </fieldset>
        </a>
        <a href="/sobre" className="w-52 h-52 mx-24 mb-4 rounded-lg inline-block">
          <fieldset className="bg-black text-white w-full h-full">
            <p className="text-3xl">Sobre</p>
          </fieldset>
        </a>
      </div>
    </main>
  );
}
