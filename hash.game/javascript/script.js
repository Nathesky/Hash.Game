function res() {
    
    var matriz = [];
    for (var i = 1; i <= 9; i++) {
        var letras = document.getElementById("i" + i).value.toLowerCase();
        matriz.push(letras);
    }

    var vitorias = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];


    for (var i = 0; i < vitorias.length; i++) {
        var [a, b, c] = vitorias[i];
        if (matriz[a] && matriz[a] === matriz[b] && matriz[a] === matriz[c]) {
            setTimeout(function () {
                alert(matriz[a].toUpperCase() + " ganhou");
            }, 200);
            return;
        }
    }

    for (var i = 0; i < matriz.length; i++) {
        if (!matriz[i]) {
            return;
        }
    }
    setTimeout(function () {
        alert("Empate");
    }, 100);

}