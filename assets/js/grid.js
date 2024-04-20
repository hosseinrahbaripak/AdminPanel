$(document).ready(function () {

    function removeAllSidebarToggleClass(){
        $("#sidebar-toggle-hide").removeClass("d-none");
        $("#sidebar-toggle-hide").removeClass("d-md-inline");
        $("#sidebar-toggle-show").removeClass("d-inline");
        $("#sidebar-toggle-show").removeClass("d-md-none"); 
    }


    $("#sidebar-toggle-hide").click(function () { 
        $("#sidebar").fadeOut(300);
        $("#main-body").animate({width:"100%"},300);
        setTimeout(() => {
            removeAllSidebarToggleClass();
            $("#sidebar-toggle-hide").addClass("d-none");
            $("#sidebar-toggle-show").removeClass("d-none");
        }, 300);
    });
    $("#sidebar-toggle-show").click(function () { 
        $("#sidebar").fadeIn(300);
        setTimeout(() => {
            removeAllSidebarToggleClass();
            $("#sidebar-toggle-show").addClass("d-none");
            $("#sidebar-toggle-hide").removeClass("d-none");
        }, 300);
    });

    $("#menu-toggle").click(()=>{
        $("#body-header").toggle(300);
    });

    $("#search-toggle").click(()=>{
        $("#search-toggle").removeClass("d-md-inline");
        $("#search-area").addClass("d-md-inline");
        $("#search-input").animate({width: "12rem"},300);
    });
    $("#search-area-hide").click(()=>{
        $("#search-input").animate({width: "0"},300);
        setTimeout(()=>{
            $("#search-area").removeClass("d-md-inline");
            $("#search-toggle").addClass("d-md-inline");
        },300);
    });
    $("#header-notification-toggle").click(function (e) { 
        $("#header-notification").fadeToggle(300);
    });
    $("#header-comment-toggle").click(function (e) { 
       $("#header-comment").toggle(300); 
    });
    $("#header-profile-toggle").click(function (e) { 
        $("#header-profile").toggle(300);
    });
    $(".sidebar-group-link").click(function(e){
        $(".sidebar-group-link").removeClass("sidebar-group-link-active");
        $(".sidebar-group-link .sidebar-dropdown-toggle .angle").removeClass("fa-angle-down");
        $(".sidebar-group-link .sidebar-dropdown-toggle .angle").addClass("fa-angle-left");
        $(this).addClass("sidebar-group-link-active");
        $(this).children(".sidebar-dropdown-toggle").children(".angle").addClass("fa-angle-down");
        $(this).children(".sidebar-dropdown-toggle").children(".angle").removeClass("fa-angle-left");
    });
});
$("#full-screen").click(function(){
    toggleFullScreen();
});
function toggleFullScreen(){
    if((document.fullScreenElement && document.fullScreenElement !== null)||
    (!document.mozFullScreen && !document.webkitIsFullScreen)){
        if(document.documentElement.requestFullScreen){
            document.documentElement.requestFullScreen();
        }
       else if(document.documentElement.mozRequestFullScreen){
            document.documentElement.mozRequestFullScreen();
        }
        if(document.documentElement.webkitRequestFullScreen){
            document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        $("#screen-compress").removeClass("d-none");
        $("#screen-expand").addClass("d-none");
    }
    else{
        if(document.cancelFullScreen){
            document.cancelFullScreen();
        }
        else if(document.mozCancelFullScreen){
            document.mozCancelFullScreen();
        }
        else if(document.webkitCancelFullScreen){
            document.webkitCancelFullScreen();
        }
        $("#screen-compress").addClass("d-none");
        $("#screen-expand").removeClass("d-none");
    }
}

