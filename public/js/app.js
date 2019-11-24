var socket = io();
var result = document.getElementById('result');



function send(){
    var val = document.getElementById('inp').value;
    socket.emit('message', {msg: val})
}


socket.on('all', (data)=>{  
  let p1 = document.createElement('p');
  let text = document.createTextNode(data.msg);
  p1.appendChild(text);
  let div=document.getElementById("chatbox")
  div.appendChild(p1);
})

socket.on('everyone', (data)=>{
  console.log(data);
})