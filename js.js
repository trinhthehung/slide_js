document.addEventListener("DOMContentLoaded",function(){
    btn_switch=Array.prototype.slice.call(document.querySelectorAll(".btn_switch>ul>li"));
    btn_switch.forEach(element => {
        element.addEventListener("click",function(){
            this.classList.add("btn_switch_clicked");
            btn_switch.forEach(e => {
            	if(e!=this)
            	{
            		e.classList.remove("btn_switch_clicked");
            	}
            })
        })
    });

},false)