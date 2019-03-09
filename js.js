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
                    var querySelectorImg = `#${e.getAttribute("data-slide")}>img`;
                    var imgs= document.querySelectorAll(querySelectorImg);
                    imgs[0].classList.remove("amt_tamgiac_left1");
                    imgs[1].classList.remove("amt_tamgiac_left2");
                    imgs[2].classList.remove("amt_tamgiac_right");
                    
                }
                    var slide= document.getElementById(this.getAttribute("data-slide"));
                    slide.classList.add("slide_enable");
                    var querySelectorImg = `#${this.getAttribute("data-slide")}>img`;
                    var imgs= document.querySelectorAll(querySelectorImg);
                    imgs[0].classList.add("amt_tamgiac_left1");
                    imgs[1].classList.add("amt_tamgiac_left2");
                    imgs[2].classList.add("amt_tamgiac_right");
                    clearInterval(_autoSwitchSlide);
                    resetAutoSwitchSlide();
            })
        })
    });
    //auto switch slide
    function autoSwitchSlide(){
        removeAllAnimationClass();
        for(var i=0;i<btn_switch.length;i++)
        {

            for(var j=0;j<btn_switch.length;j++){
                var slide= document.getElementById(btn_switch[j].getAttribute("data-slide"));
                slide.classList.remove("slide_enable");
            }
            if(btn_switch[i].classList[0]==="btn_switch_clicked"){
                btn_switch[i].classList.remove("btn_switch_clicked");
                if(i===2)
                {

                        btn_switch[0].classList.add("btn_switch_clicked");
                        var slide= document.getElementById(btn_switch[0].getAttribute("data-slide"));
                        slide.classList.add("slide_enable");

                        var querySelectorImg = `#${btn_switch[0].getAttribute("data-slide")}>img`;
                        var imgs= document.querySelectorAll(querySelectorImg);
                        imgs[0].classList.add("amt_tamgiac_left1");
                        imgs[1].classList.add("amt_tamgiac_left2");
                        imgs[2].classList.add("amt_tamgiac_right");
                }
                else{
                        btn_switch[i+1].classList.add("btn_switch_clicked");
                        var slide= document.getElementById(btn_switch[i+1].getAttribute("data-slide"));
                        slide.classList.add("slide_enable");

                        var querySelectorImg = `#${btn_switch[i+1].getAttribute("data-slide")}>img`;
                        var imgs= document.querySelectorAll(querySelectorImg);
                        imgs[0].classList.add("amt_tamgiac_left1");
                        imgs[1].classList.add("amt_tamgiac_left2");
                        imgs[2].classList.add("amt_tamgiac_right");
                }
                break;
            }
        }
    }
    // var autoSwitchSlide=setInterval(autoSwitchSlide,3000);
    function resetAutoSwitchSlide()
    {
        _autoSwitchSlide=setInterval(autoSwitchSlide,3000);
    }
    resetAutoSwitchSlide();
    //function remove all class animation
    function removeAllAnimationClass(){
        btn_switch.forEach((e)=>{
                var querySelectorImg = `#${e.getAttribute("data-slide")}>img`;
                var imgs= document.querySelectorAll(querySelectorImg);
                imgs[0].classList.remove("amt_tamgiac_left1");
                imgs[1].classList.remove("amt_tamgiac_left2");
                imgs[2].classList.remove("amt_tamgiac_right");
        })
    }
},false)