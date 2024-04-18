import Head from "next/head";
import Icon from "@mdi/react";
import { mdiCurrencyUsd } from "@mdi/js";
import { mdiCartPlus } from "@mdi/js";
import { mdiBookOpenVariant } from "@mdi/js";
import Link from "next/link";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      
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
      <div className="text-center">
        <h1 className="text-8xl mt-8 font-lilita-one text-violet-950">JOED</h1>
        <h2 className="mt-4 font-lilita-one text-violet-950">
          Monte seu negócio de forma simplificada
        </h2>
      </div>
      <div className="flex flex-wrap justify-between mt-32">
        <Link href="/loja" passHref>
          <fieldset className="bg-violet-900 text-violet-50 w-52 h-52 mx-24 mb-4  linline-block flex flex-col justify-center items-center rounded-3xl shadow-2xl">
            <p className="text-3xl font-krona-one">Loja</p>
            <Icon path={mdiCartPlus} size={5} />
          </fieldset>
        </Link>
        <Link href="/financas" passHref>
          <fieldset className="bg-violet-900 text-violet-50 w-52 h-52 mx-24 mb-4  linline-block flex flex-col justify-center items-center rounded-3xl shadow-2xl">
            <p className="text-3xl font-krona-one">Finanças</p>
            <Icon path={mdiCurrencyUsd} size={5} />
          </fieldset>
        </Link>
        <Link href="/sobre" passHref>
          <fieldset className="bg-violet-900 text-violet-50 w-52 h-52 mx-24 mb-4  linline-block flex flex-col justify-center items-center rounded-3xl shadow-2xl">
            <p className="text-3xl font-krona-one">Sobre</p>
            <Icon path={mdiBookOpenVariant} size={5} />
          </fieldset>
        </Link>
      </div>
    </main>
  );
}
