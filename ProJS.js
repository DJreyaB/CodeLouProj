//window resize based on browser event
$(window).resize(function(){
	if ($(window).width() <= 800){
		// do something here
  $("#name").css("color", "green");
	}
  if ($(window).width() > 800){
    // do something here
  $("#name").css("color", "red");
}
});
