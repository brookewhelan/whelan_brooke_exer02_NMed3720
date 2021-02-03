console.log("hello world");


var $one = $("#l1");
var $two = $("#l2");
var $three = $("#l3");
var $four = $("#l4");
var $five = $("#l5");
var $six = $("#l6");



$one.on("click", function () {
    $(this).hide();
    $two.show();
    $("body").css("background-color", "#e6c1be");
})

$two.on("click", function () {
    $(this).hide();
    $three.show();
    $("body").css("background-color", "#dbab7b");

})

$three.on("click", function () {
    $(this).hide();
    $four.show();
    $("body").css("background-color", "#e6d5be");

})

$four.on("click", function () {
    $(this).hide();
    $five.show();
    $("body").css("background-color", "#b5c7a5");

})

$five.on("click", function () {
    $(this).hide();
    $six.show();
    $("body").css("background-color", "#a5c5c7");

})
