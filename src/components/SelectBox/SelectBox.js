import React, { useState } from "react";
import { Button, NativeSelect } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import "./SelectBox.css";
import { Link } from "react-router-dom";

function SelectBox() {
  const [plano, setPlano] = useState();
  const [regiao, setRegiao] = useState();

  return (
    <div>
      <div classname="SelectionBox">
        {/*selecionar região de BH*/}
        <div className="autoCampo">
          <Autocomplete
            className="inputPlanos"
            id="combo-box-demo"

            plano={plano}
            onChange={(event, newPlano) => {
              setPlano(newPlano);
            }}
            
            options={planosList}
            getOptionLabel={(option) => option.plano}
            style={{ width: 600 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Selecione o seu plano de saúde"
                variant="outlined"
              />
            )}
          />
        </div>

        {/*selecionar região de BH*/}
        <div className="autoCampo">
          <Autocomplete
            className="inputPlanos"
            regiao={regiao}

            onChange={(event, newRegiao) => {
              setRegiao(newRegiao);
            }}
            id="combo-box-demo"
            options={regionList}
            getOptionLabel={(option) => option.regiao}

            style={{ width: 600 }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Selecione a região de Belo Horizonte"
                variant="outlined"
              />
            )}
          />
        </div>
      </div>
      <div className="searchButton">
        <Button
          id="pesquisar"
          className="btn btn-outline-danger"
          to={{
            pathname: "/consulta",
          }}
        >
          Procurar Hospitais
        </Button>
      </div>
      <div>
     { /*  <p> {`plano: ${plano.plano}`}</p>  */}
      </div>
      <div>
      { /*  <p>{`regiao: ${regiao.regiao}`}</p> */}
      </div>
    </div>
  );
}

const planosList = [
  { plano: "Allianz" },
  { plano: "Amil" },
  { plano: "Bradesco" },
  { plano: "Golden Cross" },
  { plano: "MedSênior" },
  { plano: "Promed" },
  { plano: "Sulamerica" },
  { plano: "Unimed" },
  { plano: "Vitallis" },
  { plano: "SEM PLANO DE SAÚDE" }
];

const regionList = [
  { regiao: "Barreiro" },
  { regiao: "Centro-Sul" },
  { regiao: "Leste" },
  { regiao: "Nordeste" },
  { regiao: "Noroeste" },
  { regiao: "Norte" },
  { regiao: "Oeste" },
  { regiao: "Pampulha" },
  { regiao: "Venda Nova" },
];

export default SelectBox;
