"use client";

import { useState } from "react";
import Image from "next/image";

import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FooterInformation from "./components/footer-information";

const Home = () => {
  const [cepInput, setCepInput] = useState("");
  const [location, getLocation] = useState<WeatherProps>();

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cepInput}&units=metric&lang=pt_br&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Não foi possível ler as informações de cep");
      }

      const data = await response.json();
      getLocation(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="px-6 h-screen lg:px-10">
      <div className="max-h-[844px] overflow-hidden">
        <div className="w-full flex flex-col">
          <div className="flex items-center gap-2 mb-3 mt-3 lg:w-96">
            <Input
              type="text"
              placeholder="Cidade"
              value={cepInput}
              onChange={(e) => setCepInput(e.target.value)}
              className="bg-white"
            />
            <Button
              type="submit"
              onClick={handleSearch}
              className="rounded-full w-14 h-14"
            >
              <SearchIcon size={24} />
            </Button>
          </div>
        </div>

        {!location ? (
          <div className="flex flex-col justify-center items-center gap-4">
            <Image
              src="/assets/loading-icon.svg"
              alt="teste"
              width={200}
              height={200}
            />
            <p>Aguardando temperatura...</p>
          </div>
        ) : (
          <div className="flex flex-col">
            <p className="font-bold text-lg">{location?.name}</p>
            <p className="text-gray-400">{location?.sys.country}</p>

            <div className="flex flex-col justify-center items-center gap-5 mt-20">
              <Image
                src={`/assets/${location?.weather[0].icon}.svg`}
                alt="teste"
                width={200}
                height={200}
              />

              <p className="text-violet-400 font-bold text-2xl">
                {location.weather[0].description}
              </p>
            </div>

            <div className="flex flex-col items-center mt-3 gap-2">
              <p className="text-violet-400">Tempo agora</p>
              <p className="text-3xl">{`${Math.round(
                location.main.temp
              )} °C`}</p>
            </div>
          </div>
        )}
      </div>

      <FooterInformation
        speed={location?.wind.speed}
        sensation={location?.main.feels_like}
        humidity={location?.main.humidity}
        sunrise={location?.sys.sunrise}
        sunset={location?.sys.sunset}
      />
    </div>
  );
};

export default Home;
