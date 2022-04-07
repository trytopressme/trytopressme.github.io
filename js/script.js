const btn = document.querySelector('div.center')

btn.onclick = function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}

btn.addEventListener("mouseover", moveHover)

function moveHover() {
    var i = Math.floor(Math.random()*1100)+1;
    var j = Math.floor(Math.random()*500)+1;

    setTimeout(function(){
        btn.style.left = i + "px";
        btn.style.top = j + "px";
    }, 100); 
}