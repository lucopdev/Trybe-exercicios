let systemStatus = 'desligado';
let aceleracao = 0;
let rotacaoDoVolante = 0;
let farois = 'Desligados';

function chave() {
    if (systemStatus === 'desligado') {
        systemStatus = 'ligado';
    } else {
        systemStatus = 'Desligado';
    }
    return `O carro está ${systemStatus}`;
}

function acelerador(incremento) {
    aceleracao += incremento;

    return `O carro acelerou para ${aceleracao}m/s`;
}

function freio(incremento) {
    aceleracao -= incremento;

    return `O carro desacelerou para ${aceleracao}m/s`;
}

function volante(grau) {
    rotacaoDoVolante = grau;

    return `O volante foi virado para ${rotacaoDoVolante}º`;
}

function ligarLuzes () {
    if(farois === 'Desligados'){
        farois = 'Ligados';
    }else{
        farois = 'Desligados';
    }

    return `Os farois estão ${farois}`;
}


console.log(chave());

console.log(ligarLuzes());

console.log(acelerador(50));

console.log(freio(20));

console.log(volante(25));

console.log(volante(0));

console.log(acelerador(50));

console.log(freio(80));

console.log(ligarLuzes());

console.log(chave());

