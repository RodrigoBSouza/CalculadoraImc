const form = document.querySelector('#formImc');

form.addEventListener('submit', function(e) {
    e.preventDefault();
});

function result() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const inputWeight = document.getElementById('weight').value;
    const inputHeight = document.getElementById('height').value;
    const imc = (weight / (height * height)).toFixed(2);
    
    if(imc < 18.5) {
        document.getElementById('imc').innerHTML = "Seu IMC é "+imc+"!"+ " Você está abaixo do peso!";
    } else if(imc === 18.5 || imc <= 24.9) {
        document.getElementById('imc').innerHTML = "Seu IMC é "+imc+"!"+ " Você está no seu peso ideal!";
    } else if(imc === 25.0 || imc <= 29.9) {
        document.getElementById('imc').innerHTML = "Seu IMC é "+imc+"!"+ " Você está acima do peso!";
    } else if(imc === 30.0 || imc <= 34.9) {
        document.getElementById('imc').innerHTML = "Seu IMC é "+imc+"!"+ " Atenção! Obesidade grau 1!";
    } else if(imc === 35.0 || imc <= 39.9) {
        document.getElementById('imc').innerHTML = "Seu IMC é "+imc+"!"+ " Atenção! Obesidade grau 2!";
    } else {
        document.getElementById('imc').innerHTML = "Seu IMC é "+imc+"!"+ " Atenção! Obesidade grau 3!";
    }

    if(inputWeight === "" || inputWeight === null) {
        document.getElementById('imc').innerHTML = "Digite o peso!";
    } else if(inputHeight === "" || inputWeight === null) {
        document.getElementById('imc').innerHTML = "Digite a altura!";
    }
}

function cleaner() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';

    const cleanerImc = document.getElementById('imc');

    if(cleanerImc !== '') {
        document.getElementById('imc').innerHTML = '';
    }
}