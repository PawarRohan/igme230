src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"

//jquery
$(".menuholder").click(function(){
    $(this).find(".submenu").slideToggle();
});

//ajax
let selection = ("article0.txt");

$('input[name="content"]').on('change', function(){
    selection = $(this).val();
    $("article").find("div").find("p").load(selection);
});


//increment button
let i = 0;

$('#clickme').click(function() {
    i = i + 1;
    $("#count").text(i);
});