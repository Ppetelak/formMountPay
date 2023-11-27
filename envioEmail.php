<?php

header('Content-Type: application/json');

if(isset($_POST['nome']) && !empty(($_POST['nome']))){

    $nome = addslashes($_POST['nome']);
    $telefone = addslashes($_POST['telefone']);
    $email = addslashes($_POST['email']);
    $cidade = addslashes($_POST['cidade']);
    $idadePf = addslashes($_POST['idadePf']);
    $idades = addslashes($_POST['idadesPorVirgula']);
    $funcionariosQtd = addslashes($_POST['funcionariosQtd']);
    $praQuemPlano = addslashes($_POST['praQuemPlano']);
    $tipoDePlano = addslashes($_POST['tipoDePlano']);
    $possuiPlano = addslashes($_POST['possuiPlano']);
    $qualPlanoPossui = addslashes($_POST['qualPlanoPossui']);
    $funcaoNaEmpresa = addslashes($_POST['funcaoNaEmpresa']);
    $url_atual = addslashes($_POST['url_atual']);
    
    $to = "p.petelak@gmail.com";
    $subject = utf8_decode("Formulário AllCross");
    $body = "Nome: ".utf8_decode($nome). "\r\n".
    "Telefone com DDD: " .$telefone. "\r\n".
    "Email: " .$email. "\r\n".
    "Cidade?: " .$cidade. "\r\n".
    "Tipo de Plano: " .$tipoDePlano. "\r\n".
    "Pra quem é o Plano?: " .$praQuemPlano. "\r\n".
    "Idade (Plano Individual): " .$idadePf. "\r\n". 
    "Idade(s) (Plano Familiar): " .$idades. "\r\n".
    "Possui Plano?: " .$possuiPlano. "\r\n".
    "Se SIM qual Plano?: " .$qualPlanoPossui. "\r\n".
    "Se Para empresa, função de queme stá preenchendo form: " .$funcaoNaEmpresa. "\r\n".
    "URL de envio do formulário: " .$url_atual. "\r\n";

    $header = "From: email@agenciaion.com"."\r\n"
    ."Reply-To:".$email. "\r\n"
    ."X=Mailer:PHP/".phpversion();

    if(mail($to,$subject,$body,$header)){
        echo json_encode("PHP recebeu os dados" .$nome);
    }else{
        echo json_encode("Email não enviado");
    }
}

?>