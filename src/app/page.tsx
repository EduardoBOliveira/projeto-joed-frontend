import Head from "next/head";
import Icon from "@mdi/react";
import { mdiCurrencyUsd } from "@mdi/js";
import { mdiCartPlus } from "@mdi/js";
import { mdiBookOpenVariant } from "@mdi/js";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Head>
        <link rel="preconnect" href="https://fonts.google.com/" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <h1 className="text-8xl mt-8 font-lilita-one">JOED</h1>
      <h2 className="text mt-4 font-lilita-one">
        Monte seu negócio de forma simplificada
      </h2>

      <div className="flex flex-wrap justify-between mt-32">
        <a
          href="/produtos"
          className="w-52 h-52 mx-24 mb-4 rounded-lg inline-block"
        >
          <fieldset className="bg-black text-white w-full h-full flex flex-col justify-center items-center">
            <p className="text-3xl font-krona-one">Produtos</p>
            <Icon path={mdiCartPlus} size={5} />
          </fieldset>
        </a>
        <a
          href="/financas"
          className="w-52 h-52 mx-24 mb-4 rounded-lg inline-block"
        >
          <fieldset className="bg-black text-white w-full h-full flex flex-col justify-center items-center">
            <p className="text-3xl font-krona-one">Finanças</p>
            <Icon path={mdiCurrencyUsd} size={5} />
          </fieldset>
        </a>
        <a
          href="/sobre"
          className="w-52 h-52 mx-24 mb-4 rounded-lg inline-block"
        >
          <fieldset className="bg-black text-white w-full h-full flex flex-col justify-center items-center">
            <p className="text-3xl font-krona-one">Sobre</p>
            <Icon path={mdiBookOpenVariant} size={5} />
          </fieldset>
        </a>
      </div>
    </main>
  );
}
