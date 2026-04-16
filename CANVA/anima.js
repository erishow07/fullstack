let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

var ret1 = {
    x: 0,
    y: 100,
    L: 50,
    H: 10,
    cor: 'white',
    desenhar: function () {
        ctx.beginPath()
        ctx.fillStyle = this.cor
        ctx.fillRect(this.x, this.y, this.L, this.H);
        ctx.closePath();
    }
}
ret1.desenhar();
let direcao = 1;
function animar() {
    ctx.clearRect(0, 0, 500, 500)
    ret1.x = ret1.x + direcao;
    ret1.desenhar();
    requestAnimationFrame(animar)
    if (ret1.x == 450) {
        direcao = -1
    }
    if (ret1.x == 0) {
        direcao = 1
    }
}
animar();

document.addEventListener("keydown", function (evento) {
    tecla = evento.keyCode;
});

let circulo = {
    x: 250,
    y: 250,
    raio: 50,
    cor: "blue",
    desenha: function () {
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI);
        ctx.fill()
        ctx.closePath();
    }
}



function animar2() {
    ctx.clearRect(0, 0, 500, 500)
    circulo.desenha();
    requestAnimationFrame(animar2)
}
animar2();
document.addEventListener('keydown', function (evento) {
    tecla = evento.key;
    console.log(tecla);
    if (tecla == 'ArrowUp') { circulo.y = circulo.y - 10 }
    if (tecla == 'ArrowDown') { circulo.y = circulo.y + 10 }
    if (tecla == 'ArrowLeft') { circulo.x = circulo.x - 10 }
    if (tecla == 'ArrowRight') { circulo.x = circulo.x + 10 }
})

