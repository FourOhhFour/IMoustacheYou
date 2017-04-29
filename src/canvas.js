$(document).ready(function(){

//draw image and moustache on a canvas


$('#finalise-button').click(function(){
  var file = document.getElementById('fileUpload').files[0];
  var reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function(){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");


    var imageObj1 = new Image();
    imageObj1.src = reader.result;
    imageObj1.onload = function() {
      ctx.canvas.height = imageObj1.height;
      ctx.canvas.width = imageObj1.width;
      ctx.drawImage(imageObj1, 0, 0);
    };
    $('#output-img').faceDetection({
        complete: function(faces){
          console.log(faces);
          var imageObj2 = new Image();
          var val = $('input[name=moustache]:checked', '#form').val()
          imageObj2.src = '../assets/images/' + val + '.png';
          imageObj2.onload = function() {
            var x = (faces[0].x + faces[0].width/2) - ((faces[0].width/4)*3)/2 + 7;
            var y = faces[0].y + (faces[0].height/4)*3
            var h = (faces[0].width/4) * 3;
            ctx.drawImage(imageObj2, x, y, h, h * imageObj2.height / imageObj2.width);
            //ctx.drawImage(imageObj2, ((faces[0].x + faces[0].width/2)-((imageObj2.width*((faces[0].width/4)*3))/2)), (faces[0].y + ((faces[0].height/3)*2)), ((faces[0].width/4)*3), ((faces[0].width/4)*3));
          };
        }
      });//end pic.faceDetection
  }//end reader.onload
});//end finalise btn click


});//end doc.ready
