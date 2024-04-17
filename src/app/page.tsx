

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-8xl mt-8">JOED</h1>
      <h2 className="text mt-4">Monte seu negócio de forma simplificada</h2>

      <div className="flex flex-wrap justify-between mt-32">
        <fieldset className="bg-black text-white inline-block w-52 h-52 mx-24 mb-4 rounded-lg">
          <p className="text-3xl">Produtos</p>
        </fieldset>
        <fieldset className="bg-black text-white inline-block w-52 h-52 mx-24 mb-4 rounded-lg">
        <p>Rentabilidade</p>
        </fieldset>
        <fieldset className="bg-black text-white inline-block w-52 h-52 mx-24 mb-4 rounded-lg">
        <p>Sobre</p>
        </fieldset>
      </div>

      
      
    </main>
  );
}
