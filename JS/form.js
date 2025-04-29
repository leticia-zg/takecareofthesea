document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var nome = document.getElementById('nome').value;
    var local = document.getElementById('local').value;
    var situacao = document.getElementById('situacao').value;
    var foto = document.getElementById('foto').files[0];

    var nomeRegex = /^[a-zA-Z\s]+$/;
    if (!nomeRegex.test(nome)) {
        alert('O nome do animal deve conter apenas letras de A a Z.');
        return;
    }

    if (!local) {
        alert('Por favor, insira um endereço válido.');
        return;
    }

    var templateParams = {
        nome: nome,
        local: local,
        situacao: situacao,
        foto: foto ? foto.name : 'Nenhuma foto enviada',
        email_to: 'leticiazago100@gmail.com'
    };

    emailjs.send('service_8cxe8u8', 'template_xemzzvi', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Formulário enviado com sucesso!');
            document.getElementById('meuFormulario').reset(); 
        }, function(error) {
            console.log('FAILED...', error);
            alert('Ocorreu um erro ao enviar o formulário. Tente novamente mais tarde.');
        });
});