import react from "react";
import Consulta from "./pages/Consulta/Consulta";
import Inicio from "./pages/Inicio/Inicio";
import Testes from "./pages/Testes/Testes";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/inicio" component={Inicio}></Route>
        <Route path="/consulta" component={Consulta}></Route>
        <Route path="/testes" component={Testes}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
