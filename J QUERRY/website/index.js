$("html").css({
    "scroll-behavior": "smooth",
})
$(".navbar").css({
    "padding": "1rem 8rem",
    "z-index": "1000",
})
$("#navbarSupportedContent > ul > li:nth-child(n) > a").css({
    "color": "#fff",
    "font-size": "1.1rem",
    "padding": "0 1rem",
});
$("#navbarSupportedContent > ul > li:nth-child(1) > a").on("click", function(){
    setTimeout(()=>{
        $("#navbarSupportedContent > ul > li:nth-child(1) > a").css("color", "red");
    },100);
    
})
$(".tittle").css({
    "font-size": "1.3rem",
    "color": "#fff",
    "font-weight": "700",
});

$("#navbarSupportedContent").css({
    "justify-content": "right"
})

// HOME
$("#home-bar").css({
    "height": "100vh",
    "width": "100%",
});


//CONTECT

$("#contect-one").css({
    "height": "80vh",
    "width": "80vw",
});

//FOOOTER
$(".width-33").css({
    "width": "33%",
});