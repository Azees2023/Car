/*const options = {
    threshold: 0.5,
};



const observer = new IntersectionObserver((entries , observer) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting) {
            entry.target.classList.add(("show"),1000);
            observer.unobserver(entry.target);
        }

    });

});

const scroll = document.querySelectorAll(".scroll-page");
scroll.forEach((el) => observer.observe(el));*/




/*$(document).ready(function(){
    $(".scroll1").waypoint(function(){
        $(".scroll1").addClass("animate__animated animate__fadeInLeft");
    },2000);

});*/

$(document).ready(function(){
    $(".img").waypoint(function(){
        $(".img").addClass("animate__animated animate__fadeInLeft");
    },{offset:"53%"});

    $(".img1").waypoint(function(){
        $(".img1").addClass("animate__animated animate__fadeInLeft");
    },{offset:"100%"});

    $("#he").waypoint(function(){
        $("#he").addClass("animate__animated animate__backInRight");
    },{offset:"55%"});

    
    $("#he1").waypoint(function(){
        $("#he1").addClass("animate__animated animate__backInRight");
    },{offset:"103%"});

    $("#he2").waypoint(function(){
        $("#he2").addClass("animate__animated animate__backInRight");
    },{offset:"56%"});

    $("#he21").waypoint(function(){
        $("#he21").addClass("animate__animated animate__backInRight");
    },{offset:"60%"});

    $(".para").waypoint(function(){
        $(".para").addClass("animate__animated animate__bounceInUp");
    },{offset:"57%"});

    $(".para1").waypoint(function(){
        $(".para1").addClass("animate__animated animate__bounceInUp");
    },{offset:"61%"});





    $(".card").waypoint(function(){
        $(".card").addClass("animate__animated animate__fadeInLeft");
    },{offset:"102%"});

    $(".card1").waypoint(function(){
        $(".card1").addClass("animate__animated animate__fadeInLeft");
    },{offset:"104%"});


    $(".card2").waypoint(function(){
        $(".card2").addClass("animate__animated animate__fadeInLeft");
    },{offset:"105%"});







});


$(document).ready(function(){
    $("#card_btn1").click(function(){
        $(this).css("background","blue");
        $(this).css("color","white")
    });
});
$(document).ready(function(){
    $("#card_btn2").click(function(){
        $(this).css("background","blue");
        $(this).css("color","white")
    });

});    
$(document).ready(function(){
    $("#card_btn3").click(function(){
        $(this).css("background","blue");
        $(this).css("color","white")
    });
});


