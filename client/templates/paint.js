//NEW PAINT
Template.paint.rendered = function(){


//dollar face
 var canvas = new fabric.Canvas('c');
//dollar back
 var canvas2 = new fabric.Canvas('c2');
//dollar face trim
 var canvas3 = new fabric.Canvas('cf1');


//TEXT BOX JAVASCRIPT
/*

window.addEventListener("load", eventWindowLoaded, false);
function eventWindowLoaded() {

   canvasApp();
}

function canvasSupport () {
     return Modernizr.canvas;
}

function eventWindowLoaded() {
     var patternPreload = new Image();
     patternPreload.onload = eventAssetsLoaded;
     patternPreload.src = "texture.jpg";
}

function eventAssetsLoaded() {

   canvasApp();
}

function canvasApp() {

   var message = "your text";
   var fontSize = "50";
   var fontFace = "serif";
   var textFillColor = "#ff0000";
   var textAlpha = 1;
   var shadowX = 1;
   var shadowY = 1;
   var shadowBlur = 1;
   var shadowColor = "#707070";
   var textBaseline = "middle";
   var textAlign = "center";
   var fillOrStroke ="fill";
   var fontWeight = "normal";
   var fontStyle = "normal";
   var fillType = "colorFill";
   var textFillColor2 = "#000000";
   var pattern = new Image();

   if (!canvasSupport()) {
          return;
        }

   var canvas = document.getElementById("c");
   var context = canvas.getContext("2d");

   var formElement = document.getElementById("textBox");
   formElement.addEventListener("keyup", textBoxChanged, false);

   formElement = document.getElementById("fillOrStroke");
   formElement.addEventListener("change", fillOrStrokeChanged, false);

   formElement = document.getElementById("textSize");
   formElement.addEventListener("change", textSizeChanged, false);

   formElement = document.getElementById("textFillColor");
   formElement.addEventListener("change", textFillColorChanged, false);

   formElement = document.getElementById("textFont");
   formElement.addEventListener("change", textFontChanged, false);

   formElement = document.getElementById("textBaseline");
   formElement.addEventListener("change", textBaselineChanged, false);

   formElement = document.getElementById("textAlign");
   formElement.addEventListener("change", textAlignChanged, false);

   formElement = document.getElementById("fontWeight");
   formElement.addEventListener("change", fontWeightChanged, false);

   formElement = document.getElementById("fontStyle");
   formElement.addEventListener("change", fontStyleChanged, false);

   formElement = document.getElementById("shadowX");
   formElement.addEventListener("change", shadowXChanged, false);

   formElement = document.getElementById("shadowY");
   formElement.addEventListener("change", shadowYChanged, false);

   formElement = document.getElementById("shadowBlur");
   formElement.addEventListener("change", shadowBlurChanged, false);

   formElement = document.getElementById("shadowColor");
   formElement.addEventListener("change", shadowColorChanged, false);

   formElement = document.getElementById("textAlpha");
   formElement.addEventListener("change", textAlphaChanged, false);

   formElement = document.getElementById("textFillColor2");
   formElement.addEventListener("change", textFillColor2Changed, false);

   formElement = document.getElementById("fillType");
   formElement.addEventListener("change", fillTypeChanged, false);

   formElement = document.getElementById("canvasWidth");
   formElement.addEventListener("change", canvasWidthChanged, false);

   formElement = document.getElementById("canvasHeight");
   formElement.addEventListener("change", canvasHeightChanged, false);

   formElement = document.getElementById("canvasStyleWidth");
   formElement.addEventListener("change", canvasStyleSizeChanged, false);

   formElement = document.getElementById("canvasStyleHeight");
   formElement.addEventListener("change", canvasStyleSizeChanged, false);

   formElement = document.getElementById("createImageData");
   formElement.addEventListener("click", createImageDataPressed, false);

   pattern.src = "texture.jpg";

   drawScreen();

   function drawScreen() {

     //Background
      context.globalAlpha = 1;
      context.shadowColor = "#707070";
      context.shadowOffsetX = 0;
      context.shadowOffsetY = 0;
      context.shadowBlur = 0;
      context.fillStyle = "#ffffaa";
      context.fillRect(0, 0, theCanvas.width, theCanvas.height);      //Box
      context.strokeStyle = "#000000";
      context.strokeRect(5,  5, theCanvas.width-10, theCanvas.height-10);

      //Text
      context.textBaseline = textBaseline;
      context.textAlign = textAlign;
      context.font = fontWeight + " " + fontStyle + " " + fontSize + "px " + fontFace;
      context.shadowColor = shadowColor;
      context.shadowOffsetX = shadowX;
      context.shadowOffsetY = shadowY;
      context.shadowBlur = shadowBlur;
      context.globalAlpha = textAlpha;

      var xPosition = (theCanvas.width/2);
      var yPosition = (theCanvas.height/2);

      var metrics = context.measureText(message);
      var textWidth = metrics.width;

      var tempColor;
      if (fillType == "colorFill") {
         tempColor = textFillColor;
      } else if (fillType == "linearGradient") {

         var gradient = context.createLinearGradient(xPosition-
            textWidth/2, yPosition, textWidth, yPosition);
         gradient.addColorStop(0,textFillColor);
         gradient.addColorStop(.6,textFillColor2);
         tempColor = gradient;
      } else if (fillType == "radialGradient") {
         var gradient = context.createRadialGradient(xPosition, yPosition,
             fontSize, xPosition+textWidth, yPosition, 1);
         gradient.addColorStop(0,textFillColor);
         gradient.addColorStop(.6,textFillColor2);
         tempColor = gradient;
      } else if (fillType == "pattern") {
         var tempColor = context.createPattern(pattern,"repeat")
      } else {
         tempColor = textFillColor;
      }

      switch(fillOrStroke) {
         case "fill":
            context.fillStyle = tempColor;
                context.fillText  (message, xPosition,yPosition);
            break;
         case "stroke":
            context.strokeStyle = tempColor;
            context.strokeText  (message, xPosition,yPosition);
            break;
         case "both":
            context.fillStyle = tempColor;
                context.fillText  (message, xPosition,yPosition);
            context.strokeStyle = "#000000";
            context.strokeText  (message, xPosition,yPosition);
            break;
      }


   }

   function textBoxChanged(e) {
      var target = e.target;
      message = target.value;
      drawScreen();
   }

   function textBaselineChanged(e) {
      var target = e.target;
      textBaseline = target.value;
      drawScreen();
   }

   function textAlignChanged(e) {
      var target = e.target;
      textAlign = target.value;
      drawScreen();
   }

   function fillOrStrokeChanged(e) {
      var target = e.target;
      fillOrStroke = target.value;
      drawScreen();
   }

   function textSizeChanged(e) {
      var target = e.target;
      fontSize = target.value;
      drawScreen();
   }

   function textFillColorChanged(e) {
      var target = e.target;
      textFillColor = "#" + target.value;
      drawScreen();
   }

   function textFontChanged(e) {
      var target = e.target;
      fontFace = target.value;
      drawScreen();
   }

   function fontWeightChanged(e) {
      var target = e.target;
      fontWeight = target.value;
      drawScreen();
   }

   function fontStyleChanged(e) {
      var target = e.target;
      fontStyle = target.value;
      drawScreen();
   }

   function shadowXChanged(e) {
      var target = e.target;
      shadowX = target.value;
      drawScreen();
   }

   function shadowYChanged(e) {
      var target = e.target;
      shadowY = target.value;
      drawScreen();
   }

   function shadowBlurChanged(e) {
      var target = e.target;
      shadowBlur = target.value;
      drawScreen();
   }

   function shadowColorChanged(e) {
      var target = e.target;
      shadowColor = target.value;
      drawScreen();
   }

   function textAlphaChanged(e) {
      var target = e.target;
      textAlpha = (target.value);
      drawScreen();
   }

   function textFillColor2Changed(e) {
      var target = e.target;
      textFillColor2 = "#" + target.value;
      drawScreen();
   }

   function fillTypeChanged(e) {
      var target = e.target;
      fillType = target.value;
      drawScreen();
   }

   function canvasWidthChanged(e) {
      var target = e.target;
      theCanvas.width = target.value;
      drawScreen();
   }
   function canvasHeightChanged(e) {
      var target = e.target;
      theCanvas.height = target.value;
      drawScreen();
   }

   function canvasStyleSizeChanged(e) {

      var styleWidth = document.getElementById("canvasStyleWidth");
      var styleHeight = document.getElementById("canvasStyleHeight");
      var styleValue = "width:" + styleWidth.value + "px; height:" +
          styleHeight.value +"px;";
      theCanvas.setAttribute("style", styleValue );
      drawScreen();
   }


   function createImageDataPressed(e) {

      var imageDataDisplay = document.getElementById("imageDataDisplay");
      imageDataDisplay.value = canvas.toDataURL();
      window.open(imageDataDisplay.value,"canvasImage","left=0,top=0,width=" +
         canvas.width + ",height=" + canvas.height +
         ",toolbar=0,resizable=0");

   }

}
*/


//END OF TEXTBOX JAVASCRIPT


//uploaded image javascript


function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }

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


