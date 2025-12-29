$(document).ready(function() {
    $("h1").css("color","red");
    // (property , value)
});
console.log($("h1").css("font-size"))
// if we pass only property we get current propert details.
// if we pass both propert and value then we update both.
$("#bluebtn").click(()=>{
    $("h1").css("color","blue");
})
$("#cyanbtn").click(()=>{
    $("h1").css("color","cyan")
})
$("#pinkbtn").click(()=>{
    $("h1").css("color","pink");
})
$("#yellowbtn").click(()=>{
    $("h1").css("color","yellow");
})
$("#greenbtn").click(()=>{
    $("h1").css("color","green");
})
$("#blackbtn").click(()=>{
    $("h1").css("color","black");
})
//change text inside element

$("h1").addClass("big-title margin-50 border");
//adding multiple css class styles as property

$("h1").click(function(){
    console.log("clicked....")
    
})

$("h1").on("click",()=>{
    $("buttons").fadeToggle();
})
