// Required by Webpack - do not touch
require.context('../fonts/', true, /\.(eot|ttf|woff|woff2)$/i)
require.context('../images/', true, /\.(png|jpg|jpeg|gif|svg)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

//TODO - Your ES6 JavaScript code (if any) goes here
import 'bootstrap'

function draw() {
    let c = document.querySelector('canvas');
    if(c.getContext) {
        let ctx = c.getContext('2d');
        ctx.clearRect(0, 0, 600, 500);

        //sky
        let sky = ctx.createLinearGradient(300, 0, 300, 300); 
        sky.addColorStop(.6,'skyBlue');
        sky.addColorStop(1, 'white');
        ctx.fillStyle = sky;
        ctx.fillRect(0,0,600,500);

        //sun
        ctx.fillStyle = 'yellow';
        ctx.beginPath();
        ctx.arc(150, 150, document.getElementById("x").value, 0, 2 * Math.PI);
        ctx.fill();

        //tree
        ctx.fillStyle = 'brown';
        ctx.fillRect(420, 120, 30, 120);
        ctx.fillStyle = 'green';
        ctx.beginPath();
        ctx.moveTo(350, 150);
        ctx.lineTo(445, 20);
        ctx.lineTo(540, 150);
        ctx.fill();

        //grass
        ctx.beginPath();
        ctx.moveTo(0, 361);
        ctx.bezierCurveTo(252, 432, 284, 177, 604, 238);
        ctx.lineTo(600, 500);
        ctx.lineTo(0, 500);
        ctx.fill()

        //flowers
        fourPetalFlower(ctx, 500, 280, 10);
        fourPetalFlower(ctx, 300, 300, 20);
        fourPetalFlower(ctx, 200, 400, 10);
        fourPetalFlower(ctx, 100, 450, 20);
        fourPetalFlower(ctx, 550, 450, 15);
        fourPetalFlower(ctx, 350, 420, 15);
        fourPetalFlower(ctx, 450, 370, 26);
        fourPetalFlower(ctx, 560, 220, 20);
        fourPetalFlower(ctx, 30, 400, 10);
        
        ctx.fillStyle = document.getElementById('c').value;
        ctx.beginPath();
        ctx.arc(400, 300, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(530, 400, 8, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(270, 480, 10, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(280, 340, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(80, 400, 5, 0, 2 * Math.PI);
        ctx.fill();

    }//end get context if
}//end draw function

function fourPetalFlower(ctx, x, y, r){
    ctx.fillStyle = document.getElementById('c').value;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 2 * Math.PI);  //petal 1
        ctx.fill();
        ctx.arc(x + 10, y + 10, r, 0, 2 * Math.PI); //petal 3
        ctx.fill();
        ctx.arc(x, y + 20, r, 0, 2 * Math.PI); //petal 2
        ctx.fill();
        ctx.arc(x - 10, y + 10, r, 0, 2 * Math.PI); //petal 4
        ctx.fill();
        ctx.beginPath(); //center of flower
        ctx.fillStyle = 'yellow';
        ctx.arc(x, y + 10, r / 2, 0, 2 * Math.PI);
        ctx.fill();
}

document.body.onload = draw();
document.getElementById('x').onchange = draw;
document.getElementById('c').onchange = draw;
