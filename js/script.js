var up_timer;
 
function getPosition(){
	horizontal = document.body.scrollLeft || document.documentElement.scrollLeft;
	vertical = document.body.scrollTop  || document.documentElement.scrollTop;
}
 
function pageup(x,y){
	if (up_timer) {
		clearTimeout(up_timer);
	}
	if (y >= 1) {
		getPosition();
		var divisionY = (vertical-(vertical/7));
		var Y = Math.floor(divisionY);
		window.scrollTo(horizontal,Y);
		up_timer = setTimeout("pageup("+horizontal+","+Y+")",25);
	} else {
		window.scrollTo(horizontal,0);
		clearTimeout(up_timer);
	}
}
 
function pageTop(){
	getPosition();
	pageup(horizontal,vertical);
}
