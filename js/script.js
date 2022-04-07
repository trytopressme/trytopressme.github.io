const btn = document.getElementById('pressme')

btn.onclick = function() {
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
}

btn.addEventListener("mouseover", moveHover)

function moveHover() {
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*450)+1;

    setTimeout(function(){
        btn.style.top = j + "px";
        btn.style.left = i + "px";
    }, 50); 
}
