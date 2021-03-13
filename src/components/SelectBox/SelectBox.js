import react from "react";
import { NativeSelect } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";
import "./SelectBox.css";

function SelectBox() {
  return (
    <div>
      <div classname="SelectionBox">
        <Autocomplete
          className="inputPlanos"
          id="combo-box-demo"
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
];

export default SelectBox;
