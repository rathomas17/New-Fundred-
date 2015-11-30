

//NEW PAINT
Template.paint.rendered = function(){


//dollar face
 var canvas = new fabric.Canvas('c');
//dollar back
 var canvas2 = new fabric.Canvas('c2');




//uploaded image javascript


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);


      var img =  document.getElementById("blah").src;


    canvas.setBackgroundImage('image1', canvas.renderAll.bind(canvas), {
      width: canvas.width,
      height: canvas.height,


       // Needed to position backgroundImage at 0/0
       originX: 'left',
       originY: 'top'

    });
});


//end of uploaded image javascript





 canvas.setBackgroundImage('blankface.jpg', canvas.renderAll.bind(canvas), {
   width: canvas.width,
   height: canvas.height,


    // Needed to position backgroundImage at 0/0
    originX: 'left',
    originY: 'top'
  });

  canvas.setOverlayImage('blankfacetrim.png', canvas.renderAll.bind(canvas), {
    width: canvas.width,
    height: canvas.height,


     // Needed to position backgroundImage at 0/0
     originX: 'left',
     originY: 'top'
   });

  canvas2.setBackgroundImage('blankback.jpg', canvas.renderAll.bind(canvas2), {
    width: canvas.width,
    height: canvas.height,


     // Needed to position backgroundImage at 0/0
     originX: 'left',
     originY: 'top'
   });

   canvas2.setOverlayImage('blankbacktrim.png', canvas.renderAll.bind(canvas), {
     width: canvas.width,
     height: canvas.height,


      // Needed to position backgroundImage at 0/0
      originX: 'left',
      originY: 'top'
    });





  var drawingModeEl = document.getElementById('drawing-mode'),
    drawingOptionsEl = document.getElementById('drawing-mode-options'),
    drawingColorEl = document.getElementById('drawing-color'),
    drawingLineWidthEl = document.getElementById('drawing-line-width'),
    drawingShadowWidth = document.getElementById('drawing-shadow-width');



  drawingModeEl.onclick = function() {

    canvas.isDrawingMode = !canvas.isDrawingMode;
    canvas2.isDrawingMode = !canvas2.isDrawingMode;
    if (canvas.isDrawingMode) {
      drawingModeEl.innerHTML = 'Exit drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };



//begin new

  //drawingModeEl.onclick



//new new

//end new new
/*
  canvas.on('path:created', function() {
    updateComplexity();
  });

  canvas2.on('path:created', function() {
    updateComplexity();
  });*/

  if (fabric.PatternBrush) {
    var vLineDef = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      var patternCanvas2 = fabric.document.createElement('canvas2');
      patternCanvas2.width = patternCanvas2.height = 10;
      var ctx2 = patternCanvas2.getContext('2d');


      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      ctx2.strokeStyle = this.color;
      ctx2.lineWidth = 5;
      ctx2.beginPath();
      ctx2.moveTo(0, 5);
      ctx2.lineTo(10, 5);
      ctx2.closePath();
      ctx2.stroke();

      return patternCanvas;

    };


    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = vLineDef;

    var vLinePatternBrush2 = new fabric.PatternBrush(canvas2);
    vLinePatternBrush2.getPatternSrc = vLineDef;






    var hLineDef = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      var patternCanvas2 = fabric.document.createElement('canvas2');
      patternCanvas2.width = patternCanvas2.height = 10;
      var ctx2 = patternCanvas2.getContext('2d');


      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      ctx2.strokeStyle = this.color;
      ctx2.lineWidth = 5;
      ctx2.beginPath();
      ctx2.moveTo(5, 0);
      ctx2.lineTo(5, 10);
      ctx2.closePath();
      ctx2.stroke();


      return patternCanvas;


    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = hLineDef;

    var hLinePatternBrush2 = new fabric.PatternBrush(canvas2);
    hLinePatternBrush2.getPatternSrc = hLineDef;
//TEST 2
//END TEST 2


    var squarePatternBrush = new fabric.PatternBrush(canvas);
    squarePatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 2;

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
      var ctx = patternCanvas.getContext('2d');

      ctx.fillStyle = this.color;
      ctx.fillRect(0, 0, squareWidth, squareWidth);

      return patternCanvas;

    };

    var diamondPatternBrush = new fabric.PatternBrush(canvas);
    diamondPatternBrush.getPatternSrc = function() {

      var squareWidth = 10, squareDistance = 5;
      var patternCanvas = fabric.document.createElement('canvas');
      var rect = new fabric.Rect({
        width: squareWidth,
        height: squareWidth,
        angle: 45,
        fill: this.color
      });


      var canvasWidth = rect.getBoundingRectWidth();

      patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
      rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });

      var ctx = patternCanvas.getContext('2d');
      rect.render(ctx);

      return patternCanvas;
    };


