//alert('works');

$(document).ready(function(){


  $('#picture').faceDetection({
      complete: function(faces){
        console.log(faces);
        //imageStore(faces);
        for (var i = 0; i < faces.length; i++) {
            //draw rectangle around any faces
            $('<div>', {
                'class':'face',
                'css': {
                    'position': 'absolute',
                    'left':     faces[i].x * faces[i].scaleX + 'px',
                    'top':      faces[i].y * faces[i].scaleY + 'px',
                    'width':    1.2 * (faces[i].width  * faces[i].scaleX) + 'px',
                    'height':   1.5 * (faces[i].height * faces[i].scaleY) + 'px'
                }
            })
            .insertAfter(this);
        }
      }
  });


  function imageStore(img)
  {
    //store image to local storage
    //var $image = $('#picture');
    localStorage.setItem('image0', img);
    console.log('image saved to local storage');
  }


});//end doc ready


/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var img1 = loadImage('http://upload.wikimedia.org/wikipedia/en/2/24/Lenna.png', main);
var img2 = loadImage('http://introcs.cs.princeton.edu/java/31datatype/peppers.jpg', main);

var imagesLoaded = 0;
function main() {
    imagesLoaded += 1;

    if(imagesLoaded == 2) {
        // composite now
        ctx.drawImage(img1, 0, 0);

        ctx.globalAlpha = 0.5;
        ctx.drawImage(img2, 0, 0);
    }
}

function loadImage(src, onload) {
    // http://www.thefutureoftheweb.com/blog/image-onload-isnt-being-called
    var img = new Image();

    img.onload = onload;
    img.src = src;

    return img;
}*/
