//播放设置JS
var video=document.getElementById("video");
//播放方法
function broadcast(){
    video.play();
}
//暂停
function pause(){
    video.pause();
}
//快进
function fast(){
    video.currentTime+=10;
}
//快退
function slow(){
    video.currentTime-=10;
}
//静音
function mute(obj){
    if(video.muted){
        obj.innerHTML="静音";
        video.muted=false;
    }else{
        obj.innerHTML="不静音";
        video.muted=true;
    }
}
//加速(3)
function fastspeed(){
    video.playbackRate=2;
}
//减速（3）
function slowspeed(){
    video.playbackRate=1/2;
}

function normal(){
    video.playbackRate=1;
}

//调高声音
function upper(){
    video.volume+=0.3;
}
//降低声音
function lower(){
    video.volume-=0.3;
}