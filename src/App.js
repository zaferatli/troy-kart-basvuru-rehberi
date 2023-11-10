import { useState } from "react";
import Header from "./components/header";
import Body from "./components/body";
import FAQ from "./components/faq";

export default function Example() {
  const [selected, setSelected] = useState({});

  return (
    <div className="flex items-center justify-center pb-16 bg-gray-700 h-screen w-screen overflow-y-auto">
      <div className="top-8 w-72">
        <h1 className="text-white text-2xl text-center mb-8">
          Troy Kart Başvuru Rehberi
        </h1>
        <p class="text-sm font-semibold text-gray-400 mb-8 text-center">
          Bu sitenin amacı sizlere bankalar özelinde Troy karta
          başvurabileceğiniz en hızlı yolu göstermektir. Bankayı seçtikten sonra
          Troy kart başvuru yöntemlerine ulaşacaksınız.
        </p>
        <Header handleSelect={(selectedBank) => setSelected(selectedBank)} />
        {selected?.troyMethods && <Body selected={selected} />}
        <FAQ />
      </div>
    </div>
  );
}
