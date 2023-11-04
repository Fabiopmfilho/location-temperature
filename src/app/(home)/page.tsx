"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

const Home = () => {
  const [cep, setCep] = useState<any>();
  const [locationData, setLocationData] = useState<any>();
  const [long, getLong] = useState<WeatherProps>();

  console.log('aqui deu -> ',long?.main.temp)

  const handleSearch = () => {
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi possível obter os dados do CEP");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setLocationData(data);
        getCepInformation();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getCepInformation = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${locationData?.localidade}&units=metric&lang=pt_br&appid=8c2662ade36840563edb86e04f2ab6d1`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Não foi ler as informações de cep");
        }
        return response.json();
      })
      .then((data) => {
        console.log("info ->", data);
        getLong(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1>Location Temperature</h1>

        <div className="flex w-full p-4 gap-2 mb-3">
          <Input
            type="text"
            placeholder="CEP"
            maxLength={8}
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
          <Button type="submit" onClick={handleSearch}>
            Search
          </Button>
        </div>
      </div>

      {!locationData ? (
        <>
          <Image
            src="/assets/loading-icon.svg"
            alt="teste"
            width={200}
            height={200}
          />
          Aguardando temperatura
        </>
      ) : (
        <div className="items-start justify-start flex ">
          {locationData?.localidade}
        </div>
      )}

      

      {!long ? (
        <></>
      ) : (
        <div>
          <div>{`${Math.round(long.main.temp)}°C`}</div>
          <Image
            src={`/assets/${long?.weather[0].icon}.svg`}
            alt="teste"
            width={200}
            height={200}
          />

          <p>{long.weather[0].description}</p>
          <p>{}</p>
        </div>
      )}
    </div>
  );
};

export default Home;
