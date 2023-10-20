$(document).ready(function() {

    // HIDE & SHOW
    $("#hideBtn").click(function() {
        $("#imeg").hide(1000);
    });
    $("#showBtn").click(function() {
        $("#imeg").show(1000);
    });
    
    // slideDown & slideUp
    $("#sldDown").click(function() {
        $("#imeg").slideDown(1000,'swing'); 
    });
    $("#sldUp").click(function() {
        $("#imeg").slideUp(1000,'swing');
    });

    // fadeIn & Out
    $("#fadeOut").click(function() {
        $("#imeg").fadeTo(1000,0.5,'linear');
    });
    $("#fadeIn").click(function() {
        $("#imeg").fadeTo(1000,1,'linear');
    });

    $("#fadeToggle").click(function() {
        $("#imeg").fadeToggle(1000,'linear');
    });

    // ANIMATE
    $("#animateBtn").click(function() {
        $("#imeg").animate({
            width: "+=300px",
            height: "+=300px",
        }, "fast", function(){
            alert("(ง'̀-'́)ง");
        });
    });
});