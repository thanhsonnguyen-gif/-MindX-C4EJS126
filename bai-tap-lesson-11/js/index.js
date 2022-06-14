const clickme = document.getElementById("btn_1");
clickme.onclick = function(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
}

const clicktoUp_1 = document.getElementById("btn_2")
clicktoUp_1.onclick = function() {
    let i = parseInt(document.getElementById("btn_2").innerHTML);
    i = i +1;
    clicktoUp_1.innerHTML=i;
}