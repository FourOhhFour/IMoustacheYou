$(document).ready(function(){$("#picture").faceDetection({complete:function(e){console.log(e);for(var t=0;t<e.length;t++)$("<div>",{class:"face",css:{position:"absolute",left:e[t].x*e[t].scaleX+"px",top:e[t].y*e[t].scaleY+"px",width:e[t].width*e[t].scaleX*1.2+"px",height:e[t].height*e[t].scaleY*1.5+"px"}}).insertAfter(this)}})});