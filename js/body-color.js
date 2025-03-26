const bodyElement = document.getElementById("body");
document.getElementById('color-btn').addEventListener('click',function(){
    const colors = ["#aed6f1", "#a3e4d7", "#fad7a0", "#d7dbdd", "#85929e"];
    bodyElement.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});