document.addEventListener("DOMContentLoaded",function(){
    btn_switch=Array.prototype.slice.call(document.querySelectorAll(".btn_switch>ul>li"));
    slides =Array.prototype.slice.call(document.querySelectorAll(".parent>.slide"));
    btn_switch.forEach(element => {
        element.addEventListener("click",function(){
            this.classList.add("btn_switch_clicked");
            btn_switch.forEach(e => {
            	if(e!=this)
            	{
                    e.classList.remove("btn_switch_clicked");
                    var slide= document.getElementById(e.getAttribute("data-slide"));
                    // e.classList.remove("slide_enable");
                    slide.classList.remove("slide_enable");
                }
                    var slide= document.getElementById(this.getAttribute("data-slide"));
                    slide.classList.add("slide_enable");
            })
        })
    });

},false)