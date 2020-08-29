var btn = document.getElementById('btn');
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var mousex, mousey; // 直前のマウス座標用
var state = false; // 現在クリックしているかどうか
var color = 0;

canvas.width = window.innerWidth ;
canvas.height = window.innerHeight ;

ctx.lineWidth = 50;
ctx.lineCap = 'round'; //線の丸み

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mousedown', mouseDown);
canvas.addEventListener('mouseup', mouseUp);
btn.addEventListener('click', clearBtn);

function clearBtn() {
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

function mouseDown(e) {
  // クリックした座標位置を取得
  mousex = e.clientX;
  mousey = e.clientY;
  state = true; // クリック状態をON
}
function mouseUp() {
  state = false;
}

function mouseMove(e) {
  if(!state) return; // クリックされてなかったら実行しない

  var w = Math.random() * 51;

  ctx.lineWidth = w;
  color++;
  ctx.strokeStyle = 'hsl('+color+',100%, 50%)';
  ctx.beginPath();
  ctx.moveTo(mousex, mousey); // 線の書き始めの位置
  ctx.lineTo(e.clientX, e.clientY); // 書き始めの位置からマウスの位置まで線を引く
  ctx.stroke();

  mousex = e.clientX;
  mousey = e.clientY;
}