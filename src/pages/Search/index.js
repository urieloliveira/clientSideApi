import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";

import { apiFipe } from "../../services/api";

import { Container } from "./styles";

function Search() {
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);
  const [veiculo, setVeiculo] = useState({});

  async function getMarcas() {
    try {
      const res = await apiFipe.get("/carros/marcas");
      setMarcas(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getModelos(marcaId) {
    try {
      const res = await apiFipe.get(`/carros/marcas/${marcaId}/modelos`);
      setModelos(res.data.modelos);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAnos(marcaId, modeloId) {
    try {
      const res = await apiFipe.get(
        `/carros/marcas/${marcaId}/modelos/${modeloId}/anos/`
      );
      setAnos(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getVeiculo(marcaId, modeloId, anoId) {
    try {
      const res = await apiFipe.get(
        `/carros/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`
      );
      setVeiculo(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMarcas();
  }, []);

  return (
    <Container>
      {marcas.map((marca) => (
        <Button
          variant="contained"
          key={marca.codigo}
          onClick={() => getModelos(marca.codigo)}
        >
          {marca.nome}
        </Button>
      ))}
      <br /> <br /> <br /> <br />
      {modelos.map((modelo) => (
        <Button variant="contained" key={modelo.codigo}>
          {modelo.nome}
        </Button>
      ))}
      {/* {anos.map((ano) => (
        <Button variant="contained" key={ano.codigo}>
          {ano.nome}
        </Button>
      ))}

      <Button variant="contained" key={veiculo.codigo}>
        {veiculo.nome}
      </Button> */}
    </Container>
  );
}

export default Search;
