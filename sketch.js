
var drawing=[];
var currentPath=[];
var isDrawing = false;
 
function setup() {
 canvas = createCanvas(900,700);
 database= firebase.database();
 canvas.mousePressed(start);
 canvas.mouseReleased(end);
 form = new Form();
 form.display();
 }
 
function draw() {
 background("lightblue");
 
 if(isDrawing){
   var point = {
     x:mouseX,
     y:mouseY
   }
   currentPath.push(point);
 }
  strokeWeight(4);
 noFill();
 stroke("blue");
 for(var i=0; i<drawing.length;i++){
   var path=drawing[i];
   beginShape();
   for(var j=0;j<path.length;j++){
     vertex(path[j].x,path[j].y);
   }
   endShape();
 }
 form.button.mousePressed(() => {
   saveDrawing();
  
});
form.button2.mousePressed(() => {
 clearDrawing();
 });
 
}
function start(){
 isDrawing = true;
 currentPath=[];
 drawing.push(currentPath);
}
function end(){
 isDrawing = false;
}
function saveDrawing(){
 var ref = database.ref('drawing');
 var data={
     name: "hasini",
     drawing :drawing
 }
 var result = ref.push(data,dataSent);
 console.log(result.key);
 
 function dataSent(status){
   console.log(status);
 }
}
function clearDrawing(){
 drawing=[];
 var ref = database.ref('drawing');
 ref.remove();
}
 
