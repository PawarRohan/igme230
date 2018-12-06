/* Don't use <script> tags in a linked js file! */
src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"


// ajax
let selection = ("content1.txt")
$("#choose-content").val(selection);
$("#content").load(selection);

$("choose-content").change(function(){
    selection = $(this).val();
    $("#content").load(selection);

}); 


//jquery
$(".menubox").click(function(){
    $(this).find(".submenu").slideToggle();
});