//Third canvas that has the blank face trim
   canvas3.setBackgroundImage('blankfacetrim.png', canvas.renderAll.bind(canvas3), {
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
      drawingModeEl.innerHTML = 'Cancel drawing mode';
      drawingOptionsEl.style.display = '';
    }
    else {
      drawingModeEl.innerHTML = 'Enter drawing mode';
      drawingOptionsEl.style.display = 'none';
    }
  };

 


  canvas.on('path:created', function() {
    updateComplexity();
  });

  canvas2.on('path:created', function() {
    updateComplexity();
  });

  if (fabric.PatternBrush) {
    var vLinePatternBrush = new fabric.PatternBrush(canvas);
    vLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, 5);
      ctx.lineTo(10, 5);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

    var hLinePatternBrush = new fabric.PatternBrush(canvas);
    hLinePatternBrush.getPatternSrc = function() {

      var patternCanvas = fabric.document.createElement('canvas');
      patternCanvas.width = patternCanvas.height = 10;
      var ctx = patternCanvas.getContext('2d');

      ctx.strokeStyle = this.color;
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(5, 0);
      ctx.lineTo(5, 10);
      ctx.closePath();
      ctx.stroke();

      return patternCanvas;
    };

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
    spaceimg.src = '/spaceback.jpg';

    var spacePatternBrush = new fabric.PatternBrush(canvas);
    spacePatternBrush.source = spaceimg;


    //CAT PATTERN
    var catimg = new Image();
    catimg.src = '/catsback.jpg';

    var catsPatternBrush = new fabric.PatternBrush(canvas);
    catsPatternBrush.source = catimg;




    //TEST CAT PATTERN



    //END TEST CAT PATTERN



