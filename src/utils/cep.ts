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