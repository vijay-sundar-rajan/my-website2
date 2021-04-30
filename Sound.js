class Sound {
   //all titles
   constructor(x, y, w, h, img) {
      var s = createSprite(x, y, w, h);
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.img = img;
      s.addImage("label", img);
      s.scale = 1
   }
   //state 0-main menu  
   //when clicked program |
   clicked() {
      if (state === 0) {
         this.dx = dist(mouseX, 0, this.x, 0);
         this.dy = dist(0, mouseY, 0, this.y);
      } else {
         this.dx = 3500;
         this.dy = 3500;
      }
      if ((this.dx < this.width / 2 && this.dy < this.height / 2) && mouseIsPressed) {
         this.yval = mouseY;
         console.log(this.yval);
         if (this.yval < 220) {
            state = 1;
         } else if (this.yval < 315) {
            state = 2;
         } else if (this.yval < 410) {
            state = 3;
         } else if (this.yval < 509) {
            state = 4;
         } else if (this.yval < 605) {
            state = 5;
         } else if (this.yval < 720) {
            state = 6;
         } else if (this.yval < 820) {
            state = 7;
         }
         this.time = window.prompt("Set Timer(minutes);[For example, 3.5 = 3min30sec]");
         this.min = parseInt(this.time);
         this.t = (parseFloat(this.time) * 60000);
         if (this.time === null) {
            mouseIsPressed = false;
            state = 0;
         } else if (this.min < 1 || this.min > 300 || isNaN(this.min)) {
            var alert = window.alert("Please enter a number between 1 and 300");
            state = 0;
            mouseIsPressed = false;
         } else if (this.min >= 1 && this.min <= 300 && this.min !== NaN) {
            //wave
            if (state === 1) {
               mouseIsPressed = false;
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("waves", waveImg);
               cover.scale = 0.6;
               cover.shapeColor = color(0);
               whitew.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 30, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  whitew.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  whitew.loop();
               })
               this.close.mousePressed(() => {
                  //return to sound selection
                  whitew.stop();
                  this.close.hide();
                  this.pause.hide();
                  this.play.hide();
                  state = 0;
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (whitew.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);
                        whitew.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);

            }
            //rain
            if (state === 2) {
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("rain", rainImg);
               cover.scale = 3.3;
               cover.shapeColor = color(0);
               whiter.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 30, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  whiter.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  whiter.loop();
               })
               this.close.mousePressed(() => {
                  whiter.stop();
                  this.close.hide();
                  this.play.hide();
                  this.pause.hide();
                  state = 0;
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (whiter.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);

                        whiter.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);
            }
            //forest
            if (state === 3) {
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("forest", forestImg);
               cover.scale = 1.2;
               cover.shapeColor = color(0);
               forestS.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 30, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  forestS.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  forestS.loop();
               })
               this.close.mousePressed(() => {
                  forestS.stop();
                  this.close.hide();
                  this.play.hide();
                  this.pause.hide();
                  state = 0;
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (forestS.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);
                        forestS.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);
            }
            //mwtime
            if (state === 4) {
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("mountain", mwImg);
               cover.scale = 1.2;
               cover.shapeColor = color(0);
               mwS.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 30, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  mwS.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  mwS.loop();
               })
               this.close.mousePressed(() => {
                  mwS.stop();
                  this.close.hide();
                  this.play.hide();
                  this.pause.hide();
                  state = 0;
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (mwS.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);
                        mwS.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);
            }
            //zen
            if (state === 5) {
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("zen", zenImg);
               cover.scale = 1.35;
               cover.shapeColor = color(0);
               zenS.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 30, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  zenS.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  zenS.loop();
               })
               this.close.mousePressed(() => {
                  zenS.stop();
                  this.close.hide();
                  this.play.hide();
                  this.pause.hide();
                  state = 0;
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (zenS.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);
                        zenS.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);
            }
            //campfire
            if (state === 6) {
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("campfire", cfImg);
               cover.scale = 1.2;
               cover.shapeColor = color(0);
               campfireS.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 30, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  campfireS.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  campfireS.loop();
               })
               this.close.mousePressed(() => {
                  campfireS.stop();
                  this.close.hide();
                  this.play.hide();
                  this.pause.hide();
                  state = 0;
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (campfireS.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);
                        campfireS.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);
            }
            //underwater
            if (state === 7) {
               var cover = createSprite(windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
               cover.addImage("whale", uwImg);
               cover.scale = 2.81;
               cover.shapeColor = color(0);
               uwhale.loop();
               //interactive buttons
               this.close = createButton("Close");
               this.close.position(windowWidth - 105, 40);
               this.pause = createButton("Pause");
               this.pause.position(windowWidth / 2 - 32.5, windowHeight - 75);
               this.play = createButton("Play");
               this.play.position(windowWidth / 2 - 25.5, windowHeight - 75);
               //default setting
               this.play.hide();
               //when clicked functions
               this.pause.mousePressed(() => {
                  //switch buttons
                  this.pause.hide();
                  this.play.show();
                  //pause sound
                  uwhale.pause();
               })
               this.play.mousePressed(() => {
                  //switch buttons
                  this.play.hide();
                  this.pause.show();
                  //play sound
                  uwhale.loop();
               })
               this.close.mousePressed(() => {
                  uwhale.stop();
                  state = 0;
                  console.log(state);
                  this.close.hide();
                  this.play.hide();
                  this.pause.hide();
                  cover.destroy();
                  mouseIsPressed = false;
               })
               this.timer = setInterval(() => {
                  if (uwhale.isPlaying()) {
                     this.t -= 1000;
                     if (this.t <= 0) {
                        clearInterval(this.timer);
                        uwhale.stop();
                        this.close.hide();
                        this.pause.hide();
                        this.play.hide();
                        state = 0;
                        cover.destroy();
                     }
                  }
               }, 1000);
            }
            //main menu settings
            if (state === 0) {
               //hide all buttons
               this.pause.hide();
               this.play.hide();
               this.close.hide();
            }
         }
      }
   }
}