//END OF PATTERN IMAGES


  }

  document.getElementById('drawing-mode-selector').addEventListener('change', function() {

    if (this.value === 'hline') {
      canvas.freeDrawingBrush = vLinePatternBrush;
    }
    else if (this.value === 'vline') {
      canvas.freeDrawingBrush = hLinePatternBrush;
    }
    else if (this.value === 'square') {
      canvas.freeDrawingBrush = squarePatternBrush;
    }
    else if (this.value === 'diamond') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'Shape - Circle') {
      canvas.freeDrawingBrush = diamondPatternBrush;
    }
    else if (this.value === 'space') {
      canvas.freeDrawingBrush = spacePatternBrush;
    }
    else if (this.value === 'cats') {
      canvas.freeDrawingBrush = catsPatternBrush;
    }
    else if (this.value === 'picture') {
      canvas.freeDrawingBrush = vLinePatternBrush;
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

    canvas.renderAll();
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
        };
      });

      FundredImages.insert(img2, function(err, fileObj){
        if(err){
          alert("Error");
        } else {
          // gets the ID of the image that was uploaded
          var image2Id = fileObj._id;
          Session.set('selectedImage2Id',image2Id);
          console.log('image2id'+image2Id)
          Router.go("/submitdrawing");
        };
      });
   }

 });
