var canvas = new fabric.Canvas("myCanvas"); /* Diz que meu canvas ussa os codigos dessa bliblioteca */
var playerX = 400;
var playerY = 250;
var blockWidth = 80;
var blockHeight = 80;
var playerObject ="";
var blockObject ="";

function playerUpdate(){
    fabric.Image.fromURL("player.png", function(Img){ /* e um codigo padrão para enviar uma imagem a o canvas */
        playerObject=Img; /* essa var e o objeto que contem a imagem do player */
        playerObject.scaleToWidth(150); /* altera a largura da imagem */
        playerObject.scaleToHeight(140);
        playerObject.set({top:playerY,left:playerX}); /* coloca o objeto nas coordenadas x e y definidas */
        canvas.add(playerObject); /* ele adiciona a imagem ao canvas */
    });
}

function newImage(getImage){
    fabric.Image.fromURL(getImage, function(Img){
        blockObject=Img;
        blockObject.scaleToWidth(blockWidth);
        blockObject.scaleToHeight(blockHeight);
        blockObject.set({top:playerY, left:playerX});
        canvas.add(blockObject);
    });
}

window.addEventListener("keydown", mykeydown);

function mykeydown(e){
    var keypressed = e.keyCode;
    console.log(keypressed);
    if(e.shiftKey == true && keypressed == "80"){
        console.log("p + shift");
        blockWidth = blockWidth + 10;
        blockHeight = blockHeight + 10;
        document.getElementById("largura").innerHTML=blockWidth;
        document.getElementById("altura").innerHTML=blockHeight;
    };
    if(e.shiftKey == true && keypressed=="77"){
        console.log("shift + M");
        blockWidth = blockWidth - 10;
        blockHeight = blockHeight - 10;
        document.getElementById("largura").innerHTML=blockWidth;
        document.getElementById("altura").innerHTML=blockHeight;
    };
    if(keypressed=="38"){
        console.log("up");
        up();
    };
    if(keypressed=="40"){
        console.log("down");
        down();
    };
    if(keypressed=="37"){
        console.log("left");
        left();
    };
    if(keypressed=="39"){
        console.log("right");
        right();
    };
    if(keypressed=="87"){
        console.log("w");
        newImage("wall.jpg"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="71"){
        console.log("g");
        newImage("ground.png"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="76"){
        console.log("l");
        newImage("light_green.png"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="84"){
        console.log("t");
        newImage("trunk.jpg"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="82"){
        console.log("r");
        newImage("roof.jpg"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="89"){
        console.log("y");
        newImage("yellow_wall.png"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="68"){
        console.log("d");
        newImage("dark_green.png"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="85"){
        console.log("u");
        newImage("unique.png"); /* entrega um valor para a função newimage */
    };
    if(keypressed=="67"){
        console.log("c");
        newImage("cloud.jpg"); /* entrega um valor para a função newimage */
    };
    
}

function up(){
    if(playerY>=20){
        playerY=playerY-blockHeight;
        canvas.remove(playerObject);/* remove a imagem antiga do personagem para aparecer na nova coordenada */
        playerUpdate();
    }
}

function down(){
    if(playerY<=400){
        playerY=playerY+blockHeight;
        canvas.remove(playerObject);
        playerUpdate();
    }
}

function right(){
    if(playerX<=700){
        playerX=playerX+blockWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}
function left(){
    if(playerX>=20){
        playerX=playerX-blockWidth;
        canvas.remove(playerObject);
        playerUpdate();
    }
}