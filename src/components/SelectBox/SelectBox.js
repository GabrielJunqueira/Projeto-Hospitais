import react from "react";
import { NativeSelect } from "@material-ui/core";
import { Select } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import { MenuItem } from "@material-ui/core";
import './SelectBox.css'

function SelectBox() {
  return (
    <div className = "SelectionBox">
      <InputLabel id="label">Tipo de Atendimento</InputLabel>
      <Select id="select" value="100">
        <MenuItem value="1">Atendimento 1</MenuItem>
        <MenuItem value="2">Atendimento 2</MenuItem>
        <MenuItem value="3">Atendimento 3</MenuItem>
        <MenuItem value="4">Atendimento 4</MenuItem>
        <MenuItem value="5">Atendimento 5</MenuItem>
      </Select>
    </div>
  );
}

export default SelectBox;
