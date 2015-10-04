//Problem: User interaction causes no change to application
//Solution: User interaction causes application to respond
var color = $(".selected").css("background-color");
var $canvas = $("canvas");
var context = $canvas[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//When clicking on controls list items
$(".controls").on("click", "li", function(){                      
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
                        
  //Select clicked element
  $(this).addClass("selected"); 

  //Cache current color
  color = $(this).css("background-color");
});                        
                        

//When "New color" is clicked
$("#revealColorSelect").click(function(){
  //Show or hide color <select>
  changeColor();
  $("#colorSelect").toggle();
});

//Update the new color <span> 
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  
  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}

// //When color sliders change
// $("input[type=range]").on("input", changeColor);

// //when "Add color" is pressed
// $("#addNewColor").click(function(){
//   //append the color to the controls <ul>
//   var $newColor = $("<li></li>");
//   $newColor.css("background-color", $("#newColor").css("background-color")); 
//   $(".controls ul").append($newColor);
//   //Select the new color
//   $newColor.click();
// });
  
//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
  mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if (mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.stroke();
    lastEvent = e;
  }

  // Draw a circle where the mouse is dragged
  if (mouseDown) {
    recursiveCircles(e.offsetX, e.offsetY, 20);
  }

}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();
});

  

// $canvas.mousedown(function(e){
//   drawPattern(e.offsetX, e.offsetY);
// });


function drawCircle(x, y, radius) {
  context.beginPath();
  x = (Math.round(x / 20)) * 20;
  y = (Math.round(y / 20)) * 20;

  context.ellipse(x, y, radius, radius, 50 * Math.PI/180, 0, 2 * Math.PI);
  context.fillStyle = color;
  // context.fillStyle = "rgba(50, 50, 240, 0.1)";
  context.fill();

}


// Not currently used. Replaced by recursiveCircles()
// function drawCircles(x, y) {
//   var radius = 20;
//   var offset = 10;

//   drawCircle(x, y, radius);

//   radius = radius/2;

//   drawCircle(x, y+offset, radius); 
//   drawCircle(x, y-offset, radius); 

//   drawCircle(x+offset, y, radius);
//   drawCircle(x-offset, y, radius);
// }