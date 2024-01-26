"use client";

import Image from "next/image";
import Cards from "./components/CharacterCard";
import { SWRProvider } from "./swr-provider";
import SpellCard from "./components/SpellCard";

export default function Home() {
  return (
    <SWRProvider>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 gap-6">
        <p className="mb-4 text-2xl font-bold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Anything about&nbsp;
          <span className="underline underline-offset-3 decoration-8 decoration-red-800 dark:decoration-red-800">
            Harry Potter
          </span>
        </p>
        <SpellCard />
        <Cards />
      </main>
    </SWRProvider>
  );
}
