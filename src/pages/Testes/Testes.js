import react from "react";

function Testes(){
    return(
        <div><h1>TESTES</h1>
        <button onClick = {() =>clicou()}> CLICAAAA
            </button>
            </div>
    );
}

function clicou(){
    console.log(pessoa.idade++);
}

const pessoa = {
    nome: "Gabriel",
    idade: 19,
    altura: 1.88,
    curso: "Engenharia"
};

export default Testes;