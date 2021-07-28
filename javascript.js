 
function Enviar() {

    var nome = document.getElementById("nomeid");
    var cpf = document.getElementById("cpfid");
    var rg = document.getElementById("rgid");
    var data = document.getElementById("dataid");
    var sexo = document.getElementsByName('Sexo');
    var deficiencia = document.getElementsByName('deficiência');
    var cel = document.getElementById("celid");
    var email = document.getElementById("emailid");
    var endereco = document.getElementById("enderecoid");
    var numero = document.getElementById("numeroid");
    var bairro = document.getElementById("bairroid");
    var cep = document.getElementById("cepid");
    var cidade = document.getElementById("cidadeid");
    var estado = document.getElementById("estadoid");
    
    if (nome.value != "" && cpf.value != "" && rg.value != "" && data.value != "" && sexo.value != "" && deficiencia.value != "" && cel.value != "" && email.value != "" && endereco.value != "" && numero.value != "" && bairro.value != "" && cep.value != "" && cidade.value != "" && estado.value != "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }

}
