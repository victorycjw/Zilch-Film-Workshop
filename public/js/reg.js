function verify_2(){
    var reg2=/^(\w|\d){6,12}$/;
    if(reg2.test(uname.value)){
        v2.innerHTML="您的用户名可用";
    }else{
        v2.innerHTML="您的用户名输入有误，请重新输入";
    }
}

function verify_3(){
    var reg3=/^(\w|\d|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\-|\=|\[|\]|\{|\}|\\|\||\;|\:|\"|\"|\,|\.|\/|\?){8,16}$/;
    if(reg3.test(upwd.value)){
        v3.innerHTML="您的密码可用";
    }else{
        v3.innerHTML="您的密码输入有误，请重新输入";
    }
}

function verify_4(){
    if(rupwd.value==upwd.value){
        v4.innerHTML="密码一致";
    }else{
        v4.innerHTML="两次密码不一致，请重新输入";
    }
}

function verify_5(){
    var reg5=/^1[3-8]\d{9}$/;
    if(reg5.test(phone.value)){
        v5.innerHTML="您的手机号输入正确";
    }else{
        v5.innerHTML="您的手机号输入有误，请重新输入";
    }
}