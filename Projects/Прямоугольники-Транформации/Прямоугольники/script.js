 $("div.inner").css({
    width: "300px",
    height: "50px",
    margin: "10px",
    backgroundColor: "red",
    borderRadius:"9px"
});
            
$(".inner").on("click",function() {
    $(this).css({   
        backgroundColor:"black" 
    });

    $(this).siblings().css({
         backgroundColor: "red"    
    });
});