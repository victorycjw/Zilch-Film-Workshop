//��������JS
var video=document.getElementById("video");
//���ŷ���
function broadcast(){
    video.play();
}
//��ͣ
function pause(){
    video.pause();
}
//���
function fast(){
    video.currentTime+=10;
}
//����
function slow(){
    video.currentTime-=10;
}
//����
function mute(obj){
    if(video.muted){
        obj.innerHTML="����";
        video.muted=false;
    }else{
        obj.innerHTML="������";
        video.muted=true;
    }
}
//����(3)
function fastspeed(){
    video.playbackRate=2;
}
//���٣�3��
function slowspeed(){
    video.playbackRate=1/2;
}

function normal(){
    video.playbackRate=1;
}

//��������
function upper(){
    video.volume+=0.3;
}
//��������
function lower(){
    video.volume-=0.3;
}