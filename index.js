// const { Physics } = require("phaser");

// const config={
//     type:Phaser.AUTO,
//     parent:"gameContainer",
//     width:800,
//     height:600,
//     canvas:document.querySelector('canvas'),
//     physics:{
//       default:"arcade",
//       arcade:{
//         debug:false
//       }
//     },
//     scene: {
//       preload: preload,
//       create: create,
//       update: update
//   }
// }

// var game=new Phaser.Game(config)


// function preload(){
// this.load.image('Sky','assets/Sky.png')
// this.load.image('ball','assets/ball.png')
// }



// var balls;
// let sessionarray=[]
// let sessionId=generateSessionId()
// let counter;
// let startTime=new Date()
// let countDown;
// let scoreText;
// function create(){
//   this.add.image(400,300,'Sky')
//   balls=this.physics.add.sprite(400,300,'ball')
//   // this.balls.setInteractive();
//   balls.setCollideWorldBounds(true);
//   //setwidth and hight of the ball
//   balls.displayWidth=80;
//   balls.displayHeight=60;

// scoreText = this.add.text(16, 16, "counter:0",+counter, { fontSize: '32px', fill: '#000' });
// const startButton = document.getElementById('startButton');
//  startButton.addEventListener('click',startGame);
// }
// function update(){
  
// }
// function startGame(){
//   counter=Math.floor(Math.random() * (12)) + 1;
//  if(countDown){
//   return
//  }
//    countDown=setInterval(() => {
//       counter--;
//       scoreText.setText(`counter :`+ counter)
//     if(counter===0){
//       clearInterval(countDown)
//       countDown=0
//       endTime = new Date();
//       sessionarray.push({id:sessionId,start:startTime,end:endTime})
//       const timestart=document.getElementById('startTime')
//       timestart.innerHTML=startTime.getFullYear()+ "/" +startTime.getMonth()+ "/"+startTime.getDate()+ "/" +startTime.toLocaleTimeString();
//       const session=document.getElementById("session")
//       let timeend=document.getElementById("endTime")
//       timeend.innerHTML=endTime.getFullYear()+ "/" +endTime.getMonth()+ "/"+endTime.getDate()+ "/" +endTime.toLocaleTimeString();
//       session.textContent=sessionId
//       console.log(sessionarray)
//     }
//   }, 1000);
 
// }

// function generateSessionId() {
//   let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//   let sessionId = "";
//   for (let i = 0; i < 10; i++) {
//     sessionId += chars.charAt(Math.floor(Math.random() * chars.length));
//   }
//   return sessionId;
// }







const config = {
  type: Phaser.AUTO,
  parent: "gameContainer",
  width: 800,
  height: 600,
  canvas: document.querySelector('canvas'),
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.image('Sky', 'assets/Sky.png');
  this.load.image('ball', 'assets/ball.png');
}

var balls;
let sessionarray = [];
let sessionId;
let counter;
let startTime;
let endTime;
let countDown;
let scoreText;
let sky;
// let ballMoving = false;
function create() {
    this.add.image(400, 300, 'Sky');
  balls = this.physics.add.sprite(400, 300, 'ball').setScale(0.2);
  balls.setCollideWorldBounds(true);
  balls.setInteractive();
  balls.setBounce(1);
  
  // balls.body.allowGravity = false;
  balls.displayWidth = 80;
  balls.displayHeight = 60;
  // this.physics.add.collider(balls, sky);
  scoreText = this.add.text(16, 16, "counter: 0", { fontSize: '32px', fill: '#000' });

  const startButton = document.getElementById('startButton');
  startButton.addEventListener('click', startGame);
}

function update() {
  if (counter > 0) {
    // Move the ball
    balls.body.allowGravity = true;
    balls.body.setGravityY(600)
    // balls.setVelocity(Phaser.Math.Between(200, 200), 20);
    // balls.setVelocityY(300);
  } else{
    // Stop the ball
    balls.setVelocityY(0);
    balls.body.allowGravity=false
  }
}

function startGame() {
  
  // ballMoving=true
  if (countDown) {
    return; // Prevent starting a new countdown if it's already running
  }
  sessionId = generateSessionId();
  counter = Math.floor(Math.random() * (120-30+1)) + 30;
  startTime = new Date();
  endTime = null;
  sessionarray = [];

  scoreText.setText("counter: " + counter);

  countDown = setInterval(() => {
    counter--;
    
    scoreText.setText("counter: " + counter);
    if (counter === 0) {
      clearInterval(countDown);
      countDown = null; // Reset the countdown variable
      endTime = new Date();
      const session = {
        id: sessionId,
        start: startTime,
        end: endTime
      };
      sessionarray.push(session);
      const timestart = document.getElementById('startTime');
      timestart.innerHTML = startTime.getFullYear() + "/" + startTime.getMonth() + "/" + startTime.getDate() + "/" + startTime.toLocaleTimeString();
      const timeend = document.getElementById("endTime");
      timeend.innerHTML = endTime.getFullYear() + "/" + endTime.getMonth() + "/" + endTime.getDate() + "/" + endTime.toLocaleTimeString();
      const sessionElement = document.getElementById("session");
      sessionElement.textContent = sessionId;
    }
  }, 1000);
}

function generateSessionId() {
  let chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let sessionId = "";
  for (let i = 0; i < 10; i++) {
    sessionId += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return sessionId;
}











