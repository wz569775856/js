function bind(el,name,fn){
    return el.addEventListener?el.addEventListener(name,fn,false):el.attachEvent('on'+name,fn); 
} 

function isXP(){
    var ua = navigator.userAgent.split(";"); 
    if(ua[2] && ua[2].indexOf("Windows NT 5.1")!=-1){ 
        return true;
    }
    return false;
}

function setBody(){
    document.getElementsByTagName("body")[0].className = "body_1000";
    if(document.body.clientWidth < 1200){    
        document.getElementsByTagName("body")[0].className = "body_1000";
    }else{
        document.getElementsByTagName("body")[0].className = "body_1200";
    }
}

setBody();
var setBodyTimeId;
function setBodyTime(){
    clearTimeout(setBodyTimeId);
    setBodyTimeId = setTimeout(setBody,500);
}

bind(window,'resize',setBodyTime);