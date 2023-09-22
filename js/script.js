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
    const inputs = document.querySelectorAll('.form-control')
    const selects = document.querySelectorAll('.form-select')
    const labels = document.querySelectorAll('.form-label')
    const previewFields = document.querySelectorAll('.preview-field')

    // previewFields.forEach(field => {
    //     field.innerHTML = inputs[field.id].value ? inputs[field.id].value : "0" + " " + selects[field.id].value;
    //     console.log(field.id);
    // })

    // Calorias
    document.getElementById('calorias').innerHTML = document.getElementById('floatingCalorias').value ? document.getElementById('floatingCalorias').value + " " + document.getElementById('optionCalorias').value : "0" + " " + document.getElementById('optionCalorias').value;

    // Carboidratos
    document.getElementById('carboidratos').innerHTML = document.getElementById('floatingCarboidratos').value ? document.getElementById('floatingCarboidratos').value + " " + document.getElementById('optionCarboidratos').value : "0" + " " + document.getElementById('optionCarboidratos').value;

    // Proteínas
    document.getElementById('proteinas').innerHTML = document.getElementById('floatingProteinas').value ? document.getElementById('floatingProteinas').value + " " + document.getElementById('optionProteinas').value : "0" + " " + document.getElementById('optionProteinas').value;

    // Gorduras Saturadas
    document.getElementById('gordSaturadas').innerHTML = document.getElementById('floatingGordSaturadas').value ? document.getElementById('floatingGordSaturadas').value + " " + document.getElementById('optionGordSaturadas').value : "0" + " " + document.getElementById('optionGordSaturadas').value;

    // Gorduras Insaturadas
    document.getElementById('gordInsaturadas').innerHTML = document.getElementById('floatingGordInsaturadas').value ? document.getElementById('floatingGordInsaturadas').value + " " + document.getElementById('optionGordInsaturadas').value : "0" + " " + document.getElementById('optionGordInsaturadas').value;

    // Gorduras Trans
    document.getElementById('gordTrans').innerHTML = document.getElementById('floatingGordTrans').value ? document.getElementById('floatingGordTrans').value + " " + document.getElementById('optionGordTrans').value : "0" + " " + document.getElementById('optionGordTrans').value;

    // Fibras
    document.getElementById('fibras').innerHTML = document.getElementById('floatingFibras').value ? document.getElementById('floatingFibras').value + " " + document.getElementById('optionFibras').value : "0" + " " + document.getElementById('optionFibras').value;

    // Acucar
    document.getElementById('acucar').innerHTML = document.getElementById('floatingAcucar').value ? document.getElementById('floatingAcucar').value + " " + document.getElementById('optionAcucar').value : "0" + " " + document.getElementById('optionAcucar').value;

    // Sódio
    document.getElementById('sodio').innerHTML = document.getElementById('floatingSodio').value ? document.getElementById('floatingSodio').value + " " + document.getElementById('optionSodio').value : "0" + " " + document.getElementById('optionSodio').value;

    // Colesterol
    document.getElementById('colesterol').innerHTML = document.getElementById('floatingColesterol').value ? document.getElementById('floatingColesterol').value + " " + document.getElementById('optionColesterol').value : "0" + " " + document.getElementById('optionColesterol').value;

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