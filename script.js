const json = '{"nome": "Shawn Mendes", "profissao": "Cantor / Compositor / Ator", "idade": "24"}';

const ficha = JSON.parse(json);

console.log(ficha)

function myFunction(){
    document.getElementById("nome").innerHTML = `Nome: ` + ficha.nome;
    document.getElementById("profissao").innerHTML = `Profissao: ` + ficha.profissao;
    document.getElementById("idade").innerHTML = `Idade: ` + ficha.idade;
}

const json2 = '{"nome2": "Selena Gomez", "profissao2": "Cantora / Compositora / Atriz", "idade2": "30"}';

const ficha2 = JSON.parse(json2);

console.log(ficha2)

function myFunction2(){
    document.getElementById("nome2").innerHTML = `Nome: ` + ficha2.nome2;
    document.getElementById("profissao2").innerHTML = `Profissao: ` + ficha2.profissao2;
    document.getElementById("idade2").innerHTML = `Idade: ` + ficha2.idade2;
}

const json3 = '{"nome3": "Lady Gaga", "profissao3": "Cantora / Compositora / Atriz", "idade3": "36"}';

const ficha3 = JSON.parse(json3);

console.log(ficha3)

function myFunction3(){
    document.getElementById("nome3").innerHTML = `Nome: ` + ficha3.nome3;
    document.getElementById("profissao3").innerHTML = `Profissao: ` + ficha3.profissao3;
    document.getElementById("idade3").innerHTML = `Idade: ` + ficha3.idade3;
}