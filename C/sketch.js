function setup() {
  let canvas = createCanvas(windowWidth-90,200); //lienzo  
   canvas.parent("p5sketch");
}
function draw() {
  background("#ffffff"); //color del lienzo
  ellipse(random(windowWidth),10,8);
  ellipse(random(windowWidth),20,8);
  ellipse(random(windowWidth),30,8);
  ellipse(random(windowWidth),40,8);
  ellipse(random(windowWidth),50,8);
  ellipse(random(windowWidth),60,8);
  ellipse(random(windowWidth),70,8);
  ellipse(random(windowWidth),80,8);
  fill(255,209,random(51),255);
  ellipse(random(windowWidth),90,random(300));

<<<<<<< HEAD
  } 
=======
  } 
 
>>>>>>> e5146740025148512b7330768210b027dd8b01bd
