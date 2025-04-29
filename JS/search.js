document.getElementById('search-input').addEventListener('input', function(event) {
    var termoBusca = event.target.value.trim().toLowerCase(); 

    var artigos = document.querySelectorAll('article');

    artigos.forEach(function(artigo) {
        var nomeEspecie = artigo.querySelector('p').textContent.toLowerCase(); 

        if (termoBusca === '') {
            artigo.style.display = 'block'; 
        } else if (nomeEspecie.includes(termoBusca)) {
            artigo.style.display = 'block'; 
        } else {
            artigo.style.display = 'none';
        }
    });
});