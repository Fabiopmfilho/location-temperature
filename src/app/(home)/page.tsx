"use client";

import { useState } from "react";
import Image from "next/image";

import FooterInformation from "./components/footer-information";
import SearchBlock from "@/components/search-block";
import AwaitInformationBlock from "@/components/await-information-block";

const Home = () => {
  const [cityInput, setCepInput] = useState("");
  const [location, setLocation] = useState<WeatherProps | null>(null);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&units=metric&lang=pt_br&appid=${process.env.NEXT_PUBLIC_API_KEY}`
      );

      if (!response.ok) {
        throw new Error("Não foi possível ler as informações de cep");
      }

      const data = await response.json();
      setLocation(data);
    } catch (error) {
      console.error("An error occurred while fetching weather data:", error);
    }
  };

  return (
    <div className="px-6 h-screen lg:px-10">
      <div className="max-h-[844px] overflow-hidden">
        <SearchBlock
          inputValue={cityInput}
          handleSearch={handleSearch}
          setInput={setCepInput}
          placeholder="Cidade"
        />

        {!location ? (
          <AwaitInformationBlock
            src="/assets/loading-icon.svg"
            alt="Aguardando temperatura"
            description="Aguardando temperatura..."
          />
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
