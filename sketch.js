const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var solo;
var fruta, corda;
var con_fruta;

var cenario;
var frutaIMG;
var coelhoIMG;
var coelho;
var cola;

var som;

var botao;

function preload() {
  cenario = loadImage("planodefundo.png");
}

function setup() {
    createCanvas(500, 700);
    frameRate(80);
    engine = Engine.create();
    world = engine.world;


    solo = new Ground(200, 700, 600, 20);
    corda = new Rope(8, { x: 245, y: 30 });
    mais_leve = {
        density:0.0001
    }
    fruta = Bodies.circle(300, 300, 30, mais_leve);

    Composite.add(corda.body, fruta);
    cola = new Link(corda, fruta);




    ellipseMode(RADIUS);
    rectMode(CENTER);
    


    textSize(50);
}

function draw() {
    background("cyan");
    

    //mostrar a corda
    corda.show();
    
    ellipse(fruta.position.x, fruta.position.y,60);

    solo.show();
    Engine.update(engine);
}


