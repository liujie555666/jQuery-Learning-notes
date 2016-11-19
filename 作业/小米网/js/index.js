/**
 * Created by Administrator on 2016/8/13.
 */
function $(id) {
    return document.getElementById(id);
}
function getstyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];//ie浏览器
    } else {
        return window.getComputedStyle(obj, null)[attr];//w3c浏览器
    }
}
function animate(obj, attrs, fn) {
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        var flag = true;
        for (var attr in attrs) {//传进来是那个属性,而且他的值是多少
            var current = 0;
            if (attr === "opacity") {
                current = Math.round(parseInt(getstyle(obj, attr) * 100)) || 0;
            } else {
                current = parseInt(getstyle(obj, attr))
            }
            var step = (attrs[attr] - current) /10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (attr === "opacity") {
                if ("opacity" in obj.style) {
                    obj.style.opacity = (current + step) / 100;
                } else {
                    obj.style.filter = "alpha(opacity)=" + (current + step);
                }
            }
            else if (attr === "zIndex") {
                obj.style.zIndex = attrs[attr];
            }
            else {
                obj.style[attr] = current + step + "px";
            }
            if (attr === "zIndex") {
                continue;
            }
            if (current != attrs[attr]) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(obj.timer);
            if (fn) {
                fn();//当定时器停止了,动画就结束了.如果有回调函数了,就回调函数了.
            }
        }

    }, 20)
}
function mygetElementsByClassName(classname, id) {
//                判断浏览器是否支持
    var dom;
    if (id) {dom = $(id);}
    else {dom = document;}
    if (document.getElementsByClassName) {return dom.getElementsByClassName(classname);}
//                 如果不支持,获取所有节点.
    var arr = [];
    var doms = dom.getElementsByTagName("*");
//之后找出类名的节点.
    for (var i = 0, len = doms.length; i < len; i++) {
        var classnames = doms[i].className.split(" ");
        for (var j = 0, le = classnames.length; j < le; j++) {
            if (classnames[j] == classname)
                arr.push(doms[i]);
        }
    }
    return arr;
}
onload = function () {
    var cart = $("cart");
    var carti = cart.children[0];
    var cartic = carti.children[0];
    var carticspan = carti.children[1];
    var cartm = cart.children[1]
    var cartmb = cartm.children[0];
    cart.onmouseover = function () {
        cartm.style.display = "block";
        animate(cartmb, {height: 85, lineHeight: 85});
        carti.setAttribute("class", "current")
        carticspan.setAttribute("class", "font current");
        cartic.setAttribute("class", "ico icon");
    }
    cart.onmouseout = function () {
        animate(cartmb, {height: 10, lineHeight: 0}, function () {
            cartm.style.display = "none";
        });
        carti.setAttribute("class", "");
        carticspan.setAttribute("class", "font");
        cartic.setAttribute("class", "icon");
    }
    var sear = $("sear");
    var txt = sear.children[0];
    var btn = sear.children[1];
    var btn11 = btn.children[0];
    var hotw = sear.children[2];
    var txthw = sear.children[3];
    txt.onfocus = function () {
        this.value = "";
        hotw.style.display = "none";
        this.style.border = "1px solid #FD6500";
        btn.style.border = "1px solid #FD6500";
        txthw.style.display = "block";
    }
    txt.onblur = function () {
        txthw.style.display = "none";
        hotw.style.display = "block";
        this.style.border = "1px solid #e0e0e0";
        btn.style.border = "1px solid #e0e0e0";
    }
    btn.onmouseover = function () {
        btn11.setAttribute("class", "imgwshow imgw");
    }
    btn.onmouseout = function () {
        btn11.setAttribute("class", "imgw");
    }
    var warp = $("warp");
    var home = warp.parentNode.parentNode.parentNode;
    var warps = warp.children;
    var timer = null, num = 0;
    timer = setInterval(gogo, 2000);
    home.onmouseover = function () {
        clearInterval(timer);
    }
    home.onmouseout = function () {
        timer = setInterval(gogo, 2000);
    }
    function gogo() {
        go(num);
        num++;
        if (num >4) {
            num = 0;
        }
    }

    function go(num) {
        for (var i = 0; i < warps.length; i++) {
            animate(warps[i], {opacity: 0})
        }
        warps[num].style.display = "block";
        animate(warps[num], {opacity: 100});
    }
    var wcon = $("wcon");
    var wcon1 = wcon.children[0];
    var wcon2 = wcon.children[1];
    var wcons = wcon1.children;
    var wconleft = wcon2.children[0];
    var wconright = wcon2.children[1];
    for (var i = 0; i < wcons.length; i++) {
        wcons[i].onclick = function (n) {
            return function () {
                go(n);
                num = n;
            }
        }(i)
    }

    wconleft.onclick = function () {
        var m = 0;
        m = num;
        m--;
        if (m <0) {
            m = 4;
        }
        go(m);
        num = m;
    }
    wconright.onclick = function () {
        var m = 0;
        m = num;
        m++;
        if (m > 4) {
            m =0;
        }
        go(m);
        num = m;
    }
    var navlt=$("navlt");
    var navlis=navlt.children;
    var chul=mygetElementsByClassName("navlichildren","navlt");
    for(var i=0,len=navlis.length-2;i<len;i++){
        navlis[i].sx=i;
        navlis[i].onmouseover=function () {
            for(var j=0;j<len;j++){
                chul[j].style.display="none";
            }
            var that=this;
            animate(chul[this.sx],{height:230},function () {
                for(var m=0,le=navlis.length-2;m<le;m++){
                    console.log(chul[m]);
                    chul[m].style.height=230+"px";
                }
            });
            chul[this.sx].style.display="block";

        }
        navlis[i].onmouseout=function () {

           var that=this;
            chul[that.sx].style.display = "none";
            // if()
            // animate(chul[this.sx],{height:0},function () {
            //     // chul[that.sx].style.height=0+"px";
            //     chul[that.sx].style.display = "none";
            // });
            // if(chul[this.sx].style.height==0){
            //     chul[this.sx].style.height=230+"px";
            // }
        }
    }

}