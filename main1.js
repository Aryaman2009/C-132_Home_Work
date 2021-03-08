imag_e="";
status="";

function preload(){
    imag_e=loadImage("download (22).jpg");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.position(450,200); 

    object_detection=ml5.objectDetector("COCO SSD",model_loded);
    document.getElementById("status").innerHTML="Status : Detecting Object";
}
function model_loded(){
    console.log("Model Loded!!");
    status=true;
    object_detection.detect(imag_e,gotResults);
}
function draw(){
    image(imag_e,0,0,600,500);
    fill("red");
    stroke("red");
    text("dog",100,45);
    noFill();
    stroke("red");
    rect(95,30,420,400);
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    if(results){
        console.log(results);
    }
}
function back(){
    window.location="index.html";
}