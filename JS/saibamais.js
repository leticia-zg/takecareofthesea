document.getElementById('changeImagePG').addEventListener('click', function() {
    var img = document.getElementById('image-pg');
    if (img.src.includes('praia-grande')) {
        img.src = './IMG/praiagrande-mais.png';
    } else {
        img.src = './IMG/praia-grande.png';
    }
});

document.getElementById('changeImageIlha').addEventListener('click', function() {
    var img = document.getElementById('image-ilhabela');
    if (img.src.includes('ilhabela')) {
        img.src = './IMG/ilha-bela-mais.png';
    } else {
        img.src = './IMG/ilhabela.png';
    }
});

document.getElementById('changeImageSc').addEventListener('click', function() {
    var img = document.getElementById('image-floripa');
    if (img.src.includes('floripa')) {
        img.src = './IMG/flor-ipa-mais.png';
    } else {
        img.src = './IMG/floripa.png';
    }
});

document.getElementById('changeImageUba').addEventListener('click', function() {
    var img = document.getElementById('image-ubatuba');
    if (img.src.includes('ubatuba')) {
        img.src = './IMG/uba-tuba-mais.png';
    } else {
        img.src = './IMG/ubatuba.png';
    }
});

document.getElementById('changeImagePe').addEventListener('click', function() {
    var img = document.getElementById('image-recife');
    if (img.src.includes('recife')) {
        img.src = './IMG/reci-fe-mais.png';
    } else {
        img.src = './IMG/recife.png';
    }
});

document.getElementById('changeImageIta').addEventListener('click', function() {
    var img = document.getElementById('image-itanhaem');
    if (img.src.includes('itanhaem')) {
        img.src = './IMG/itanha-em-mais.png';
    } else {
        img.src = './IMG/itanhaem.png';
    }
});

document.getElementById('changeImageRj').addEventListener('click', function() {
    var img = document.getElementById('image-rj');
    if (img.src.includes('rio-de-janeiro')) {
        img.src = './IMG/riode-janeiro-mais.png';
    } else {
        img.src = './IMG/rio-de-janeiro.png';
    }
});

document.getElementById('changeImageSantos').addEventListener('click', function() {
    var img = document.getElementById('image-santos');
    if (img.src.includes('santos')) {
        img.src = './IMG/san-tos-mais.png';
    } else {
        img.src = './IMG/santos.png';
    }
});