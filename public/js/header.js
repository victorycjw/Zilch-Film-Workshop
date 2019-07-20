//js/header.js
/*包含页头相关的所有代码*/
$(function(){
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
            // console.log(html)
            $(result).replaceAll("#header");
            $(`<link rel="stylesheet" href="css/header.css"/>`).appendTo("head");
            $(`<link rel="stylesheet" href="css/common.css"/>`).appendTo("head");
        }
    })
})