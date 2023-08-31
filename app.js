const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


// Variables

// Vitesse sur X
const vx = 0;
const vy = -10;
let snake = [{x:140, y:150}, {x:130, y:150}, {x:120, y:150}, {x:110, y:150}];

function animation() {
    setTimeout(function (){
        nettoieCanvas();

        faireAvancerSerpent();

        dessineLeSerpent();

        // recursion
        //animation();

    }, 100);
}
animation();

function nettoieCanvas() {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeRect(0, 0, canvas.width, canvas.height);

}

function dessineLesMorceaux(morceau) {
    ctx.fillStyle = "#00fe14";
    ctx.strokeStyle = 'black';
    ctx.fillRect(morceau.x, morceau.y, 10, 10);
    ctx.strokeRect(morceau.x, morceau.y, 10, 10);
}

function dessineLeSerpent() {
    snake.forEach(morceau => {
        dessineLesMorceaux(morceau);
    })
}


function faireAvancerSerpent() {
    const head = {x: snake[0].x + vx, y: snake[0].y + vy};
    snake.unshift(head);
    snake.pop();
    console.log(snake);
}

faireAvancerSerpent();

dessineLeSerpent();