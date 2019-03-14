document.addEventListener("DOMContentLoaded",function(){
   
    var btn_switch=Array.prototype.slice.call(document.querySelectorAll(".btn_switch>ul>li"));
    var slides =Array.prototype.slice.call(document.querySelectorAll(".parent>.slide"));
    //event click switch slide
    btn_switch.forEach(element => {
        
        element.addEventListener("click",function(){
            this.classList.add("btn_switch_clicked");
            btn_switch.forEach(e => {
            	if(e!=this)
            	{
                    e.classList.remove("btn_switch_clicked");
                    var slide= document.getElementById(e.getAttribute("data-slide"));
                    slide.classList.remove("slide_enable");
                }
                    var slide= document.getElementById(this.getAttribute("data-slide"));
                    slide.classList.add("slide_enable");
                    clearInterval(_autoSwitchSlide);
                    resetAutoSwitchSlide();
            })
        })
    });
    //auto switch slide
    function autoSwitchSlide(){
        for(var i=0;i<btn_switch.length;i++)
        {
            if(btn_switch[i].classList[0]==="btn_switch_clicked")
            {
                var slide= document.getElementById(btn_switch[i].getAttribute("data-slide"));
                slide.querySelectorAll("img")[0].classList.add("tamgiac_left1_hidden");
                slide.querySelectorAll("img")[1].classList.add("tamgiac_left2_hidden");
                slide.querySelectorAll("img")[2].classList.add("tamgiac_right_hidden");
            }
            else{
                var slide= document.getElementById(btn_switch[i].getAttribute("data-slide"));
                slide.querySelectorAll("img")[0].classList.remove("tamgiac_left1_hidden");
                slide.querySelectorAll("img")[1].classList.remove("tamgiac_left2_hidden");
                slide.querySelectorAll("img")[2].classList.remove("tamgiac_right_hidden");
            }
        }
        setTimeout(() => {
             for(var i=0;i<btn_switch.length;i++)
        {
            var slide= document.getElementById(btn_switch[i].getAttribute("data-slide"));
            slide.classList.remove("slide_enable");
            if(btn_switch[i].classList[0]==="btn_switch_clicked"){
                btn_switch[i].classList.remove("btn_switch_clicked");
                if(i===2)
                {
                            btn_switch[0].classList.add("btn_switch_clicked");
                            var slide= document.getElementById(btn_switch[0].getAttribute("data-slide"));
                            slide.classList.add("slide_enable");  
                }
                else{
                   
                        btn_switch[i+1].classList.add("btn_switch_clicked");
                        var slide= document.getElementById(btn_switch[i+1].getAttribute("data-slide"));
                        slide.classList.add("slide_enable");
                }
                break;
            }
        }       
        },1000);
    }
    function resetAutoSwitchSlide()
    {
        _autoSwitchSlide=setInterval(autoSwitchSlide,5000);
    }
    resetAutoSwitchSlide();
},false)