
gsap.from(".sec img",{
    opacity:0,
    scale:0,
    delay:1,
    duration:1,
    scrollTrigger:
    {
        trigger:".tog",
        scroller:"body",
       scrub:1,
    }
})

gsap.from(".content p",{
    scale:0,
    opacity:0,
    delay:1,
    duration:1,
    scrollTrigger:
    {
        trigger:".tog",
        scroller:"body",
       scrub:1,
    }
    
})

gsap.from(".sec h1" ,{
    opacity:0,
    x:1000,
    delay:0,
    duration:2,
})

gsap.from(".sec",{
    opacity:0,
    y:500,
    delay:0,
    duration:2,
})
gsap.from(".social a",{
    x:1000,
    stagger:1,
    scrollTrigger:
    {
        trigger:".tog",
        scroller:"body",
       scrub:1,
       pin:".tog"
    }
})
gsap.from(".about h5",{
    delay:0,
    duration:2,
    stagger:1,
    y:1000,
    scrollTrigger:
    {
        trigger:".about  ",
        scroller:"body",
       scrub:1,
    }
})

gsap.from(".project .sect .card",{
    opacity:0,
    stagger:0.5,
    x:100,
    scrollTrigger:
    {
        trigger:".project .sect .card",
        scroller:"body",
        start:"top 60%"
    }
})

gsap.from(".left a, .right h4",{
    opacity:0,
    stagger:0.2,
    delay:0.5,
    y:50,
    scrollTrigger:
    {
        trigger:".project .sect .card",
        scroller:"body",
        start:"top 10%"
    }
})

window.onload = function() {
    var images = document.getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function() {
            var src = this.src;
            var popup = document.createElement("div");
            popup.className = "popup";
            var img = document.createElement("img");
            img.src = src;
            img.style.maxWidth = "800px";
            img.style.maxHeight = "800px";
            popup.appendChild(img);
            document.body.appendChild(popup);

            popup.style.position = "fixed";
            popup.style.top = "50%";
            popup.style.left = "50%";
            popup.style.transform = "translate(-50%, -50%)";
            popup.style.background = "white";
            popup.style.borderRadius = "5px";
            popup.style.padding = "5px";
            popup.style.border = "1px solid black";
            popup.style.zIndex = "1000";

            var close = document.createElement("button");
            close.textContent = "X";
            close.style.position = "absolute";
            close.style.top = "0";
            close.style.right = "0";
            close.style.background="Red";
            close.style.color="white";
            close.addEventListener("click", function() {
                document.body.removeChild(popup);
            });
            popup.appendChild(close);
        });
    }
};