//PATTERN IMAGES

    //SPACE PATTERN
    var spaceimg = new Image();
    spaceimg.src = 'clearblankfront.jpg';

    var spacePatternBrush = new fabric.PatternBrush(canvas);
    spacePatternBrush.source = spaceimg;

    var spacePatternBrush2 = new fabric.PatternBrush(canvas2);
    spacePatternBrush2.source = spaceimg;



    //CAT PATTERN
    var catimg = new Image();
    catimg.src = '/catsback.jpg';

    var catsPatternBrush = new fabric.PatternBrush(canvas);
    catsPatternBrush.source = catimg;


    var eraser = new Image();
    eraser.src = 'clearblankface.jpg';

    //var eraserPatternBrush = new fabric.PatternBrush(canvas);
    //eraserPatternBrush.source = eraser;



//END OF PATTERN IMAGES


  }

//BACK JS





//END OF BACK JS


  document.getElementById('drawing-mode-selector').addEventListener('change', function() {
    if (this.value === 'hline') {
      canvas.freeDrawingBrush = vLinePatternBrush;
      canvas2.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvas.freeDrawingBrush = hLinePatternBrush;
      canvas2.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
      canvas2.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
      canvas2.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'Eraser') {
      canvas.freeDrawingBrush = spacePatternBrush;
      canvas2.freeDrawingBrush = spacePatternBrush2;
    }
    else if (this.value === 'Bottom Eraser') {
      canvas.freeDrawingBrush = spacePatternBrush;
      canvas2.freeDrawingBrush = spacePatternBrush2;
    }
    else if (this.value === 'cats') {
      canvas.freeDrawingBrush = catsPatternBrush;
      canvas2.freeDrawingBrush = catsPatternBrush;
    }
    else if (this.value === 'picture') {
      canvas.freeDrawingBrush = vLinePatternBrush;
      canvas2.freeDrawingBrush = vLinePatternBrush;
    }
    else {
      canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
      canvas2.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas2);
    }

    if (canvas.freeDrawingBrush) {
      canvas.freeDrawingBrush.color = drawingColorEl.value;
      canvas2.freeDrawingBrush.color = drawingColorEl.value;
      canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas2.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
      canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
      canvas2.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    }
  });

  drawingColorEl.onchange = function() {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas2.freeDrawingBrush.color = drawingColorEl.value;
  };
  drawingLineWidthEl.onchange = function() {
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas2.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
  };
  drawingShadowWidth.onchange = function() {
    canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
    canvas2.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
  };

  if (canvas.freeDrawingBrush) {
    canvas.freeDrawingBrush.color = drawingColorEl.value;
    canvas2.freeDrawingBrush.color = drawingColorEl.value;
    canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas2.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
    canvas.freeDrawingBrush.shadowBlur = 0;
    canvas2.freeDrawingBrush.shadowBlur = 0;
  }

  document.getElementById('canvas-background-picker').addEventListener('change', function() {
    canvas.backgroundColor = this.value;
    canvas2.backgroundColor = this.value;
    canvas.renderAll();
    canvas2.renderAll();
  });


 };

 Template.paint.events({



   'click #submit-drawing':function(){
      var can=$('#c');
      var can2=$('#c2');
      console.log(can);
      console.log(can2);
      var img=can[0].toDataURL("image/png");
      var img2=can2[0].toDataURL("image2/png");
      //var img2=can2[0].toDataURL("image2/png");

          FundredImages.insert(img, function(err, fileObj){
            if(err){
              alert("Error");
            } else {
              // gets the ID of the image that was uploaded
              var imageId = fileObj._id;
              Session.set('selectedImageId',imageId);
              console.log('imageid'+imageId);
            }
          });

          FundredImages.insert(img2, function(err, fileObj){
            if(err){
              alert("Error");
            } else {
              // gets the ID of the image that was uploaded
              var image2Id = fileObj._id;
              Session.set('selectedImage2Id',image2Id);
              console.log('image2id'+image2Id);

            }
          });

          Router.go("/submitdrawing");

   }

 });
