src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"


// jquery nav toggle
$(".submenu").parent("div").click(function(){
    $(this).find(".submenu").slideToggle();
});


//for content loading

let selection = ("story0.txt");
$("#story").load(selection);

let selectZero = $("#stories li:nth-child(1)");
let selectOne = $("#stories li:nth-child(2)");
let selectTwo = $("#stories li:nth-child(3)");

selectZero.click(function(){
    let selection = ("story0.txt");
    $("#story").load(selection);
});
selectOne.click(function(){
    let selection = ("story1.txt");
    $("#story").load(selection);
});
selectTwo.click(function(){
    let selection = ("story2.txt");
    $("#story").load(selection);
});


//for css changes

let colorOne = $("#colors li:nth-child(1)");
let colorTwo = $("#colors li:nth-child(2)");

colorOne.click(function(){
    $("#source").css("background-color", "lightpink");
    console.log("skeet");
});
colorTwo.click(function(){
    $("#source").css("background-color", "lightsalmon");
    console.log("yoot");
});


//increment button
let i = 0;
$("#currentcount").text(i);

$('#increment').click(function() {
    i = i + 1;
    $("#currentcount").text(i);
});