
function gerarTabuada() {
    const numeroInput = document.getElementById('numero').value;
    const errorMessage = document.getElementById('error-message');
    const tabuadaTable = document.getElementById('tabuada');
    
 
    errorMessage.textContent = '';
    tabuadaTable.innerHTML = '';

    // Valida se é um número inteiro

    const numero = parseInt(numeroInput);
    if (isNaN(numero) || !Number.isInteger(Number(numeroInput))) {
        errorMessage.textContent = 'Por favor, insira um número inteiro válido.';
        return;
    }

    // Gera a tabuada 

    let tableContent = '<tr><th>Multiplicação</th><th>Resultado</th></tr>';
    for (let i = 1; i <= 10; i++) {
        tableContent += `<tr><td>${numero} x ${i}</td><td>${numero * i}</td></tr>`;
    }

    

    tabuadaTable.innerHTML = tableContent;
}
