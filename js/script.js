function generatePDF() {
    const content = document.querySelector('#content');

    const options = {
        margin: 0,
        filename: 'rotulo.pdf',
        image: { type: 'png', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true, scrollY: 0},
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    preparatePDF();
    html2pdf().set(options).from(content).save();
}

function preparatePDF() {
    // Porção
    document.getElementById('porcao').innerHTML = document.getElementById('floatingPorcao').value ? document.getElementById('floatingPorcao').value + " " + document.getElementById('optionPorcao').value : "200" + document.getElementById('optionPorcao').value;

    // Calorias
    document.getElementById('calorias').innerHTML = document.getElementById('floatingCalorias').value ? document.getElementById('floatingCalorias').value + " " + document.getElementById('optionCalorias').value : "0" + " " + document.getElementById('optionCalorias').value;

    // Carboidratos
    document.getElementById('carboidratos').innerHTML = document.getElementById('floatingCarboidratos').value ? document.getElementById('floatingCarboidratos').value + " " + document.getElementById('optionCarboidratos').value : "0" + " " + document.getElementById('optionCarboidratos').value;

    // Acucares Totais
    document.getElementById('acucarTotal').innerHTML = document.getElementById('floatingAcucarTotal').value ? document.getElementById('floatingAcucarTotal').value + " " + document.getElementById('optionAcucarTotal').value : "0" + " " + document.getElementById('optionAcucarTotal').value;

    // Acucares adicionados
    document.getElementById('acucar').innerHTML = document.getElementById('floatingAcucar').value ? document.getElementById('floatingAcucar').value + " " + document.getElementById('optionAcucar').value : "0" + " " + document.getElementById('optionAcucar').value;

    // Proteínas
    document.getElementById('proteinas').innerHTML = document.getElementById('floatingProteinas').value ? document.getElementById('floatingProteinas').value + " " + document.getElementById('optionProteinas').value : "0" + " " + document.getElementById('optionProteinas').value;

    // Gorduras Totais
    document.getElementById('gordTotal').innerHTML = document.getElementById('floatingGordTotal').value ? document.getElementById('floatingGordTotal').value + " " + document.getElementById('optionGordTotal').value : "0" + " " + document.getElementById('optionGordTotal').value;

    // Gorduras Saturadas
    document.getElementById('gordSaturadas').innerHTML = document.getElementById('floatingGordSaturadas').value ? document.getElementById('floatingGordSaturadas').value + " " + document.getElementById('optionGordSaturadas').value : "0" + " " + document.getElementById('optionGordSaturadas').value;

    // Gorduras Trans
    document.getElementById('gordTrans').innerHTML = document.getElementById('floatingGordTrans').value ? document.getElementById('floatingGordTrans').value + " " + document.getElementById('optionGordTrans').value : "0" + " " + document.getElementById('optionGordTrans').value;

    // Fibras
    document.getElementById('fibras').innerHTML = document.getElementById('floatingFibras').value ? document.getElementById('floatingFibras').value + " " + document.getElementById('optionFibras').value : "0" + " " + document.getElementById('optionFibras').value;

    // Sódio
    document.getElementById('sodio').innerHTML = document.getElementById('floatingSodio').value ? document.getElementById('floatingSodio').value + " " + document.getElementById('optionSodio').value : "0" + " " + document.getElementById('optionSodio').value;

    // Email
    document.getElementById('email').innerHTML = document.getElementById('floatingEmail').value ? document.getElementById('floatingEmail').value : "minhaempresa@exemplo.com";

    // Validade
    document.getElementById('val').innerHTML = document.getElementById('floatingVal').value ? reformatDate(document.getElementById('floatingVal').value) : "00/00/0000";

    // Fabricação
    document.getElementById('fab').innerHTML = document.getElementById('floatingFab').value ? reformatDate(document.getElementById('floatingFab').value) : "00/00/0000";

    document.getElementById('preview').classList.remove('d-none');

    const gridRotulos = document.getElementById("gridRotulos");
    const rotulo = document.getElementById("rotulo");
    document.querySelectorAll('#rotulo').forEach(e => e.remove());
    for (let i = 0; i < 8; i++) {
        const clone = rotulo.cloneNode(true);
        gridRotulos.appendChild(clone);
    }
}

function toTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function reformatDate(dateStr){
  var dArr = dateStr.split("-");  // ex input: "2010-01-18"
  return dArr[2]+ "/" +dArr[1]+ "/" +dArr[0]; //ex output: "18/01/2010"
}

function exibirImagem() {
    const imagemInput = document.getElementById('imagemInput');
    const imagemExibida = document.getElementById('imagemExibida');

    const arquivo = imagemInput.files[0];

    if (arquivo) {
        const reader = new FileReader();

        reader.onload = function(e) {
            imagemExibida.src = e.target.result;
        };

        reader.readAsDataURL(arquivo);
    } else {
        imagemExibida.src = 'https://labelrotulos.pages.dev/img/label-logo.png';
    }
}

function changeBackgroundColor() {
    const color = document.getElementById('colorInput').value;
    console.log(color)
    document.getElementById('content').style.backgroundColor = color;
}

function unlockProFeatures() {
    document.getElementById('pro-features').disabled = false;
    document.getElementById('anuncio-label').remove();
}