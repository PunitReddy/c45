const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var form
var engine, world;
var database

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);

    database = firebase.database()

    form = new Form();

}

function draw(){
    background(255);
    form.display()
}