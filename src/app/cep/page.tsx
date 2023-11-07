"use client";

import AwaitInformationBlock from "@/components/await-information-block";
import SearchBlock from "@/components/search-block";
import { useState } from "react";

const CepPage = () => {
  const [cepInput, setCepInput] = useState("");
  const [cepInformation, setCepInformation] = useState<Cep | null>(null);

  const formatedCityInput = cepInput.replace(/[.-]/g, "")

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${formatedCityInput}/json/`
      );

      if (!response.ok) {
        throw new Error("Não foi possível ler as informações de cep");
      }

      const data = await response.json();
      setCepInformation(data);
    } catch (error) {
      console.error("An error occurred while fetching weather data:", error);
    }
  };

  return (
    <div className="px-6 h-screen">
      <SearchBlock
        inputValue={cepInput}
        handleSearch={handleSearch}
        setInput={setCepInput}
        placeholder="Cep"
      />

      {!cepInformation ? (
        <AwaitInformationBlock
          src="/assets/loading-icon.svg"
          alt="Aguardando cep"
          description="Aguardando Cep..."
        />
      ) : (
        <div className="flex flex-col items-center mt-8">
          <div>
            <h1 className="text-2xl">
              {cepInformation.localidade} - {cepInformation.uf}
            </h1>

            {!cepInformation.logradouro ? (
              <p>Rua: N/A</p>
            ) : (
              <p>Rua: {cepInformation.logradouro}</p>
            )}

            {!cepInformation.complemento ? (
              <p>Complemento: N/A</p>
            ) : (
              <p>Complemento: {cepInformation.complemento}</p>
            )}

            <p>DDD ({cepInformation.ddd})</p>
            <p>Ibge {cepInformation.ibge}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CepPage;
