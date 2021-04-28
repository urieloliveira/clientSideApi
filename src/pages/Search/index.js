import React, { useState } from "react";

import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  ButtonGroup,
} from "@material-ui/core";

import { apiFipe } from "../../services/api";
import { logout } from "../../services/auth";

import { Container } from "./styles";
import zIndex from "@material-ui/core/styles/zIndex";


function Search(props) {
  const [vehicle, setVehicle] = useState({
    type: "",
    marca: "",
    modelo: "",
    ano: "",
  });
  const [marcas, setMarcas] = useState([]);
  const [modelos, setModelos] = useState([]);
  const [anos, setAnos] = useState([]);
  const [veiculo, setVeiculo] = useState();

  async function getMarcas(type) {
    try {
      const res = await apiFipe.get(`/${type}/marcas`);
      setMarcas(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getModelos(type, marcaId) {
    try {
      const res = await apiFipe.get(`/${type}/marcas/${marcaId}/modelos`);
      setModelos(res.data.modelos);
    } catch (err) {
      console.log(err);
    }
  }

  async function getAnos(type, marcaId, modeloId) {
    try {
      const res = await apiFipe.get(
        `/${type}/marcas/${marcaId}/modelos/${modeloId}/anos`
      );
      setAnos(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  async function getVeiculo(type, marcaId, modeloId, anoId) {
    try {
      const res = await apiFipe.get(
        `/${type}/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`
      );
      setVeiculo(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div style={{position:"absolute", width:'100%',zIndex:'1',height:'1300px', backgroundColor:'#FFFFFF',  top:'0', display:props.openSearch? 'flex':'none'}}>
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
    </div>
  );
}

export default Search;
