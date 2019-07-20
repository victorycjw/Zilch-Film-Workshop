//js/footer.js
/*包含页头相关的所有代码*/
$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(result){
            // console.log(html)
            $(result).replaceAll("#footer");
            $(`<link rel="stylesheet" href="css/footer.css"/>`).appendTo("head");
            $(`<link rel="stylesheet" href="css/common.css"/>`).appendTo("head");
        }
    })
})