import react from "react";
import Testes2 from "../Testes2/Testes2"

function Testes(){
    return(
       <Testes2 person={pessoa}/>
    );
}

const pessoa = {
    nome: "Gabriel",
    idade: 19,
    altura: 1.88,
    curso: "Engenharia"
};

export default Testes;